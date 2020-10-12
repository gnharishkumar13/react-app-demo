import {CHANGE_SEARCH_FIELD, REQUEST_DATA_FAILURE, REQUEST_DATA_PENDING, REQUEST_DATA_SUCCESS} from "./constants";

//initialState
const initialStateSearch = {
    data: [],
    searchField: ''
}

//reducer follows 3 principles
export const searchDataReducer = (state = initialStateSearch, action = {}) => {
    // console.log(action.type)
    //console.log('action.payload: '+ action.payload)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload} // same as Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
};

const initialStateData = {
    data: [],
    isPending: false,
    error: ''
}


export const requestDataReducer = (state = initialStateData, action = {}) => {
    switch (action.type) {
        case REQUEST_DATA_PENDING:
            return {...state, isPending: true}

        case REQUEST_DATA_SUCCESS:
            return {...state, isPending: false, data: action.payload}

        case REQUEST_DATA_FAILURE:
            return {...state, isPending: false, error: action.payload}

        default:
            return state;
    }
}