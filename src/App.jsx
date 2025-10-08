import React from 'react'
import PropsDisplay from './pages/PropsDisplay'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/props" element={<PropsDisplay />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
