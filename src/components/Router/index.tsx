import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CurrenciesList } from "../Page/CurrencysList";
import { Converter } from "../Page/Converter";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export function Router() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CurrenciesList />} />
                    <Route path="/converter" element={<Converter />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}