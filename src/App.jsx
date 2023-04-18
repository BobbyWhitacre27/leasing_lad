import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import { getAllResident_Cards } from './api';
import { Login, Register, Header, Footer, Upcoming_moves, Past_moves, Home, Profile } from './components/index';

function App() {
  const [resident_cards, setResident_Cards] = useState({})

  const cards = async () => {
    const cards = await getAllResident_Cards();
    setResident_Cards(cards)
  }
  console.log({ resident_cards })


  useEffect(() => {
    cards()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <header><Header ></Header></header>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Upcoming_moves" element={<Upcoming_moves/>} />
          <Route path="/Past_moves" element={<Past_moves/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
        <footer><Footer></Footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
