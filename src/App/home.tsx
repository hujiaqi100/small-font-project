import * as React from 'react';
import { useState, useEffect } from 'react';
import './home.less'
import Header from './Header/index'
import Content from './Content/content'
import ContentMore from '../owns/content.jsx'
import { connect } from 'react-redux'
const Home = (props) => {
    return (
        <div className='home'>
            <div className='home-header'>
                <Header />
            </div>
            {
                !props.children && <Content />
            }
            <div className='home-content'>
                <div className='home-left'>
                    {props.children}
                </div>
                <div className='home-right'>
                    <ContentMore />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        list: state.list,
        isEmpty: state.isEmpty
    }
}
// store.dispatch ,props
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);