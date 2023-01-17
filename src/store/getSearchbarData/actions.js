import axios from 'axios';
import { GET_SEARCHBAR_DATA_SUCCESS } from './getSearchbarData'; 

export const getSearchbarData = (value) => async (dispatch) => {
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/list?include_platform=false`
    );
    const filteredData = data.filter((coin) => {
      return coin.id.includes(value); 
    })
    dispatch({
        type: GET_SEARCHBAR_DATA_SUCCESS,
        payload: filteredData
    })
  } catch (err) {
    console.log(err.error);
  }
};

//https://crypto-app-server.herokuapp.com/coins/${value}