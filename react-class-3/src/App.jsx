import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello class 3</h1>

      <Student></Student>
    </>
  )
}

export default App
