import React from "react"
import { Text, View } from "react-native"
import Main from "./src/navigations/Main"
import reducer from "./src/redux/reducer"
import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({reducer, devTools: true})

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </NavigationContainer>
  )
}

export default App