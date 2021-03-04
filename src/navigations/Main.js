import React from "react"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchCountryDataAction, fetchGlobalDataAction, keepLoginAction } from "../redux/action"
import { HomeScreen, LoginScreen } from "../screens"
import DrawerNav from "./DrawerNav"

const Main = () => {
    const dispatch = useDispatch()

    const {loading} = useSelector(state => state.dataReducer)

    useEffect(() => {
        dispatch(keepLoginAction())
    }, [])

    useEffect(() => {
        dispatch(fetchGlobalDataAction())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchCountryDataAction())
    }, [dispatch])

    const {isSignedIn} = useSelector(state => state.authReducer)

    if(loading){
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    backgroundColor: "rgb(255,100,100)"
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 31.5,
                        fontWeight: "bold"
                    }}
                >
                    Aplikasi Corona
                </Text>
            </View>
        )
    }
    return (
        <>
            {isSignedIn ? <DrawerNav /> : <LoginScreen />}
        </>
    )
}

export default Main