import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.less';
import Button from '../owns/Button.js'
import Input from '../owns/Input.js'
import loginMock from './loginMock'
const Login = (props) => {
    const [username, setUserName] = useState<string>('')
    const [userError, setUserError] = useState<string>('')
    const [password, setPassword] = useState<any | number>()
    const [passError, setPassError] = useState<any | number>()
    const title = () => {
        return (
            <div className='title'>
                Small-dataQ
            </div>
        )
    }
    const userName = () => {
        return (
            <div className='username'>
                <div className='name'>
                    账号
                </div>
                <div className='name_input'>
                    <Input w={250} h={40} bkg={'rgba(89, 115, 187, 0.89)'} c={'rgba(235, 215, 37, 0.89)'} value={username} onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                </div>
            </div>
        )
    }
    const passWord = () => {
        return (
            <div className='password'>
                <div className='name'>
                    密码
                </div>
                <div className='name_input'>
                    <Input w={250} h={40} bkg={'rgba(89, 115, 187, 0.89)'} c={'rgba(235, 215, 37, 0.89)'} value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>

            </div>
        )
    }
    const subMit = () => {
        if (username === loginMock.username && password === loginMock.password) {
            props.history.push('/home')
        } else {
            setUserError('请输入正确的用户名')
            setPassError('请输入正确的密码')
        }
    }
    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                subMit()
            }
        }, false)
        return () => {
            window.removeEventListener('keypress', (e) => {
                if (e.keyCode === 13) {
                    subMit()

                }
            })
        }
    }, [username, password])
    return (
        <div className='login'>
            <div className='login_block'>
                {title()}
                <div className='login_measure'>
                    {userName()}
                    <div className='error'>
                        {userError}
                    </div>
                    {passWord()}
                    <div className='error'>
                        {passError}
                    </div>
                    <div className='login_submit'>
                        <Button
                            w={100}
                            h={40}
                            name='登陆'
                            c={'rgba(235, 215, 37, 0.89)'}
                            bkg={'rgba(89, 115, 187, 0.89)'}
                            doClick={() => {
                                subMit()
                            }} >登陆</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login