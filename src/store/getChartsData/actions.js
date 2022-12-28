import axios from "axios";
import {
  GET_CHARTS_SUCCESS,
  GET_CHARTS_PENDING,
  GET_CHARTS_ERROR,
} from "./getChartsDataReducer";

export const getChartsData = () => async (dispatch, getState) => {
  const state = getState();
  try {
    dispatch({ type: GET_CHARTS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${state.currency.selectedCurrency}&days=${state.chartsData.numDays}&interval=daily`
    );
    dispatch({
      type: GET_CHARTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_CHARTS_ERROR,
      payload: err,
    });
  }
};
