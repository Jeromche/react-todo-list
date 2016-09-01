let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text
    }
  }
}

export default actions
