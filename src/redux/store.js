import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./alert";
import isLoadingReducer from "./isLoading";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    isLoading: isLoadingReducer,
  },
});

export default store;
