import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import MovieDetails from './Pages/MovieDetails'
import SeatLayout from './Pages/SeatLayout'
import MyBooking from './Pages/MyBooking'
import Favorite from './Pages/Favorite'
import Navbar from './Component/Navbar'
import {Toaster} from 'react-hot-toast'
import Footer from './Component/footer'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/Admin')

  return (
    <>
    <Toaster/>
     {! isAdminRoute && <Navbar/>}
      <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/Movies' element={<Movies/>}/>
    <Route  path='/Movies/:id' element={<MovieDetails/>}/>
    <Route  path='/Movies/:id/:date' element={<SeatLayout/>}/>
    <Route  path='/MyBooking' element={<MyBooking/>}/>
    <Route  path='/Favorite' element={<Favorite/>}/>
    
      </Routes>
       {! isAdminRoute && <Footer/>}
    </>
  )
}

export default App
