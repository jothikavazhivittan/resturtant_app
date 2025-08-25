import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import alertMessage from '../slice/alert/alertMessage';
import alertStatus from '../slice/alert/alertStatus';
import {api} from '../apiRequest/api';
import {rtkQueryErrorLogger} from '../errorLogger';

const store = configureStore({
  reducer: {
    alertMessage: alertMessage,
    alertStatus: alertStatus,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(api.middleware, rtkQueryErrorLogger);
  },
});

export default store;
