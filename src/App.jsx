import React from 'react'
import Navbar from './component/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Movie from './pages/Movie'
import MovieDetail from './pages/MovieDetail'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Footer from './component/Footer'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    {Toaster}
      {!isAdminRoute && <Navbar/>}
       <Routes>
      <Route path='/'  element={<Home/>} />
       <Route path='/seatLayout'  element={<SeatLayout/>} />
      <Route path='/favorite'  element={<Favorite/>} />
      <Route path='/movies'  element={<Movie/>} />
      <Route path='/movieDetail'  element={<MovieDetail/>} />
      <Route path='/mybooking'  element={<MyBookings/>} />
      </Routes>
       {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
