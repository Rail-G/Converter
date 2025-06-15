import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CurrenciesList } from "../Page/CurrencysList";
import { Converter } from "../Page/Converter";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CurrenciesList/>} />
                <Route path="/converter" element={<Converter/>} />
            </Routes>
        </BrowserRouter>
    )
}