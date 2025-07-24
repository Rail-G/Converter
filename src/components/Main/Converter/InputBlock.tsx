import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hook"
import type { InputBlockProp } from "../../../typing"
import { getConversionRate } from "../../../redux/slice/conversionRate"

export function InputBlock({onChangeInput, currencyAmount, onChangeAmount}: InputBlockProp) {
    const {countrysCurrencies} = useAppSelector(state => state.currencysList)
    const [baseCurrency, setBaseCurrency] = useState('USD')
    const [dropdownBlock, setDropdownBlock] = useState(false)
    const [currencySearch, setCurrencySearch] = useState('')
    const onClickToDropDownBlock = () => setDropdownBlock(prev => !prev)
    const onClickToCurrency = (currency: string) => {
        setBaseCurrency(currency)
        onChangeInput(currency)
        setDropdownBlock(false)
    }
    const onChange = (value: string) => setCurrencySearch(value)
    return (
        <div className="input-block">
            <div className="input-block__amount">
                <input type="text" className="input-block__input" value={currencyAmount ? Math.round(currencyAmount*100) / 100 : ''} onChange={(e) => onChangeAmount(+e.target.value)} id="input-block__input" placeholder="10.000" />
                <label htmlFor="input-block__input" className="input-block__input-placeholder">Сумма</label>
            </div>
            <div className="input-block__exchange">
                <button className="input-block__btn" onClick={onClickToDropDownBlock}>{baseCurrency}</button>
                <div className={`input-block__dropdown ${dropdownBlock && 'input-block__dropdown--enable'}`}>
                    <label className="input-block__search-label">
                        <input type="text" className="input-block__search-input" value={currencySearch} onChange={(e) => onChange(e.target.value)} placeholder="Поиск"/>
                        <svg className="input-block__loop-svg" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.591 9.591a4 4 0 10-5.657-5.657 4 4 0 005.657 5.657zm1.06-6.717a5.502 5.502 0 01.915 6.57l2.732 2.733a1.5 1.5 0 11-2.121 2.12l-2.732-2.73a5.5 5.5 0 111.207-8.692z" fill="#000"></path>
                        </svg>
                    </label>
                    <ul className="input-block__currency-list">
                        {countrysCurrencies
                        .filter(elem => 
                            elem.currencyName.toLowerCase().includes(currencySearch.toLowerCase())
                        )
                        .map(elem => 
                            <li className="input-block__currency" onClick={() => onClickToCurrency(elem.currencyCode)}>
                                <span>{elem.currencyCode}</span>
                                <span>{elem.currencyName}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}