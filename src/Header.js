import React from 'react'
import api from './functionalities'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      newTodo: ''
    }
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== 13) {
      return
    }
    event.preventDefault();
    // console.log(this.state)
    const val = this.state.newTodo.trim()

    if (val) {
      api.insertTask(val).then((result) => {
        // console.log(result)
        return result.json()
      })
        .then((result) => {
          const todos = this.props.todos
          const data = {
            description: val,
            id: result.id,
            status: false
          }
          todos.push(data)
          // console.log(todos)
          this.props.update(todos)
          this.setState({ newTodo: '' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  toggleAll(event) {
    const checked = event.target.checked
    api.updateAll(checked).then(() => {
      const todos = this.props.todos
      todos.forEach(function (element) {
        console.log('Before:', element.status)
        element.status = checked
        console.log('After:', element.status)
      })
      console.log(todos)
      this.props.update(todos)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const toggleAllStyleClass = this.props.todos.length > 0 ? 'toggle-all unhide' : 'toggle-all';

    return (
      <header className="header">
        <input className={toggleAllStyleClass} type="checkbox" id="toggle-all" onClick={this.toggleAll.bind(this)} />
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus="" id="task-text"
          onKeyDown={this.handleNewTodoKeyDown.bind(this)}
          onChange={this.handleChange.bind(this)}
          value={this.state.newTodo} />
      </header>
    )
  }
}