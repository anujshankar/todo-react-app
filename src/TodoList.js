import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  render() {
    // console.log(this.props.todos)
    const todos = this.props.todos.map((todo) => {
      return <Todo
        key={todo.id}
        todo={todo}
        readonly={true}
        updateTodo={this.props.updateTodo}
        deleteTodo={this.props.deleteTodo} />
    })
    return (
      <section className="main" style={{ display: 'block' }}>
        <ul className="todo-list" id="todo-list">
          {todos}
        </ul>
      </section>
    )
  }
}

TodoList.defaultProps = {
  todos: []
}