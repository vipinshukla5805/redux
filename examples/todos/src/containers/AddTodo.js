import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let name
  let nickname

  return (
    <div>
      <form
        class="form-inline"
        onSubmit={e => {
          e.preventDefault()
          if (!name.value.trim() && !nickname.value.trim()) {
            return
          }
          dispatch(addTodo(name.value, nickname.value))
          name.value = ''
          nickname.value = ''
        }}
      >
        <label class="sr-only" for="inlineFormInputName2">
          Name
        </label>
        <input
          ref={node => (name = node)}
          type="text"
          class="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Name"
        />

        <label class="sr-only" for="inlineFormInputGroupUsername2">
          Name
        </label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text"></div>
          </div>
          <input
            ref={node => (nickname = node)}
            type="text"
            class="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Nick Name"
          />
        </div>
        <button type="submit" className="btn btn-success">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
