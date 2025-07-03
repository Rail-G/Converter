import { combineSlices } from "@reduxjs/toolkit";
import currencysListSlice from './currenciesList/index'
import userCurrencySlice from './userCurrency/index'

export const combinedSlice = combineSlices({
    currencysList: currencysListSlice,
    userCurrency: userCurrencySlice
})