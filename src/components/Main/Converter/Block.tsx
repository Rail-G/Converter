import { useEffect, useState } from "react";
import { InputBlock } from "./InputBlock";
import type { InputBlockType } from "../../../typing";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { getConversionRate } from "../../../store/slice/conversionRate";

export function ConverterBlock() {
    const [targetCurrency, setTargetCurrency] = useState<InputBlockType>({firstBlock: 'USD', secondBlock: 'USD'})
    const [currencyAmount, setCurrencyAmount] = useState({firstBlock: 0, secondBlock: 0})
    const { conversionRate } = useAppSelector(state => state.conversionRate)
    const dispatch = useAppDispatch()
    const onChangeInput = (field: 'firstBlock' | 'secondBlock') => (value: string) => {
        setTargetCurrency(prev => ({...prev, [field]: value}))
    }
    const onChangeAmount = (field: 'firstBlock' | 'secondBlock') => (value: number) => {
        setCurrencyAmount(prev => ({...prev, [field]: value, [`${field == 'firstBlock' ? 'secondBlock' : 'firstBlock'}`]: 0}))
    }
    useEffect(() => {
        dispatch(getConversionRate({baseCode: targetCurrency.firstBlock, targetCode: targetCurrency.secondBlock}))
    }, [targetCurrency.firstBlock, targetCurrency.secondBlock])
    return (
        <div className="converter">
            <div className="converter__header">
                <h2>
                    Осуществляйте быстрые и доступные международные бизнес-платежи
                </h2>
            </div>
            <div className="converter__description">
                <p>
                    Отправляйте безопасные международные бизнес-платежи в валютах XX века.
                </p>
            </div>
            <div className="converter__exchange-block">
                <InputBlock 
                targetCurrency={targetCurrency.secondBlock} 
                onChangeInput={onChangeInput('firstBlock')}
                currencyAmount={currencyAmount.firstBlock ? currencyAmount.firstBlock : currencyAmount.secondBlock * 1/conversionRate}
                onChangeAmount={onChangeAmount('firstBlock')}
                />
                <svg id="Layer_1" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                    <path d="m3 13h26a1 1 0 0 0 0-2h-23.78l6-6.84a1 1 0 1 0 -1.5-1.32l-7.5 8.5a1 1 0 0 0 .78 1.66z" />
                    <path d="m29 19.5h-26a1 1 0 0 0 0 2h23.78l-6 6.84a1 1 0 0 0 .09 1.41 1 1 0 0 0 1.41-.09l7.5-8.5a1 1 0 0 0 -.78-1.66z" />
                </svg>
                <InputBlock
                targetCurrency={targetCurrency.firstBlock}
                onChangeInput={onChangeInput('secondBlock')}
                currencyAmount={currencyAmount.secondBlock ? currencyAmount.secondBlock : currencyAmount.firstBlock * conversionRate}
                onChangeAmount={onChangeAmount('secondBlock')}
                />
            </div>
            <div className="converter__footer">
                <div className="converter__currency-info">
                    <span>
                        1.00 {targetCurrency.firstBlock} = {conversionRate} {targetCurrency.secondBlock}
                    </span>
                    <div className="converter__additional-block">
                        <span>?</span>
                        <div className="converter__additional-description">
                            <h3>Обменный курс на 00:00:00 GMT+0300</h3>
                            <p >
                                Текущий курс меняется каждую минуту. Котировки, которые вы получите здесь, будут отличаться в зависимости от окончательной суммы
                            </p>
                        </div>
                    </div>
                </div>
                <button className="coverter__convert-btn">Конвертировать</button>
            </div>
        </div>
    )
}