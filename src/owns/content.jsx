import React, { useState, useEffect } from 'react';
import './content.less'
import { connect } from 'react-redux'
import reg from '../registrer.js'
const Content = (props) => {
    const [titleList, setTitleList] = useState(props.list)
    const handleRecive = (res) => {
        if (res.data.treeNode) {
            let x = reg.find(d => d.treeNode === res.data.treeNode.treeNodeInfo)
            let data = {
                name: res.data.treeNode.name,
                component: x.component
            }
            props.list.push(data)
            setTitleList([...props.list])
        }
    }
    useEffect(() => {
        window.addEventListener('message', handleRecive)
        return () => window.removeEventListener('message', handleRecive)
    })
    return (
        <div className='content-body'>
            {
                titleList && titleList.length === 0 ? <div className='content'>
                    王悦·天气晴
                </div> : <div className='content-body'>
                    <div className='content-taglist'>
                        {
                            titleList && titleList.map((val, idx) => {
                                return <div className='block_con' key={idx}>
                                    <div className='block_name' onClick={() => {
                                        props.handleChange(idx)
                                    }}>
                                        {val.name}
                                    </div>
                                    <div className='block_close' onClick={() => {
                                        if (idx - 1 < 0) {
                                            props.list.splice(idx - 1, 1)
                                            setTitleList([...props.list])
                                        } else {
                                            props.list.splice(idx, 1)
                                            setTitleList([...props.list])
                                        }
                                    }}>
                                        X
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className='block-body'>
                        <div className='block-title'>
                            {titleList[props.current] && titleList[props.current].name}
                        </div>
                        <div className='block-content'>
                            {titleList[props.current] && titleList[props.current].component}
                        </div>
                    </div>
                </div>
            }


        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        list: state.list,
        isEmpty: state.isEmpty,
        current: state.current
    }
}
// store.dispatch ,props
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(res) {
            const action = {
                type: 'SELECT_CURRENT',
                value: res
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);