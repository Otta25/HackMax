import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Page404 from './components/Page404/Page404';
import MoviePage from './components/MoviePage/MoviePage';
import SearchPage from './components/SearchPage/SearchPage';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buscar' element={<SearchPage/>}/>
        <Route path='/peliculas/:id' element={<MoviePage/>}/>
        <Route path='*' element={<Page404/>}/>
       </Routes>
    </div>
  );
}

export default App;
