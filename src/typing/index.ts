export interface CurrenciesCodes {
    currencyName: string
    currencyCode: string,
}

export interface CurrenciesConversionRate {
    currencyCode: string,
    conversion_rates: {
        [key: string]: number
    }
}

export interface CurrenciesConversion extends CurrenciesCodes {
    cost?: number
}

export interface ExchangerateAPIResponse {
    result: string,
    documentation: string,
    terms_of_use: string,
    supported_codes: string[][]
}

export interface CurrencysListState {
    countrysCurrencies: CurrenciesConversion[],
    loading: boolean,
    errorText: string | null,
}

export interface UserCurrencyState {
    userCurrency: string,
    errorText: string | null
}

export interface DebounceHook<T> {
    func: () => T
    time: number
}

export interface ConversionrateState {
    conversionRate: number,
    errorText: string | null
}

export interface ConversionRateRequest {
    baseCode: string,
    targetCode: string,
}

export interface ConversionRateResponse {
    conversion_rate: number,
    conversion_result: number
}

export interface InputBlockType {
    firstBlock: string,
    secondBlock: string
}

export interface InputBlockProp {
    targetCurrency: string,
    onChangeInput: (value: string) => void
    currencyAmount: number,
    onChangeAmount: (value: number) => void
}