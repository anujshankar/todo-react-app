const api = {
  readTasks: function () {
    return fetch(`http://localhost:3000/read`, { method: 'get' })
  },

  updateAll: function (status) {
    const data = {
      status: status
    }
    return fetch(`http://localhost:3000/update/`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },

  updateTask: function (id, description, status) {
    const data = {
      status: status,
      task: description
    }
    return fetch(`http://localhost:3000/update/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },

  insertTask: function (description) {
    return fetch(`http://localhost:3000/write/${description}`, { method: 'post' })
  },

  deleteTask: function (id) {
    return fetch(`http://localhost:3000/destroy/${id}`, { method: 'delete' })
  },

  deleteCompleted: function () {
    return fetch(`http://localhost:3000/destroy/`, { method: 'delete' })
  }
}

export default api
