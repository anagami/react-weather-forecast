import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


import reducers from './reducers'
import routes from './routes'

const store = createStore(reducers, {}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('container')
)
