import Header from "./compontents/Header/Header";

import styles from "./app.module.scss";
import Catalog from "./compontents/Catalog/Catalog";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./compontents/Router/Router";

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App;