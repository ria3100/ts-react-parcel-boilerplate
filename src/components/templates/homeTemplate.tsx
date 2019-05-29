import React from 'react'

import { TodoList, Main, Footer, Navigation } from '../organisms'

export default () => {
  return (
    <div className="App">
      <Main />
      <Navigation />
      <TodoList />
      <Footer />
    </div>
  )
}
