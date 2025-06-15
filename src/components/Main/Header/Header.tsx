interface CurrenciesListHeaderType {
    children: React.ReactNode
}

export function Header({children}: CurrenciesListHeaderType) {
    return (
        <div className="cl-head">
            <div className="cl-head_text">
                <h2>Конвертация валют: Удобно и Просто!</h2>
                <p>
                    Не уверены в текущем курсе валют? Наш сервис предоставляет мгновенную информацию о текущих курсах валют для расчёта любых сумм. Просто введите сумму и выберите валюту!
                </p>
            </div>
            {children}
            <div className="cl-head_logo"></div>
            <div className="cl-head_rt_corner"></div>
            <div className="cl-head_lb_corner"></div>
        </div>
    )
}