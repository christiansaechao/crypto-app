const initialState = {
    coinData: null,
    isLoading: false,
    error: false
}

export const GET_COIN_DATA_SUCCESS = 'GET_COIN_DATA_SUCCESS'; 
export const GET_COIN_DATA_PENDING = 'GET_COIN_DATA_PENDING'; 
export const GET_COIN_DATA_ERROR = 'GET_COIN_DATA_ERROR';


export default (state = initialState, action) => {
    switch(action.type){
        case GET_COIN_DATA_SUCCESS:
            return {
                ...state, 
                coinData: action.payload,
                error: false, 
                isLoading: false, 
            }
        case GET_COIN_DATA_PENDING:
            return{
                ...state,
                error: false, 
                isLoading: true, 
            }
        case GET_COIN_DATA_ERROR:
            return{
                ...state,
                error: true, 
                isLoading: false, 
            }
        default: 
            return state; 
    }
}