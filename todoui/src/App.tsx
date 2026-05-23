
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Todo from './components/Todo'
import Login from './components/Login'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/todo" element={<Todo />} />
    </Routes>
      
    </>
  )
}

export default App
