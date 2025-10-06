import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { UserCurrencyState } from "../../../typing"

const initialState: UserCurrencyState = {
    userCurrency: '',
    errorText: null
}

const userCurrencySlice =  createSlice({
    name: 'userCurrencySlice',
    initialState,
    reducers: {
        getUserCurrency: (state) => {
            state.errorText = null
        },
        setUserCurrency: (state, action: PayloadAction<string>) => {
           state.userCurrency = action.payload
        },
        setErrorText: (state, action: PayloadAction<string>) => {
            state.errorText = action.payload
        }
    }
})


export const {getUserCurrency, setUserCurrency, setErrorText} = userCurrencySlice.actions
export type userCurrencyAction = ReturnType<typeof userCurrencySlice.actions[keyof typeof userCurrencySlice.actions]>
export default userCurrencySlice.reducer