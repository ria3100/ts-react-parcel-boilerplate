import React from 'react'

import { TodoList, Main, Footer } from '../organisms'

export default () => {
  return (
    <div className="App">
      <Main />
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <TodoList />
      <Footer />
    </div>
  )
}
