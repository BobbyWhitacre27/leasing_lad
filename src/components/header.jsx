import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Login, Register, Footer, Upcoming_moves, Past_moves, Home } from './index';

const Header = () => {

    const loggedIn = 2

    return (
        <header>

            <header aria-label="Site Header" class="bg-white">
                <div
                    class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
                >
                     
                <a class="block text-teal-600">
                        <Link to="/"><img class="h-12" src="https://i.ibb.co/2YYrkKd/LL-2-copy.png"></img></Link>
                    </a>

                   
                    <div class="flex flex-1 items-center justify-end md:justify-between">
                    
                        <nav aria-label="Site Nav" class="hidden md:block">
                            <ul class="flex items-center gap-6 text-sm">
                                <li>
                                    {loggedIn === 2 ? 
                                    <Link class="text-gray-500 transition hover:text-gray-500/75" to="/Profile">
                                        Profile
                                    </Link>
                                    : ""}
                                </li>

                                <li>
                                {loggedIn === 2 ? 
                                    <Link class="text-gray-500 transition hover:text-gray-500/75" to="/Upcoming_moves">
                                        Future Move-in's
                                    </Link>
                                    :""}
                                </li>

                                <li>
                                {loggedIn === 2 ? 
                                    <Link class="text-gray-500 transition hover:text-gray-500/75" to="/Past_moves">
                                        Past Move-in's
                                    </Link>
                                    : ""}
                                </li>
                            </ul>
                        </nav>
                        

                        <div class="flex items-center gap-4">
                            <div class="sm:flex sm:gap-4">
                                <Link to="/Login">
                                <div
                                    class="block rounded-md bg-white border-black border-2 px-5 py-2.5 text-sm font-medium text-black sm:block"
                                    href="/"
                                >
                                    Log In
                                </div>
                                </Link>
                                <Link to="/Register">
                                <div
                                    class="hidden rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:text-teal-600/75 sm:block"
                                    href="/"
                                >
                                    Sign Up
                                </div>
                                </Link>
                            </div>

                            <button
                                class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span class="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>


        </header>
    )
}

export default Header; 