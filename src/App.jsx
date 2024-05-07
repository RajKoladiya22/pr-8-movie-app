import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home } from './assets/pages/home'
import { Treding } from './assets/pages/treding'
import { Upcoming } from './assets/pages/upcoming'
import { Favorites } from './assets/pages/favorites'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/treding' element={<Treding/>}></Route>
          <Route path='/upcoming' element={<Upcoming/>}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
