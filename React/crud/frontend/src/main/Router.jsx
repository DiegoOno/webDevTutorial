import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../Components/Home/Home'
import UserCrud from '../Components/User/UserCrud'

export default props => 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserCrud} />
        <Redirect from="*" to="/" />
    </Switch>