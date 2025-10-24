import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <div className='flex flex-col gap-5 p-20'>
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App
