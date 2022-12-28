const initialState = {
    allCurrencies: null,
    selectedCurrency: 'USD',
};

export const GET_ALL_CURRENCIES = 'GET_ALL_CURRENCIES';
export const CHANGE_SELECTED_CURRENCY = 'CHANGE_SELECTED_CURRENCY'; 

export default (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_CURRENCIES: 
            return{
                ...state,
                allCurrencies: action.payload
            }
        case CHANGE_SELECTED_CURRENCY: 
            return {
                ...state,
                selectedCurrency: action.payload
            }
        default:
            return state; 
    }
}