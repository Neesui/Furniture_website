import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Hero from './components/Hero'

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Hero />
      <Footer />
    </Router>
  )
}

export default App