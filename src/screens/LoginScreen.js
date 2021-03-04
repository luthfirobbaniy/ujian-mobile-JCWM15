import React, {useState} from "react"
import { Button, Text, TextInput, View } from "react-native"
import { useDispatch } from "react-redux"
import { loginAction } from "../redux/action"

const LoginScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    return (
        <View>
            <Text
                style={{
                    fontSize: 31.5,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "rgb(255,100,100)",
                    marginTop: 30,
                }}
            >Login</Text>
            <TextInput
                placeholder="Username"
                onChangeText={(e) => setUsername(e)}
                style={{
                    borderBottomWidth: 0.5,
                    marginTop: 10,
                    marginBottom: 10
                }}
            />
            <TextInput
                placeholder="Password"
                onChangeText={(e) => setPassword(e)}
                secureTextEntry
                style={{
                    borderBottomWidth: 0.5,
                    marginBottom: 40
                }}
            />
            <Button
                title="Login"
                onPress={() => dispatch(loginAction({username, password}))}
                color="rgb(255,100,100)"
                
            />
        </View>
    )
}

export default LoginScreen