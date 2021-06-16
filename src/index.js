require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/transaltions/i18n";
import App from './App';

import './App.scss';

const root = document.getElementById('Root');

if (root != null) {
    ReactDOM.render((
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </I18nextProvider>
    ),
    root);
};