import { configureStore } from "@reduxjs/toolkit";
import { combinedSlice } from "./slice";
import type { currencysAction } from "./slice/currenciesList";
import type { CurrencysListState, UserCurrencyState } from "../typing";
import { createEpicMiddleware } from "redux-observable";
import type { userCurrencyAction } from "./slice/userCurrency";
import { combinedEpic } from "./epic";

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>()

export const store = configureStore({
    reducer: combinedSlice,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(epicMiddleware)
})

epicMiddleware.run(combinedEpic)

export type RootDispatch = typeof store.dispatch
export type RootAction = currencysAction | userCurrencyAction
export type RootState = {currencysList: CurrencysListState, userCurrency: UserCurrencyState}