import { useState } from 'react'
import MapView from './components/MapView'
import NavBar from './components/NavBar'

import "./styles/app.css"

import { Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<MapView />} />
        <Route path="/forum" element={<div>Forum</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </div>
  )
}
