import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' text-white bg-[#004D] w-full min-h-screen font-["San Sarif"]'>

<Navbar/>      
<LandingPage/>
<Marquee/>
<About/>
<Eyes/>
<Featured/>
<Cards/>
<Footer/>
    </div>
  )
}

export default App