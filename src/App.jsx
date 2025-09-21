import{Route, Routes, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Content from './Content'
import './App.css'
import React from 'react'

function App() {
 
  return (
    <>
    <nav>
      <Link to="/">Home </Link> 
      <Link to="/about">About </Link>
      <Link to="/content">Content </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/content" element={<Content/>}/>
    </Routes>
    </>
  )
}

export default App;