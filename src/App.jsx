import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './components/shared/Menu'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/shared/Footer.jsx'
import Login from './components/login/Login.jsx'
import Registrarse from './components/login/Registrarse.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    <Menu />
    <Registrarse />
    <main>
      <Routes>
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
