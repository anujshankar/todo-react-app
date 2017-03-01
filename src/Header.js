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
    const val = this.state.newTodo.trim()

    if (val) {
      api.insertTask(val).then((result) => {
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
        element.status = checked
      })
      this.props.update(todos)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const toggleAllStyleClass = this.props.todos.length > 0 ? 'toggle-all unhide' : 'toggle-all'

    const checkAll = this.props.todos.every((item) => item.status === true) ? 'checked' : ''

    return (
      <header className="header">
        <input
          className={toggleAllStyleClass}
          type="checkbox"
          id="toggle-all"
          checked={checkAll}
          onChange={this.toggleAll.bind(this)} />
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