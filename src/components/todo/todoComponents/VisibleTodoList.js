import React from 'react'
import { connect } from 'react-redux'
import findKey from 'lodash/findKey'

import Todo from './Todo'

const VisibleTodoList = props => {
  const { todos, filters } = props

  const filter = findKey(filters, f => f)

  return (
    <ul className="todo-list">
      {todos.map((todo, i) => {
        if (filter === 'active' && todo.completed) return false
        if (filter === 'completed' && !todo.completed) return false

        return <Todo key={i} todo={todo} />
      })}
    </ul>
  )
}

export default connect(
  state => ({
    todos: state.todos,
    filters: state.filters,
  }),
  null
)(VisibleTodoList)
