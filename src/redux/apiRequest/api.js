import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL, URL} from './constant';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async headers => {
      const token = await AsyncStorage.getItem('token');
      console.log('tokens:', token);
      headers.set('Authorization', 'Bearer ' + token);
      // headers.set("Content-Type", "multipart/form-data");
      // headers.set("Content-Type", "application/json");
      headers.set('Accept', 'application/json');
    },
  }),

  refetchOnMountOrArgChange: true,
  tagTypes: [],
  endpoints: builder => ({
  login:builder.mutation({
    query:(payload)=>({
      url:URL.LOGIN,
      method:'POST',
      body:payload
    }),
    })
    
  }),
});

export const {
  useLoginMutation
} = api;
