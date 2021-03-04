import React, {useState} from "react"
import { Button, Text, TextInput, View } from "react-native"

const ProfileScreen = () => {
    const dispatch = useDispatch()
    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button
                title="Logout"
                onPress={() => dispatch(logoutAction())}
            />
        </View>
    )
}

export default ProfileScreen