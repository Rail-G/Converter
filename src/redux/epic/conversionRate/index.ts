import type { RootAction, RootState } from "../../store";
import { ofType, type Epic } from "redux-observable";
import { getConversionRate, setConversionRate, setErrorText } from "../../slice/conversionRate";
import { catchError, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import type { ConversionRateResponse } from "../../../typing";

export const conversionRateEpic: Epic<RootAction, RootAction, RootState> = (action$) => action$.pipe(
    ofType(getConversionRate.type),
    switchMap((action) => 
        ajax({
            url: `${import.meta.env.VITE_EXCHANGERATE_API}/${import.meta.env.VITE_EXCHANGERATE_TOKEN}/pair/${action.payload.baseCode}/${action.payload.targetCode}`,
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).pipe(
            map((responseData) => setConversionRate(responseData.response as ConversionRateResponse)),
            catchError((error) => of(setErrorText(error)))
        )
    )
)