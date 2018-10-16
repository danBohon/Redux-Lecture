const INITIAL_STATE = {
    user: ''
}

const LOGIN_USER = "LOGIN_USER";

export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case LOGIN_USER: 
            return Object.assign({}, state, {user: action.payload})
        default:
            return state
    }
}

export function loginUser(name){

    // name.toUpperCase();

    return {
        type: LOGIN_USER,
        payload: name
    }
}