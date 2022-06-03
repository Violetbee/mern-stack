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
      } else if (state.isSuccess === "TRUESUCCESS") {
        state.showAlert = true;
        state.alertType = "success";
        state.alertText = "Başarılı!";
      } else {
        state.showAlert = false;
        state.alertType = "nötr";
        state.alertText = "nötr";
      }
    },
  },
});

export const { alertText, alertType, changeSuccess } = alertSlice.actions;

export default alertSlice.reducer;
