import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import TermsAndConditions from './pages/terms-and-conditions/TermsAndConditions';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer/Footer';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/projects' element = {<Projects/>} />
      <Route path='/about-us' element = {<About/>} />
      <Route path='/terms-and-conditions' element = {<TermsAndConditions/>} />
      <Route path='/contact-us' element = {<Contact/>} />
    </Routes>
    <Footer/>
    </>
  )
}
export default App