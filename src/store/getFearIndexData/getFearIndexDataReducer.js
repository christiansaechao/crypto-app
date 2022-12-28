const initialState = {
    fearIndexData: null
}

export const GET_FEAR_INDEX_SUCCESS = 'GET_FEAR_INDEX_SUCCESS'; 

export default (state = initialState, action) => {
    console.log(action.payload); 
    switch (action.type) {
        case GET_FEAR_INDEX_SUCCESS:
            return {
                ...state,
                fearIndexData: action.payload
            }
        default: 
            return state; 
    }
}