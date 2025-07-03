import { ofType, type Epic } from "redux-observable";
import type { RootAction, RootState } from "../../store";
import { getUserCurrency, setErrorText, setUserCurrency } from "../../slice/userCurrency";
import { catchError, mergeMap, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { getCurrencyConversionRate } from "../../slice/currenciesList";

export const userCurrencyEpic: Epic<RootAction, RootAction, RootState> = (action$) => action$.pipe(
    ofType(getUserCurrency.type),
    switchMap(() => {
        return ajax({
            url: `${import.meta.env.VITE_IPINFO_API_ME}?token=${import.meta.env.VITE_IPINFO_TOKEN}`,
            method: "GET",
            headers: {'Content-Type': 'application/json'}

        }).pipe(
            switchMap((responseData) => {
                const data = responseData.response as {country: string}
                return ajax({
                    url: `${import.meta.env.VITE_REST_COUNTRIES_API}/${data.country}`,
                    method: "GET",
                    headers: {'Content-Type': 'application/json'}
                }).pipe(
                    mergeMap(responseData => {
                        const data = responseData.response as [{currencies: {[key: string]: {symbol: string, name: string}}}]
                        const currency = Object.keys(data[0].currencies)[0]
                        return [setUserCurrency(currency), getCurrencyConversionRate(currency)]
                    }),
                    catchError(error => of(setErrorText(error)))
                )
            }),
            catchError(error => of(setErrorText(error)))
        )
    })
)