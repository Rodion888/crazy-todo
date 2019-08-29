import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppLogout from '../logoutButton/index'
import {
  toggleAllTodos,
  addUserId,
  getTodosFromFirestore,
} from '../../actions/todoActions'
import auth from '../Auth/index'
import Header from './todoComponents/Header'
import VisibleTodoList from './todoComponents/VisibleTodoList'
import Footer from './todoComponents/Footer'

const TodoMain = props => {
  const {
    todos,
    toggleAllTodos,
    history,
    addUserId,
    getTodosFromFirestore,
  } = props

  useEffect(() => {
    const userId = auth.getUserId()
    if (userId) {
      addUserId(userId)
    }
    getTodosFromFirestore(userId)
  }, [])

  const activeTodosCount = todos.filter(t => !t.completed).length

  return (
    <div>
      <section className="todoapp">
        <Header />
        <section className="main">
          {todos.length ? (
            <div>
              <input
                className="toggle-all"
                type="checkbox"
                checked={!activeTodosCount}
                onChange={() => {}}
              />
              <label onClick={() => toggleAllTodos()} htmlFor="toggle-all" />
            </div>
          ) : null}
          <VisibleTodoList />
        </section>
        <Footer activeTodosCount={activeTodosCount} />
      </section>
      <AppLogout history={history} />
    </div>
  )
}

export default connect(
  state => ({
    todos: state.todos,
  }),
  dispatch =>
    bindActionCreators(
      { toggleAllTodos, addUserId, getTodosFromFirestore },
      dispatch
    )
)(TodoMain)
