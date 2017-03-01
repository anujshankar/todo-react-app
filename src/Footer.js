import React from 'react'

export default class Footer extends React.Component {
  clearCompleted() {
    this.props.clearCompleted()
  }
  render() {
    let countString
    if(this.props.todos.length === 1){
      countString = `${this.props.todos.length} item left`
    } else{
      countString = `${this.props.todos.length} items left`
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