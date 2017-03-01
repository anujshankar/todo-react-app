import React from 'react'

export default class Footer extends React.Component {
  clearCompleted() {
    this.props.clearCompleted()
  }
  render() {
    let countString

    const activeTodos = this.props.todos.filter((item) => item.status === false)
    if(activeTodos.length === 0){
      return (<div></div>)
    }
    else if(activeTodos.length === 1){
      countString = `${activeTodos.length} item left`
    } else{
      countString = `${activeTodos.length} items left`
    }

    return (
      <footer className="footer" id="todoapp-footer">
        <span className="todo-count" id="todo-count">{countString}</span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className="selected"
            >All</a>
          </li>
          <li>
            <a
              href="#/active"
              className="selected"
            >Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              className="selected"
            >Completed
             </a>
          </li>
        </ul>
        <button
          className="clear-completed-show"
          id="clear-completed"
          onClick={this.clearCompleted.bind(this)}>
          Clear completed
          </button>
      </footer>
    )
  }
}