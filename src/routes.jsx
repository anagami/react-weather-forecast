import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Dashboard from './containers/Dashboard'
import Favorite from './containers/Favorite'


export default (
    <Route path="/" component={App} >
        <IndexRoute component={Dashboard} />
        <Route path="favorite/:id" component={Favorite} />
    </Route>
)
