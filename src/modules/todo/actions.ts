import types from './types'

let nextTodoId = 0

export const addTodo = (text:any) => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  text,
})

export const setVisibilityFilter = (filter:any) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
})

export const toggleTodo = (id:any) => ({
  type: types.TOGGLE_TODO,
  id,
})

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
