import {Header} from '../Main/Header/Header'
import '../../style/CurrenciesList.css'
import { Table } from '../Main/CurrencysList/Table'
import { NavLinkConverter } from '../Main/CurrencysList/NavLinkConverter'
import { useAppSelector } from '../../hook'
import { Loader } from '../Main/Loader'
export function CurrenciesList() {
    const { countrysCurrencies, loading } = useAppSelector(state => state.currencysList)
    const { userCurrency } = useAppSelector(state => state.userCurrency)
    const countrysCurrenciesLength = countrysCurrencies.length
    return (
        <>
            <div className='cl'>
                <Header children={<NavLinkConverter />} />
                <div className='cl-table'>
                    <h2 className='cl-body_text'>Ниже приведены обновление курсов валют: 1 {userCurrency} к валютам разных стран</h2>
                    {loading && <Loader />}
                    {!loading && <div className='cl-table_col'>
                        <Table countrysCurrencies={countrysCurrencies.slice(0, countrysCurrenciesLength / 2)} />
                        <Table countrysCurrencies={countrysCurrencies.slice(countrysCurrenciesLength / 2)} />
                    </div>}
                </div>
            </div>
        </>
    )
}