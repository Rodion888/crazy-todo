const Types = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  TOGGLE_ALL_TODOS: 'TOGGLE_ALL_TODOS',
  CHANGE_TODO: 'CHANGE_TODO',
  FILTER_TASKS: 'FILTER_TASKS',
  ADD_USER_ID: 'ADD_USER_ID',
  // REMOVE_USER_ID: 'REMOVE_USER_ID',
  TODOS_FIRESTORE: 'TODOS_FIRESTORE',
}

export const addTodo = todo => ({
  type: Types.ADD_TODO,
  payload: {
    todo,
  },
})

export const deleteTodo = id => ({
  type: Types.DELETE_TODO,
  payload: {
    id,
  },
})

export const toggleTodo = id => ({
  type: Types.TOGGLE_TODO,
  payload: {
    id,
  },
})

export const clearCompleted = () => ({
  type: Types.CLEAR_COMPLETED,
})

export const toggleAllTodos = () => ({
  type: Types.TOGGLE_ALL_TODOS,
})

export const changeTodo = changedTodo => ({
  type: Types.CHANGE_TODO,
  payload: {
    changedTodo,
  },
})

export const handleFilters = filter => ({
  type: Types.FILTER_TASKS,
  payload: {
    filter,
  },
})

export const addUserId = userId => ({
  type: Types.ADD_USER_ID,
  payload: {
    userId,
  },
})

// export const removeUserId = () => ({
//   type: Types.REMOVE_USER_ID,
// })

export const todosFromFirestore = todos => ({
  type: Types.TODOS_FIRESTORE,
  payload: {
    todos,
  },
})
