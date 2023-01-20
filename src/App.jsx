import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Login } from './components/Login/Login'
import { Dashbord } from './components/Dashbord/Dashbord'
import { Appointment } from './components/Appointments/Appointment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login/>
      <br /><br /><br /><br /><br /><br />
      <Dashbord/>
      <br /><br /><br /><br /><br /><br />
      <Appointment/>
    </div>
  )
}

export default App
