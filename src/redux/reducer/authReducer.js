const INITIAL_STATE = {
    username: "",
    password: "",
    isSignedIn: false,
    loading: false
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "AUTH_START":
            return {
                ...state,
                loading: true
            }
        case "AUTH_LOGIN":
            return {
                ...state,
                ...action.payload,
                isSignedIn: true,
                loading: false,
            }
        case "AUTH_LOGOUT":
            return INITIAL_STATE
        default:
            return state
    }
}