const initialState = {
  data: [],
  coinsPerPage: 20,
  pageNum: 1,
  isLoading: false, 
  error: false, 
};

export const GET_COINS_PENDING = "GET_COINS_PENDING";
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS'; 
export const GET_MORE_COINS = 'GET_MORE_COINS'; 
export const GET_COINS_ERROR = 'GET_COINS_ERROR'; 
export const INC_PAGE_NUM = 'INC_PAGE_NUM'; 

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS_SUCCESS:
      return{
        ...state,
        data: [...action.payload], 
        isLoading: false,
      }
    case GET_COINS_PENDING:
      return{
        ...state, 
        error: false,
        isloading: true
      }
    case GET_COINS_ERROR:
      return {
        ...state,
        error: true,
        isloading: false 
      }
    case INC_PAGE_NUM: 
      return{
        ...state,
        pageNum: action.payload
      }
    case GET_MORE_COINS: 
      return{
        ...state,
        data: [...state.data, ...action.payload]
      }
    default:
      return state;
  }
};
