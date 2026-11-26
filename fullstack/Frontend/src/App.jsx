import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/projects'
import Login from './pages/login'
import Task from './pages/task'
import Team from './pages/team'
import Clients from './pages/clients'
import Dashboard from './pages/dashboard'
import Calander from './pages/calander'
import Settings from './pages/settings'
 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/task" element={<Task/>}></Route>
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/clients" element={<Clients/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/calander" element={<Calander/>}></Route>
      <Route path="/settings" element={<Settings/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App