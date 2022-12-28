import axios from 'axios';

import { 
    GET_FEAR_INDEX_SUCCESS
} from './getFearIndexDataReducer'; 

export const getFearIndexData = () => async (dispatch) => {
  try {
    const { data: {data} } = await axios(`https://api.alternative.me/fng/`);
    dispatch({
        type: GET_FEAR_INDEX_SUCCESS,
        payload: data[0]
    })
  } catch (err) {
    console.log(err.error);
  }
};
