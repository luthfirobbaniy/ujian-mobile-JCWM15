import React, {useEffect} from "react"
import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { HomeScreen, LoginScreen, LiveUpdateScreen} from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { fetchGlobalDataAction } from "../redux/action"
import { Icon } from "react-native-elements"

const Tab = createBottomTabNavigator()

const HomeTabNav = () => {
    const dispatch = useDispatch()
    
    // useEffect(() => {
    //     dispatch(fetchGlobalDataAction())
    // }, [dispatch])

    // useEffect(() => {
    //     dispatch(fetchCountryDataAction())
    // }, [dispatch])

    return (
        <Tab.Navigator 
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName;
                    let iconType;
                    if(route.name === "Home"){
                        iconName = "home-variant"
                        iconType = "material-community"
                    }
                    if(route.name === "Live Update"){
                        iconName = "timer-outline"
                        iconType = "ionicon"
                    }

                    return <Icon name={iconName} type={iconType} color={color} />
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Live Update" component={LiveUpdateScreen} />
        </Tab.Navigator>
    )
}

export default HomeTabNav