import { useState } from 'react'
import './App.css'
import ReportForm from './components/ReportForm'
import MapView from './components/MapView'


function App() {

  return (
      <div className="main-container">
        <MapView />
        <ReportForm />
      </div>
  )
}

export default App
