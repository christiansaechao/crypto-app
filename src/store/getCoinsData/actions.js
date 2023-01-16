import axios from "axios";
import {
  GET_COINS_SUCCESS,
  GET_MORE_COINS,
  GET_COINS_PENDING,
  GET_COINS_ERROR,
  INC_PAGE_NUM,
  GET_COIN_LIST
} from "./getCoinsDataReducer";

export const getCoinsData = () => async (dispatch, getState) => {
  const state = getState();
  try {
    dispatch({ type: GET_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.currency.selectedCurrency}&order=market_cap_desc&per_page=${state.coinsData.coinsPerPage}&page=${state.coinsData.pageNum}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: GET_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COINS_ERROR,
      payload: err,
    });
  }
};

export const getMoreCoins = () => async (dispatch, getState) => {
  const state = getState();
  try {
    dispatch({ type: GET_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.currency.selectedCurrency}&order=market_cap_desc&per_page=${state.coinsData.coinsPerPage}&page=${state.coinsData.pageNum}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: GET_MORE_COINS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COINS_ERROR,
      payload: err,
    });
  }
};

export const incPageNum = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: INC_PAGE_NUM,
    payload: state.coinsData.pageNum + 1,
  });
  dispatch(getMoreCoins());
};

export const getCoinList = (coinId) => async (dispatch, getState) => {
  const state = getState(); 
  const { data } = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.currency.selectedCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`);
  const randomIndexes = [];
  for (let i = 0; i < 3; i++) {
    const randCoin = data.splice(
      Math.floor(Math.random() * data.length),
      1
    )[0];
    if (randCoin.id !== coinId) randomIndexes.push(randCoin);
  }
  const newData = randomIndexes; 
  dispatch({
    type: GET_COIN_LIST,
    payload: newData
  })
}; 