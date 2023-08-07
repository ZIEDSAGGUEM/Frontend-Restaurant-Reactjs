import React from 'react'
import Header from './components/Head'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import Food from './components/Menu'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Food' element={<Food/>} />
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>       
    </div>
  )
}

export default App