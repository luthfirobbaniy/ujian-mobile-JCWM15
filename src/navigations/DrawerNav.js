import React from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import HomeTabNav from "./HomeTabNav"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { ProfileScreen } from "../screens"

const Drawer = createDrawerNavigator()

const DrawerNav = () => {
    const {isSignedIn} = useSelector(state => state.authReducer)
    return (
        <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Main" component={HomeTabNav}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav