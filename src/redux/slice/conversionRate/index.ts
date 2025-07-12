import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ConversionRateRequest, ConversionRateResponse, ConversionrateState } from "../../../typing"

const initialState: ConversionrateState = {
    conversionRate: 0,
    conversionResult: 0,
    errorText: null
}

const conversionRateSlice = createSlice({
    name: 'conversionRate',
    initialState,
    reducers: {
        getConversionRate: (state, _action: PayloadAction<ConversionRateRequest>) => {
            state.errorText = null
        },
        setConversionRate: (state, action: PayloadAction<ConversionRateResponse>) => {
            state.conversionRate = action.payload.conversion_rate,
            state.conversionResult = action.payload.conversion_result
        },
        setErrorText: (state, action: PayloadAction<string>) => {
            state.errorText = action.payload
        }
    }
})

export const {getConversionRate, setConversionRate, setErrorText} = conversionRateSlice.actions
export type conversionRateActions = ReturnType<typeof conversionRateSlice.actions[keyof typeof conversionRateSlice.actions]>
export default conversionRateSlice.reducer