import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './components/shared/Menu'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Footer from './components/shared/Footer.jsx'



function App() {

  return (
    <>
    <BrowserRouter>
    <Menu />
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
