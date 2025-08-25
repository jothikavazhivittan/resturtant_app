import { createSlice } from "@reduxjs/toolkit";

const alertMessage = createSlice({
  name: "alert",
  initialState: false,
  reducers: {
    saveAlertMessage: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveAlertMessage } = alertMessage.actions;
export default alertMessage.reducer;
