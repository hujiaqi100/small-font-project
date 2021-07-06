import React, { useState, useEffect } from 'react';
import './content.less'
import { connect } from 'react-redux'
import reg from '../registrer.js'
let checkData = target => {
    return Object.prototype.toString.call(target).slice(8, -1)
}

let deepClone = target => {
    let check = checkData(target)
    let result
    if (check === 'Array') {
        result = []
    } else if (check === 'Object') {
        result = {}
    } else {
        return new Error('neither array or object')
    }
    for (let i in target) {
        let value = target[i]
        let valueCheck = checkData(value)
        if (valueCheck === 'Array' || valueCheck === 'Object') {
            result[i] = deepClone(value)
        } else {
            result[i] = value
        }
    }
    return result
}

const Content = (props) => {
    const [titleList, setTitleList] = useState(props.titleList)
    useEffect(() => {
        props.handleChange(props.titleList.length - 1)
        setTitleList(props.titleList)
    }, [titleList, props.titleList])
    return (
        <div className='content-body'>
            {
                titleList && titleList.length === 0 ?
                    <div className='content'>
                        Small-dataQ
                    </div> :
                    <div className='content-body'>
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
                                                props.titleList.splice(idx, 1)
                                                setTitleList([...props.titleList])
                                                props.handleChange(idx)
                                            } else {
                                                props.titleList.splice(idx, 1)
                                                setTitleList([...props.titleList])
                                                props.handleChange(idx - 1)
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
        // list: state.list,
        // isEmpty: state.isEmpty,
        current: state.current,
        // deepList: state.deepList
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
        },
        handleChangeList(res) {
            const action = {
                type: 'SELECT_LIST',
                value: res
            }
            return dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);