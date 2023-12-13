import React from 'react';
import Navbar from './comonents/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './comonents/Home';
import About from './comonents/About';
import ContactUs from './comonents/ContactUs';
import NoteState from './context/notes/NoteState';
import Login from './comonents/Login';
import Signup from './comonents/Signup';

const App = () => {
  return (
    <>
    <NoteState>
      <Router>

        <Navbar />
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contactus' element={<ContactUs />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />

        </Routes>

      </Router>
    </NoteState>
    </>
  )
}

export default App