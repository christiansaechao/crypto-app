import { configureStore } from "@reduxjs/toolkit";
import selectedCurrencyReducer from "./selectedCurrency/selectedCurrencyReducer";
import getCoinsDataReducer from "./getCoinsData/getCoinsDataReducer";
import getChartsDataReducer from "./getChartsData/getChartsDataReducer";
import getFearIndexDataReducer from "./getFearIndexData/getFearIndexDataReducer";

const store = configureStore({
  reducer: {
    coinsData: getCoinsDataReducer,
    chartsData: getChartsDataReducer,
    currency: selectedCurrencyReducer,
    fearIndexData: getFearIndexDataReducer
  }
});

export default store;