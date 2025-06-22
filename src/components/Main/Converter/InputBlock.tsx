export function InputBlock() {
    return (
        <div className="input-block">
            <div className="input-block__amount">
                <input type="text" className="input-block__input" id="input-block__input" placeholder="10.000" />
                <label htmlFor="input-block__input" className="input-block__input-placeholder">Сумма</label>
            </div>
            <div className="input-block__exchange">
                <button className="input-block__btn">USD</button>
                <div className="input-block__dropdown">
                    <label className="input-block__search-label">
                        <input type="text" className="input-block__search-input" placeholder="Поиск"/>
                        <svg className="input-block__loop-svg" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.591 9.591a4 4 0 10-5.657-5.657 4 4 0 005.657 5.657zm1.06-6.717a5.502 5.502 0 01.915 6.57l2.732 2.733a1.5 1.5 0 11-2.121 2.12l-2.732-2.73a5.5 5.5 0 111.207-8.692z" fill="#000"></path>
                        </svg>
                    </label>
                    <ul className="input-block__currency-list">
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                        <li className="input-block__currency">1</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}