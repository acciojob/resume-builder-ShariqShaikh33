import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { store } from "./store/store";
import { Provider } from "react-redux";



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>

    
    , document.getElementById("root"));
