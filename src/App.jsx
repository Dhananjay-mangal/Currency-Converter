import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'
import './index.css';

function App() {

  return (
    <div className="App bg-blue-100 min-h-screen flex flex-col justify-between">
      <Navbar />
      <Content/>
      <Footer />
    </div>
  )
}

export default App
