import React from "react";
import Navbar  from "./comonents/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <h1>This is iNoteB0ok Beta-1 </h1>
    </>
  );
}

export default App;
