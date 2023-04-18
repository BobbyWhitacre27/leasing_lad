import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import { Register, Header, Footer, Upcoming_moves, Past_moves, Home } from './index';
import leasingLad_video from "../video/leasingLad_video.mov"


const Login = () => {

    return (
        <section>



<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Welome back to Leasing Lad!</h1>

    <p class="mt-4 text-gray-500">
      Please enter your username and password to log in.
    </p>
  </div>

  <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
          type="email"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter username"
        />


      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>

      <div class="relative">
        <input
          type="password"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
        />

   
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-500">
        <>No account? </>
        <Link class="underline" to="/Register">Sign up</Link>
      </p>

      <button
        type="submit"
        class="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
      >
        Log In
      </button>
    </div>
  </form>
</div>


          

                           






        </section>
    )
}

export default Login; 