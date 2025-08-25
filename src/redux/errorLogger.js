import {isRejectedWithValue} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveAlertMessage} from './slice/alert/alertMessage';
import {saveAlertStatus} from './slice/alert/alertStatus';

export const rtkQueryErrorLogger =
  ({dispatch, getState}) =>
  next =>
  action => {
    // console.log("action", action);
    if (isRejectedWithValue(action)) {
      console.log('errorLogger.js:', action);

      if (action?.payload?.status == 400) {
        dispatch(saveAlertMessage(true));
        dispatch(saveAlertStatus(action?.payload?.data?.message));
        console.log('koio');
      } else if (action?.payload?.status == 401) {
        AsyncStorage.clear()
          .then(() => {
            console.log('AsyncStorage cleared successfully');
            dispatch(saveAlertMessage(true));
            dispatch(saveAlertStatus(action?.payload));
          })
          .catch(error => {
            console.error('Error clearing AsyncStorage:', error);
            // Handle the error, e.g., dispatch an action or log it
          });
      } else if (action?.payload?.status == 500) {
        dispatch(saveAlertMessage(true));
        dispatch(saveAlertStatus(action?.payload));
      } else if (action?.payload?.status == 'FETCH_ERROR') {
        dispatch(saveAlertMessage(true));
        dispatch(saveAlertStatus({payload: {message: 'Check Your Internet'}}));
      } else {
        console.warn('Unhandled status code:', action?.payload?.status);
        // Handle unknown status codes, e.g., log a message or dispatch an action
      }
    }

    return next(action);
  };
