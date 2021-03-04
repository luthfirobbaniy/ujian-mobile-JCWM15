const INITIAL_STATE = {
    total: 0,
    newConfirmed: 0,
    recovered: 0,
    newRecovered: 0,
    deaths: 0,
    newDeaths: 0,
    countryData: [],
    loading: false
}

export const dataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "DATA_START":
            return {
                ...state,
                loading: true
            }
        case "DATA_SUCCESS":
            return {
                ...state,
                ...action.payload,
                loading: false,
            }
        default:
            return state
    }
}