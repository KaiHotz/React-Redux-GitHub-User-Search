import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import reducers from './reducers'
import GitSearch from './components/git_search'

import '@/style/style.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(promise)
))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <GitSearch />
    </div>
  </Provider>
  , document.getElementById('root'))
