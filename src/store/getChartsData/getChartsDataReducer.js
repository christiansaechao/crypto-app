const initialState = {
  data: null,
  numDays: 30,
  isLoading: false
}

export const GET_CHARTS_PENDING = "GET_CHARTS_PENDING";
export const GET_CHARTS_SUCCESS = 'GET_CHARTS_SUCCESS';
export const GET_CHARTS_ERROR = 'GET_CHARTS_ERROR'; 

export default (state = initialState, action) => {
  switch(action.type){
    case GET_CHARTS_SUCCESS: 
      return{
        ...state,
        data: action.payload,
        isLoading: false
      }
      case GET_CHARTS_PENDING:
        return{
          ...state,
          isLoading: true
        }
    default:
      return state; 
  }
}