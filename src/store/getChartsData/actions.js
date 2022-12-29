import axios from "axios";
import {
  GET_CHARTS_SUCCESS,
  GET_CHARTS_PENDING,
  GET_CHARTS_ERROR,
  CHANGE_SELECTED_COIN,
  CHANGE_CHART_TYPE,
  CHANGE_DATE_RANGE
} from "./getChartsDataReducer";

export const getChartsData = () => async (dispatch, getState) => {
  const state = getState();
  try {
    dispatch({ type: GET_CHARTS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${state.chartsData.selectedCoin}/market_chart?vs_currency=${state.currency.selectedCurrency}&days=${state.chartsData.numDays}&interval=daily`
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

export const changeSelectedCoin = (coin) => (dispatch) => {
  dispatch({
    type: CHANGE_SELECTED_COIN,
    payload: coin
  });
  dispatch(getChartsData()); 
};

export const changeChartType = (chartType) => (dispatch) => {
  dispatch({
    type: CHANGE_CHART_TYPE, 
    payload: chartType
  })
}

export const changeDateRange = (dateRange) => (dispatch) => {
  dispatch({
    type: CHANGE_DATE_RANGE, 
    payload: dateRange
  });
  dispatch(getChartsData()); 
}
