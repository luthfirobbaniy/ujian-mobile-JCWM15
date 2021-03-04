import axios from "axios"
import { api } from "../../../api"

export const fetchGlobalDataAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "DATA_START",
            })
    
            const response = await axios.get(`${api}`)

            const total = response.data.Global.TotalConfirmed
            const newConfirmed = response.data.Global.NewConfirmed

            const recovered = response.data.Global.TotalRecovered
            const newRecovered = response.data.Global.NewRecovered

            const deaths = response.data.Global.TotalDeaths
            const newDeaths = response.data.Global.NewDeaths
    
            dispatch({
                type: "DATA_SUCCESS",
                payload: {total, newConfirmed, recovered, newRecovered, deaths, newDeaths}
            })
        }catch(err) {
            console.log(err)
        }
    }
}

export const fetchCountryDataAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "DATA_START",
            })

            const response = await axios.get(`${api}`)
            const countryData = response.data.Countries

            dispatch({
                type: "DATA_SUCCESS",
                payload: {countryData}
            })
        }catch(err) {
            console.log(err)
        }
    }
}