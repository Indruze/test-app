require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import './App.scss';

const root = document.getElementById('Root');

if (root != null) {
    ReactDOM.render((
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
    root);
};