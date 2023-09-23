
import './App.css';
import Navbar from './components/Navbar';
import News from './News';
import React from "react";


function App() {
  return (
  <div>
    <Navbar/>
    <News pageSize={12} country="in" category="sports"/>
  </div>
  );
}

export default App;
