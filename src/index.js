import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Container from './Container'
import './index.css'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/:location' component={Container} />
    </Route>
  </Router>,
  document.getElementById('root')
)
