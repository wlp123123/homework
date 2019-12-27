import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom"
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from "antd"
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <HashRouter>
            <App />
        </HashRouter>
    </ConfigProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
