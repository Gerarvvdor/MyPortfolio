import { useState } from 'react'
import './App.css'
import AnimatedBackground from './Components/AnimatedBackground'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <AnimatedBackground />
      <div style={{ position: "relative", zIndex: 1, paddingTop: "80px" }}>
      </div>
    </div>
  );
};

export default App
