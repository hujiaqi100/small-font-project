// import React from 'react';
import ReactDom from 'react-dom'
import Start from './Router/index.jsx'
import './index.less';
import { Provider } from 'react-redux'
import store from './store'
import React, { useState, useEffect } from 'react';
import reg from './registrer.js'
const A = () => {
    // const [titleList, setTitleList] = useState([])

    // useEffect(() => {
    //     const getInfo = (res) => {
    //         if (res.data.treeNode) {
    //             let x = reg.find(d => d.treeNode === res.data.treeNode.treeNodeInfo)
    //             let data = {
    //                 name: res.data.treeNode.name,
    //                 component: x.component
    //             }
    //             if (titleList.find(d => d.name === res.data.treeNode.name)
    //             ) {
    //                 return;
    //             } else {
    //                 titleList.push(data)
    //                 setTitleList([...titleList])
    //             }
    //         }
    //     }
    //     window.addEventListener('message', getInfo)
    //     return () => window.removeEventListener('message', getInfo)
    // }, [titleList])
    return (
        <Start />
    )
}
ReactDom.render(
    <Provider store={store}>
        <A />
    </Provider>,
    document.getElementById('app')
)