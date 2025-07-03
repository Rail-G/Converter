import { combineEpics } from "redux-observable";
import { currenciesList, currencyConversionRate } from "./currenciesList";
import { userCurrencyEpic } from "./userCurrency";

export const combinedEpic = combineEpics(
    currenciesList,
    currencyConversionRate,
    userCurrencyEpic
)