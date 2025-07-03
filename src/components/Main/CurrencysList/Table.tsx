import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hook"
import { getUserCurrency } from "../../../redux/slice/userCurrency"
import { getCurrencys } from "../../../redux/slice/currenciesList"
import type { CurrenciesConversion } from "../../../typing"

type TableType = {
    countrysCurrencies: CurrenciesConversion[]
}

export function Table({countrysCurrencies}: TableType) {
    const { userCurrency } = useAppSelector(state => state.userCurrency)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!countrysCurrencies.length) {
            dispatch(getCurrencys())
        }
        if (!userCurrency.trim()) {
            dispatch(getUserCurrency())
        }
    }, [])
    return (
        <table>
            <thead>
                <tr>
                    <td>№ п/п</td>
                    <td>Валюта</td>
                    <td>Код валюты</td>
                    <td>За 1 {userCurrency}</td>
                </tr>
            </thead>
            <tbody>
                {countrysCurrencies.map((elem, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{elem.currencyName}</td>
                        <td>{elem.currencyCode}</td>
                        <td>{elem.cost}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}