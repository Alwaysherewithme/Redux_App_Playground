import $ from 'jquery';

export const API_REQUEST_SUCCESS = 'users: updateUser';
export const API_REQUEST_ERROR = 'users: showError';
export const API_REQUEST_REQUEST = 'users: requestAPI';

export function updateUser(newUser) {
    return {
        type: API_REQUEST_SUCCESS,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: API_REQUEST_ERROR,
        payload: {
            user: 'ERROR!!'
        }
    }
}

export function requestMade() {

}

export function onRequest() {
    return {
        type: API_REQUEST_REQUEST
    }
}

// function returned in action will be dispatched by thunk middleware?
export function apiRequest() {
    return dispatch => {
        
        // dispatch(requestMade())

        $.ajax({
            url: 'https://www.google.com',
            success(response) {
                console.log('Request Success!')
                dispatch(updateUser(response.newUser))
            },
            error() {
                console.log('Request Error!')
                dispatch(showError())
            }
        })
    }
}