import React, { useState, useEffect } from 'react';
import { Menu } from 'antd'
import '../../node_modules/antd/dist/antd.css';
import './left.less'
const { SubMenu } = Menu
const { Item } = Menu
const Left = (props) => {
    const { mock } = props
    const [tree, setTree] = useState(mock)
    useEffect(() => {
        setTree(tree)
    }, [mock])
    const sendMessage = (res) => {
        window.postMessage({ treeNode: res })
    }
    const renderTree = (tree) => {
        return tree.map((val, idx) => {
            if (val.hasOwnProperty('children')) {
                return <SubMenu title={val.name} key={val.id}>
                    {renderTree(val.children)}
                </SubMenu>
            } else {
                return <Item
                    onClick={() => {
                        sendMessage({
                            name: val.name,
                            treeNodeInfo: val.treeNode
                        })
                    }}
                    key={val.id}>{val.name}</Item>
            }
        })
    }
    return (
        <div className='left-menu'>
            <Menu mode='inline'>
                {renderTree(tree)}
            </Menu>
        </div>
    )

}
export default Left;