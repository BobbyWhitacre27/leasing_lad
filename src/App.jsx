import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Login, Register, Header, Footer, Upcoming_moves, Past_moves, Home, Profile, Resident_form } from './components/index';
import  Header from './components/Header.jsx'
 import Login from './components/Login.jsx'
 import Register from './components/Register.jsx' 
 import Footer from './components/Footer.jsx' 
 import Upcoming_moves from './components/Upcoming_moves.jsx'
 import Past_moves from './components/Past_moves.jsx'
 import Home from './components/Home.jsx'
 import Profile from './components/Profile.jsx'
 import Resident_form from './components/Resident_form.jsx';


function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);
  const [numberFutureResidents, setNumberFutureResidents] = useState("")
  const [numberPastResidents, setNumberPastResidents] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <header><Header user={user} setUser={setUser} setToken={setToken} token={token} numberFutureResidents={numberFutureResidents} numberPastResidents={numberPastResidents}></Header></header>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Login" element={<Login setToken={setToken} setUser={setUser}/>}  />
          <Route path="/Register" element={<Register setToken={setToken} setUser={setUser}/>} setToken={setToken} setUser={setUser} />
          <Route path="/Upcoming_moves" element={<Upcoming_moves user={user} setNumberFutureResidents={setNumberFutureResidents} setNumberPastResidents={setNumberPastResidents}/>} />
          <Route path="/Past_moves" element={<Past_moves user={user} setNumberFutureResidents={setNumberFutureResidents} setNumberPastResidents={setNumberPastResidents}/>} />
          <Route path="/Profile" element={<Profile user={user} setNumberFutureResidents={setNumberFutureResidents} setNumberPastResidents={setNumberPastResidents}/>} />
          <Route path="/Resident_form" element={<Resident_form user={user} />} />
          <Route path="/Resident_form" element={<Resident_form user={user} />} />
        </Routes>
        <footer><Footer></Footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
