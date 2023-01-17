/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    coins: null
}

export const GET_SEARCHBAR_DATA_SUCCESS = 'GET_SEARCHBAR_DATA_SUCCESS'; 

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCHBAR_DATA_SUCCESS:
            return {
                ...state,
                coins: action.payload
            }
        default: 
            return state; 
    }
}