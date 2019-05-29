import { css } from 'emotion'
import React, { useCallback } from 'react'

import { useMappedState, useDispatch } from 'redux-react-hook'
import todoOperations from '../../modules/todo/operations'

import { bindActionCreators } from 'redux'

export default () => {
  const { todoCount, list } = useMappedState(
    useCallback(
      (state: any) => ({
        todoCount: state.todo.todos.length,
        list: state.todo.todos,
      }),
      []
    )
  )

  const dispatch = useDispatch()

  const { addTodo } = bindActionCreators(
    {
      addTodo: todoOperations.addTodo,
    },
    dispatch
  )

  return (
    <div>
      <div className={styles.count}>You have {todoCount} todos</div>
      <ul className={styles.todos}>
        {list.map((item: any) => {
          return <li key={item.id}>{item.text}</li>
        })}
      </ul>
      <div className={styles.lastUpdated} />
      <span onClick={() => addTodo('foo')}>addTodo</span>
    </div>
  )
}

const styles = {
  count: css`
    font-size: 12px;
  `,
  lastUpdated: css`
    color: #666;
    font-size: 10px;
  `,
  todos: css`
    padding-left: 0;
  `,
}
