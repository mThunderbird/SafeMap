import { useState } from 'react'
import MapView from './components/MapView'
import ForumView from './components/ForumView'
import AboutView from './components/AboutView'
import NavBar from './components/NavBar'

import "./styles/app.css"

import { Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<MapView />} />
        <Route path="/forum" element={<ForumView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </div>
  )
}
