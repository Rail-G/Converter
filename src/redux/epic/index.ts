import { combineEpics } from "redux-observable";
import { currenciesList, currencyConversionRate } from "./currenciesList";
import { userCurrencyEpic } from "./userCurrency";
import { conversionRateEpic } from "./conversionRate";

export const combinedEpic = combineEpics(
    currenciesList,
    currencyConversionRate,
    userCurrencyEpic,
    conversionRateEpic
)