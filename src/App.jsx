import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import { getAllResident_Cards } from './api';
import { Login, Register, Header, Footer, Upcoming_moves, Past_moves } from './components/index';

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
          <Route exact path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Upcoming_moves" element={<Upcoming_moves/>} />
          <Route path="/Past_moves" element={<Past_moves/>} />
        </Routes>
        <footer><Footer></Footer></footer>
      </BrowserRouter>

      <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center sm:text-left">
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p class="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
              tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
              fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
              duis.
            </p>

            <div class="mt-4 md:mt-8">
              <p
                href="#"
                class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </p>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-56 w-full object-cover sm:h-full"
        />
      </section>

    </div>
  );
}

export default App;
