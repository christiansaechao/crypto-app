import axios from 'axios';
import { GET_SEARCHBAR_DATA_SUCCESS } from './getSearchbarData'; 

export const getSearchbarData = (value) => async (dispatch) => {
  try {
    const { data } = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${value}`
    );
    dispatch({
        type: GET_SEARCHBAR_DATA_SUCCESS,
        payload: data
    })
  } catch (err) {
    console.log(err.error);
  }
};