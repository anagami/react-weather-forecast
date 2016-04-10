import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import reducers from './reducers'
import routes from './routes'


render(
    <Provider store={createStore(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('container')
)
