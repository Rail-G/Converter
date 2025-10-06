import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CurrenciesConversionRate, CurrencysListState } from "../../../typing";

const initialState: CurrencysListState = {
    countrysCurrencies: [],
    loading: false,
    errorText: null
}

const currencysListSlice = createSlice({
    name: 'CurrencysListSlice',
    initialState,
    reducers: {
        getCurrencys: (state) => {
            state.loading = true,
            state.errorText = null
        },
        getCurrencyConversionRate: (state, _action: PayloadAction<string>) => {
            state.loading = true,
            state.errorText = null
        },
        setCurrencys: (state, action: PayloadAction<string[][]>) => {
            state.countrysCurrencies = action.payload.map(elem => {
                return { currencyCode: elem[0], currencyName: elem[1] }
            })
        },
        setCurrencyConversionRate: (state, action: PayloadAction<CurrenciesConversionRate>) => {
            state.countrysCurrencies = state.countrysCurrencies.map(elem => {
                return { ...elem, cost: action.payload.conversion_rates[elem.currencyCode] }
            }),
            state.loading = false
        },
        setErrorText: (state, action: PayloadAction<string>) => {
            state.loading = false,
            state.errorText = action.payload
        }
    }
})

export const {getCurrencys, getCurrencyConversionRate, setCurrencys, setCurrencyConversionRate, setErrorText} = currencysListSlice.actions
export type currencysAction = ReturnType<typeof currencysListSlice.actions[keyof typeof currencysListSlice.actions]>
export default currencysListSlice.reducer

