import React, {useState} from "react"
import { Button, Pressable, Text, TextInput, View } from "react-native"
import { useSelector } from "react-redux"
import { Icon } from "react-native-elements"

const HomeScreen = ({navigation}) => {
    const {total, newConfirmed, recovered, newRecovered, deaths, newDeaths,} = useSelector(state => state.dataReducer)

    return (
        <View
            style={{
                flex: 1
            }}
        >   
            <View
                style={{
                    flex: 3,
                    backgroundColor: "rgb(255,100,100)",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Pressable
                    style={{
                        // backgroundColor: "white",
                        marginLeft: -330
                    }}
                    onPress={() => navigation.openDrawer()}
                >
                    <Icon name="menu" type="ionicon" color="white"/>
                </Pressable>
            </View>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 40
                }}
            >
                <Text
                    style={{
                        fontSize: 21,
                        fontWeight: "bold",
                        marginBottom: 20
                    }}
                >
                    Coronavirus Live Update
                </Text>
                <View
                    style={{flexDirection: "row"}}
                >
                    <View
                        style={{
                            backgroundColor: "yellow",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 100,
                            height: 100,
                            marginRight: 20
                        }}
                    >
                        <Text>Total:</Text>
                        <Text>{total}</Text>
                        <Text>+ {newConfirmed}</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "lightgreen",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 100,
                            height: 100
                        }}
                    >
                        <Text>Recoverd:</Text>
                        <Text>{recovered}</Text>
                        <Text>+ {newRecovered}</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "red",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 100,
                            height: 100,
                            marginLeft: 20
                        }}
                    >
                        <Text>Death:</Text>
                        <Text>{deaths}</Text>
                        <Text>+ {newDeaths}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen