import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { Routes, Route } from "react-router";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
