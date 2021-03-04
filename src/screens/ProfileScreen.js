import React, {useState} from "react"
import { Button, Text, TextInput, View } from "react-native"
import { useDispatch } from "react-redux"
import { logoutAction } from "../redux/action"

const ProfileScreen = () => {
    const dispatch = useDispatch()
    return (
        <View>
            <Button
                title="Logout"
                onPress={() => dispatch(logoutAction())}
                color="rgb(255,100,100)"
            />
        </View>
    )
}

export default ProfileScreen