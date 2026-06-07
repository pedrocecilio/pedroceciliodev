import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Portifolio from './pages/portifolio/Portifolio'
import Contato from './pages/contato/Contato'
import Themes from './components/Themes'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='portifolio' element={<Portifolio />} />
        <Route path='contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
