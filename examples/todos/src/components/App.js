import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="row mt-4 ml-4">
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
