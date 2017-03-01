import React, { Component } from 'react'
import Container from './Container'

class App extends Component {
  render () {
    return (
      <div className="app">
      <header>
        <h1>todos</h1>
      </header>
      <Container />
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by Anuj Shankar</p>
      </footer>
    </div>
    )
  }
}

export default App
