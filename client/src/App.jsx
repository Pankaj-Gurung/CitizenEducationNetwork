import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Study from './components/TopStudy/Study'
import Title from './components/Title/Title'
import Testimonials from './components/Testimonials/Testimonials'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Study/>
      <Title subTitle= 'Testimonials' title= 'What Students Says' />
      <Testimonials/>
    </div>
  )
}

export default App