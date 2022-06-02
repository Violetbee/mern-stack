import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  isSuccess: "",
  alertText: "",
  alertType: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertText: (state, action) => {
      state.alertText = action.payload;
    },
    alertType: (state, action) => {
      state.alertType = action.payload;
    },
    changeSuccess: (state, action) => {
      state.isSuccess = action.payload;
      if (state.isSuccess === "TRUEFAIL") {
        state.showAlert = true;
        state.alertType = "danger";
        state.alertText = "Lütfen tüm boşlukları doldurun";
      } else {
        state.showAlert = true;
        state.alertType = "success";
        state.alertText = "Başarılı!";
      }
    },
  },
});

export const { alertText, alertType, changeSuccess } = alertSlice.actions;

export default alertSlice.reducer;
