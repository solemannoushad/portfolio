import React from 'react'
import Navbar from './Navbar'
import Home from './Home'

export default function Header() {
  return (
    <header className="header">
        <Navbar/>
        <Home/>
    </header>
  )
}
