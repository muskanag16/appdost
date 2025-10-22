import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import Services from './components/Services'
import DevelopmentProcess from './components/Dev'
import CallToAction from './components/CallToActionjsx'
import Portfolio from './components/Portfolio'
import ApplicationForm from './components/Application'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className="App">
      <Navbar />
      <HeroSection/>
      <StatsSection/>
      <AboutSection/>
      {/* <Route path="/services" element={<Services />} /> */}
      <Services/>
      <DevelopmentProcess/>
      <CallToAction/>
      
      <Portfolio/>
       {/* <div className="min-h-screen bg-black flex items-center justify-center p-4"> */}
      <ApplicationForm />
      <Footer/>
    {/* </div> */}
     
   </div>
  )
}

export default App
