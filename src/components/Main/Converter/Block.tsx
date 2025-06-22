import { InputBlock } from "./InputBlock";

export function ConverterBlock() {
    return (
        <div className="converter">
            <div className="converter__header">
                <h2>
                    Осуществляйте быстрые и доступные международные бизнес-платежи
                </h2>
            </div>
            <div className="converter__description">
                <p>
                    Отправляйте безопасные международные бизнес-платежи в валютах XX века по выгодным тарифам без скрытых комиссий.
                </p>
            </div>
            <div className="converter__exchange-block">
                <InputBlock />
                <svg id="Layer_1" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                    <path d="m3 13h26a1 1 0 0 0 0-2h-23.78l6-6.84a1 1 0 1 0 -1.5-1.32l-7.5 8.5a1 1 0 0 0 .78 1.66z" />
                    <path d="m29 19.5h-26a1 1 0 0 0 0 2h23.78l-6 6.84a1 1 0 0 0 .09 1.41 1 1 0 0 0 1.41-.09l7.5-8.5a1 1 0 0 0 -.78-1.66z" />
                </svg>
                <InputBlock />
            </div>
            <div className="converter__footer">
                <div className="converter__currency-info">
                    <span>
                        1.00 USD = 0.873 GBP
                    </span>
                    <div className="converter__additional-block">
                        <span>?</span>
                        <p className="converter__additional-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus ipsam itaque. Rerum voluptatibus dolore facilis ratione temporibus, eligendi consectetur perspiciatis velit voluptates, dolor tempore suscipit provident dolorem, atque ut!
                        </p>
                    </div>
                </div>
                <button className="coverter__convert-btn">Конвертировать</button>
            </div>
        </div>
    )
}