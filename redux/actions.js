let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text
    }
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id
    }
  }
}

export default actions
