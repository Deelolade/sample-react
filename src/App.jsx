import React from 'react'
import PropsDisplay from './pages/PropsDisplay'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import UseState from './pages/UseState'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/props" element={<PropsDisplay />} />
          <Route path="/state" element={<UseState />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
