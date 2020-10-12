//action -> reducer -> store -> make changes view
import {CHANGE_SEARCH_FIELD, REQUEST_DATA_FAILURE, REQUEST_DATA_PENDING, REQUEST_DATA_SUCCESS} from './constants'

//action setSearchField
export const setSearchField = (text) => {
    // console.log(text);
    return ({
            type: CHANGE_SEARCH_FIELD, //action
            payload: text // whatever data is needed to be sent to reducer
        }
    )
}

export const requestData = (dispatch) => { //api takes dispatch
    dispatch({type: REQUEST_DATA_PENDING, payload: ''})

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => dispatch({type: REQUEST_DATA_SUCCESS, payload: users})
        )
        .catch(error => dispatch({type: REQUEST_DATA_FAILURE, payload: error})
        );
}