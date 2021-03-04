import React, {useState} from "react"
import { Button, FlatList, Text, TextInput, View } from "react-native"
import { useSelector } from "react-redux"

const LiveUpdateScreen = () => {
    const {countryData, loading} = useSelector(state => state.dataReducer)

    // if(loading) {
    //     return (
    //         <View
    //             style={{
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 flex: 1
    //             }}
    //         >
    //             <Text>Loading</Text>
    //         </View>
    //     )
    // }

    return (
        <View>
            <View
                style={{
                    height: 48,
                    backgroundColor: "rgb(255,100,100)",
                    justifyContent: "center"
                }}
            >
                <Text
                    style={{
                        fontSize: 21,
                        fontWeight: "bold",
                        color: "white",
                        marginLeft: 18
                    }}
                >
                    Live Update
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "rgb(225,225,225)"
                }}
            >
                <View style={{width: 210}}>
                    <Text>Region</Text>
                </View>
                <View style={{width: 45}}>
                    <Text>New Cases</Text>
                </View>
                <View style={{width: 45}}>
                    <Text>Total Cases</Text>
                </View>
                <View style={{width: 45}}>
                    <Text>Recovered</Text>
                </View>
                <View style={{width: 45}}>
                    <Text>Deaths</Text>
                </View>
            </View>
            <View>
            <FlatList 
                data={countryData}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item}) => {
                    return(
                        <View
                            style={{
                                flexDirection: "row"
                            }}
                        >
                            <View style={{width: 210}}>
                                <Text>{item.Country}</Text>
                            </View>
                            <View 
                                style={{
                                    // backgroundColor: "red",
                                    width: 45
                                }}
                            >
                                <Text>{item.NewConfirmed}</Text>
                            </View>
                            <View 
                                style={{
                                    // backgroundColor: "blue",
                                    width: 45
                                }}
                            >
                                <Text>{item.TotalConfirmed}</Text>
                            </View>
                            <View 
                                style={{
                                    // backgroundColor: "red",
                                    width: 45
                                }}
                            >
                                <Text>{item.TotalRecovered}</Text>
                            </View>
                            <View 
                                style={{
                                    // backgroundColor: "red",
                                    width: 45
                                }}
                            >
                                <Text>{item.TotalDeaths}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            </View>
        </View>
    )
}

export default LiveUpdateScreen