import React from 'react';
import Navbar from './comonents/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './comonents/Home';
import About from './comonents/About';
import ContactUs from './comonents/ContactUs';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contactus' element={<ContactUs/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App