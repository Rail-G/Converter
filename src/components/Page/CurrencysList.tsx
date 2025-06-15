import {Header} from '../Main/Header/Header'
import '../../style/CurrenciesList.css'
import { Table } from '../Main/CurrencysList/Table'
import { NavLinkConverter } from '../Main/CurrencysList/NavLinkConverter'
export function CurrenciesList() {
    return (
        <div className='cl'>
            <Header children={<NavLinkConverter/>}/>
            <div>
                <h2 className='cl-body_text'>Ниже приведены обновление курсов валют: 1 RUB к валютам разных стран</h2>
                <div className='cl-table_col'>
                    <Table/>
                    <Table/>
                </div>
            </div>
        </div>
    )
}