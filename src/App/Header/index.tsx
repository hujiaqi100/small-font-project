import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.less'
import { Link } from 'react-router-dom'
const Header = (props) => {
    const headerContent = [
        {
            key: '0',
            value: <Link to={{
                pathname: '/home/font',
                state: props.titleList
            }} className='title'>
                <span className='name'>
                    前端小常识
                </span>
            </Link>
        },
        {
            key: '1',
            value: <Link to={{
                pathname: '/home/back',
                state: props.titleList
            }} className='title'>
                <span className='name'>
                    后端小常识
                </span>
            </Link>
        },
        // {
        //     key: '2',
        //     value: <Link to='/home/net' className='title'>
        //         <span className='name'>
        //             网路小常识
        //         </span>
        //     </Link>
        // },
        // {
        //     key: '3',
        //     value: <Link to='/home/operation' className='title'>
        //         <span className='name'>
        //             运维小常识
        //         </span>
        //     </Link>
        // },
        // {
        //     key: '4',
        //     value: <Link to='/home/others' className='title'>
        //         <span className='name'>
        //             其他小常识
        //         </span>
        //     </Link>
        // }
    ]
    useEffect(() => {
    }, [])
    return (
        <div className='Header' >
            <Link to='/home' className='title-lay' >
                Small-dataQ
            </Link>
            <div className='lay'>
                {
                    headerContent.map((val, idx) => {
                        return val.value
                    })
                }
                < Link to='/' className='quit' >
                    退出登陆
                </Link >
            </div>
        </div >

    )
}
export default Header;