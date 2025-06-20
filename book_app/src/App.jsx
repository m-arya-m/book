import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import React from 'react'

import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import ShowNaveBar from './components/ShowNavbar/ShowNavebar'

import BookDetail from './pages/BookDetail'
import AddBook from './pages/AddBook'
import EditBooks from './pages/EditBooks'

import Signup from './pages/Signup'
import Login from './pages/Login'

import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
    <ShowNaveBar>
    <Navbar />
    </ShowNaveBar>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/books/:id/' element={<BookDetail />} />
        <Route path='/books/:id/edit/' element={<EditBooks />} />
        <Route path='/books/new/' element={<AddBook toast={toast} />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App

