import React from 'react';
import ReactDom from 'react-dom'
import Start from './Router/index.jsx'
import './index.less';
import { Provider } from 'react-redux'
import store from './store'
ReactDom.render(
    <Provider store={store}>
        <Start />,
    </Provider>,
    document.getElementById('app')
)