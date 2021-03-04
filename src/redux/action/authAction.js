import AsyncStorage from "@react-native-async-storage/async-storage"

export const loginAction = ({username, password}) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: "AUTH_START",
            })
    
            await AsyncStorage.setItem("username", username)
            await AsyncStorage.setItem("password", password)
    
            dispatch({
                type: "AUTH_LOGIN",
                payload: {username, password}
            })
        }catch(err) {
            console.log(err)
        }
    }
}

export const keepLoginAction = () => {
    return async (dispatch) => {
        try{
            dispatch({
                type: "AUTH_START",
            })
    
            const username = await AsyncStorage.getItem("username")
            const password = await AsyncStorage.getItem("password")
    
            dispatch(loginAction({username, password}))
        }catch(err) {
            console.log(err)
        }
    }
}

export const logoutAction = () => {
    return async (dispatch) => {
        try{
            dispatch({
                type: "AUTH_START",
            })
    
            await AsyncStorage.removeItem("username")
            await AsyncStorage.removeItem("password")
    
            dispatch({
                type: "AUTH_LOGOUT"
            })
        }catch(err) {
            console.log(err)
        }
    }
}