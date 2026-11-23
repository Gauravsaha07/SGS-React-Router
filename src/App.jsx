import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
