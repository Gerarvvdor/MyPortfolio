import React from 'react'
import './App.css'
import AnimatedBackground from './Components/AnimatedBackground'
import Navbar from './Components/Navbar'
import ContactSection from './Components/ContactSection'

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <AnimatedBackground />
      <div style={{ position: "relative", zIndex: 1, paddingTop: "80px" }}>

        <div className="container">
          {/* Contenedor de información y foto*/}
          <div className='flex'>
            {/*Contenedor de info */}
            <div className='flexbox bg-gray-400 rounded-md p-8 m-6 bg-opacity-50'>
              <h1 className='font-bold text-2xl text-left'>
                Hello, I´m Gerardo, a front-end web developer with 2 years of experience.
              </h1>
              <p className='text-left'>
                I care about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.
              </p>
              <ContactSection />
            </div>
            {/*Div de foto*/}
            <div className='bg-gray-200 rounded-md p-6 m-6'>
              <p>aquí va una foto xD

              </p>
            </div>
          </div>
          {/*Sección de proyectos */}
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App
