import React from 'react'
import Navbar from './component/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Footer from './component/Footer'
import {Toaster} from 'react-hot-toast'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import AddShows from './pages/Admin/AddShows'
import ListShows from './pages/Admin/ListShows'
import ListBookings from './pages/Admin/ListBookings'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
      {!isAdminRoute && <Navbar/>}
       <Routes>
      <Route path='/'  element={<Home/>} />   
      <Route path='/movies'  element={<Movies/>} />
      <Route path='/movies/:id'  element={<MovieDetails/>} />
         <Route path='/movies/:id/:date'  element={<SeatLayout/>} />
      <Route path='/My-bookings'  element={<MyBookings/>} />
      <Route path='/favorite'  element={<Favorite/>} />
        <Route path='/admin/*' element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='add-shows' element={<AddShows/>} />
          <Route path='list-shows' element={<ListShows/>} />
          <Route path='list-bookings' element={<ListBookings/>} />
        </Route>
      </Routes>
       {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
