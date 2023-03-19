import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home/Home'
import { Movie } from './pages/movie/Movie'
import { Search } from './pages/search/Search'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import "swiper/css";
import "swiper/css/pagination";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>} />
        <Route path='movie/:id' element={<Movie/>} />
        <Route path='search' element={<Search/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
