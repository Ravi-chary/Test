import { useState } from 'react'
import AppName from './components/AppName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppName />
    </>
  )
}

export default App
