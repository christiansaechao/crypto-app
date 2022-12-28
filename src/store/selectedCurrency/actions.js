import axios from "axios";
import {
  GET_ALL_CURRENCIES,
  CHANGE_SELECTED_CURRENCY,
} from "./selectedCurrencyReducer";

export const getAllCurrencies = () => async (dispatch) => {
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`
    );
    dispatch({
      type: GET_ALL_CURRENCIES,
      payload: data,
    });
  } catch (err) {
    console.log(err.error);
  }
};

export const changeSelectedCurrency = (item) => (dispatch) => {
  dispatch({ type: CHANGE_SELECTED_CURRENCY, payload: item });
};
