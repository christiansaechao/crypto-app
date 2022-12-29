const initialState = {
  data: null,
  numDays: 30,
  isLoading: false,
  error: false,
  selectedCoin: 'bitcoin',
  chartType: 'price',
}

export const GET_CHARTS_PENDING = "GET_CHARTS_PENDING";
export const GET_CHARTS_SUCCESS = 'GET_CHARTS_SUCCESS';
export const GET_CHARTS_ERROR = 'GET_CHARTS_ERROR';
export const CHANGE_SELECTED_COIN = 'CHANGE_SELECTED_COIN'; 
export const CHANGE_CHART_TYPE = 'CHANGE_CHART_TYPE';
export const CHANGE_DATE_RANGE = 'CHANGE_DATE_RANGE'; 

export default (state = initialState, action) => {
  switch(action.type){
    case GET_CHARTS_SUCCESS: 
      return{
        ...state,
        data: action.payload,
        isLoading: false,
        error: false, 
      }
      case GET_CHARTS_PENDING:
        return{
          ...state,
          isLoading: true,
          error: false,
        }
      case GET_CHARTS_ERROR: 
        return {
          ...state,
          isLoading: false, 
          error: true
        }
      case CHANGE_SELECTED_COIN: 
        return{
          ...state, 
          selectedCoin: action.payload
        }
      case CHANGE_CHART_TYPE: 
        return{
          ...state,
          chartType: action.payload,
        }
      case CHANGE_DATE_RANGE: 
        return{
          ...state,
          numDays: action.payload
        }
    default:
      return state; 
  }
}