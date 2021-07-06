import React, { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Login from '../Login/index.tsx'
import Home from '../App/home.jsx'
import Red from '../Redirect/index.tsx'
import FontContent from '../fontcontent/index.tsx'
import BackContent from '../backcontent/index.tsx'
import NetContent from '../netcontent/index.tsx'
import OperationContent from '../operationcontent/index.tsx'
import OthersContent from '../othercontent/index.tsx'
import reg from '../registrer.js'
const Start = (props) => {
    return (
        <HashRouter >
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/home/font' component={(match) => {
                    return <Home titleList={match.location.state}>
                        <FontContent />
                    </Home>
                }} />
                <Route exact path='/home/back' component={(match) => {
                    return <Home titleList={match.location.state}>
                        <BackContent />
                    </Home>
                }} />
                <Route exact path='/home/net' component={() => {
                    return <Home >
                        <NetContent />
                    </Home>
                }} />
                <Route exact path='/home/operation' component={() => {
                    return <Home>
                        <OperationContent />
                    </Home>
                }} />
                <Route exact path='/home/others' component={() => {
                    return <Home>
                        <OthersContent />
                    </Home>
                }} />
                <Route path="/404" component={Red} />
                <Redirect from='*' to='/404' />
            </Switch>
        </HashRouter>
    )
}
export default Start