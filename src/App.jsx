import { useState } from 'react'
import Book from './Components/Book'
import BookList from './Components/BookList'
import AddNewBook from './Components/AddNewBook'
import HomePage from './Components/HomePage'
import Header from './Components/Header'
import Categories from './Components/Categories'


import {Routes,Route} from "react-router-dom"


const App = ()=> {


  return (
    <div >
      <Header/>

      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
         
          <Route path="/categories" element={<Categories/>}></Route>

      </Routes>
    </div>
  )
}

export default App
