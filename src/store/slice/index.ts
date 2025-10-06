import { combineSlices } from "@reduxjs/toolkit";
import currencysListSlice from './currenciesList/index'
import userCurrencySlice from './userCurrency/index'
import conversionRateSlice from './conversionRate/index'

export const combinedSlice = combineSlices({
    currencysList: currencysListSlice,
    userCurrency: userCurrencySlice,
    conversionRate: conversionRateSlice
})