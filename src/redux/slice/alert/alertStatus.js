import { createSlice } from "@reduxjs/toolkit";

const alertStatus = createSlice({
  name: "alertStatus",
  initialState: {},
  reducers: {
    saveAlertStatus: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveAlertStatus } = alertStatus.actions;
export default alertStatus.reducer;
