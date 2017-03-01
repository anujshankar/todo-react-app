import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      isEditing: false
    }
  }

  onStatusChange(e) {
    const status = e.target.checked
    this.props.updateTodo(this.props.todo.id, this.props.todo.description, status)
  }

  onDelete() {
    this.props.deleteTodo(this.props.todo.id)
  }

  modeChange() {
    this.setState({ isEditing: true })
  }

  onExitEdit() {
    this.setState({ isEditing: false })
  }

  updateTextBox(e) {
    const description = e.target.value
    this.props.updateTodo(this.props.todo.id, description, this.props.todo.status)
    this.setState({ isEditing: false })
  }

  keyPressed(e) {
    if (e.keyCode === 13) {
      this.updateTextBox(e)
    }
    if (e.keyCode === 27) {
      e.target.value = this.props.todo.description
      this.onExitEdit()
    }
  }

  render() {
    console.log('Render Todo')
    let inputTextClass = 'read-only '
    if (this.state.isEditing) inputTextClass = 'edit'
    else {
      inputTextClass = this.props.todo.status ? inputTextClass + 'read-only-completed' : inputTextClass
    }

    return (
      <li id={this.props.todo.id}>
        <div className="view">
          <input
            type="checkbox"
            name="status"
            className="toggle"
            checked={this.props.todo.status}
            onChange={this.onStatusChange.bind(this)} />
          <input
            type="text"
            name="description"
            className={inputTextClass}
            defaultValue={this.props.todo.description}
            title={this.props.todo.description}
            readOnly={!this.state.isEditing}
            onDoubleClick={this.modeChange.bind(this)}
            onBlur={this.updateTextBox.bind(this)}
            onKeyUp={this.keyPressed.bind(this)} />
          <button
            name="remove"
            className="destroy"
            onClick={this.onDelete.bind(this)}>
          </button>
        </div>
      </li>
    )
  }
}