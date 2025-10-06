import { ofType, type Epic } from "redux-observable";
import type { RootAction, RootState } from "../../store";
import { getCurrencyConversionRate, getCurrencys, setCurrencyConversionRate, setCurrencys, setErrorText } from "../../slice/currenciesList";
import { catchError, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import type { CurrenciesConversionRate, ExchangerateAPIResponse } from "../../../typing";

export const currenciesList: Epic<RootAction, RootAction, RootState> = (action$) => action$.pipe(
    ofType(getCurrencys.type),
    switchMap(() =>
        ajax({
            url: `${import.meta.env.VITE_EXCHANGERATE_API}/${import.meta.env.VITE_EXCHANGERATE_TOKEN}/codes`,
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).pipe(
            map((responseData) => {
                const data = responseData.response as ExchangerateAPIResponse
                return setCurrencys(data.supported_codes)
            }),
            catchError((error) => of(setErrorText(error)))
        )
    )
)

export const currencyConversionRate: Epic<RootAction, RootAction, RootState> = (action$) => action$.pipe(
    ofType(getCurrencyConversionRate.type),
    switchMap((action) => 
        ajax({
            url: `${import.meta.env.VITE_EXCHANGERATE_API}/${import.meta.env.VITE_EXCHANGERATE_TOKEN}/latest/${action.payload}`,
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).pipe(
            map((responseData) => {
                const data = responseData.response as CurrenciesConversionRate
                return setCurrencyConversionRate(data)
            }),
            catchError((error) => of(setErrorText(error)))
        )
    
    )
)