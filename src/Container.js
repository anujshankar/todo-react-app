import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import api from './functionalities'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.update = this.update.bind(this)
  }

  update(todos) {
    this.setState({ todos: todos })
  }

  updateTodo(id, description, status) {
    api.updateTask(id, description, status)
      .then(() => {
        const updatedTodos = this.state.todos.map((item) => {
          if (item.id === id) {
            item.status = status
            item.description = description
          }
          return item
        })
        this.setState({ todos: updatedTodos })
      })
  }

  deleteTodo(id) {
    api.deleteTask(id)
      .then(() => {
        const updatedTodos = this.state.todos.filter((item) => {
          if (item.id === id) {
            return false
          }
          return true
        })
        this.setState({ todos: updatedTodos })
      })
  }

  clearCompleted() {
    api.deleteCompleted()
      .then(() => {
        const updatedTodos = this.state.todos.filter((item) => {
          if (item.status === true) {
            return false
          }
          return true
        })
        this.setState({ todos: updatedTodos })
      })
  }

  render() {
    let newItems
    switch (location.hash) {
      case '#/active':
        newItems = this.state.todos.filter((item) => item.status === false)
        break
      case '#/completed':
        newItems = this.state.todos.filter((item) => item.status === true)
        break
      default:
        newItems = this.state.todos
        break
    }

    return (
      <section className="todoapp">
        <Header update={this.update} todos={this.state.todos} />
        <TodoList
          todos={newItems}
          updateTodo={this.updateTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)} />
        <Footer clearCompleted={this.clearCompleted.bind(this)} todos={this.state.todos}/>
      </section>
    )
  }

  componentDidMount() {
    api.readTasks()
      .then((result) => {
        return result.json()
      })
      .then((result) => {
        this.setState({ todos: result })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
