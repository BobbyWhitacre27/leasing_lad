import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login, Register, Footer, Upcoming_moves, Past_moves, Home } from './index';

const Header = ({ user, setUser, setToken, token }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser('');
        navigate('/');
    }

    const profileButton = token !== "" ?
        <Link class="text-gray-500 transition hover:text-gray-500/75" to="/Profile">
            Profile
        </Link>
        : "";

    const futureMoveInsButton = token !== "" ?
        <Link class="text-gray-500 transition hover:text-gray-500/75" to="/Upcoming_moves">
            Future Move-in's
        </Link>
        : "";

    const pastMoveInsButton = token !== "" ?
        <Link class="text-gray-500 transition hover:text-gray-500/75" to="/Past_moves">
            Past Move-in's
        </Link>
        : "";

    const logInSingUpLogOutButtons = token !== "" ?
        <button
            class="block rounded-md bg-white border-black border-2 px-5 py-2.5 text-sm font-medium text-black"
            onClick={logout}
        >
            Log Out
        </button>

        :
        <div class="sm:flex sm:gap-4">
            <Link to="/Login">
                <button
                    class="block rounded-md bg-white border-black border-2 px-5 py-2.5 text-sm font-medium text-black"
                >
                    Log In
                </button>
            </Link>
            <Link to="/Register">
                <button
                    class="hidden rounded-md bg-black border-black border-2 px-5 py-2.5 text-sm font-medium text-white transition hover:text-teal-600/75 sm:block"

                >
                    Sign Up
                </button>
            </Link>
        </div>;



    return (
        <header>

            <header aria-label="Site Header" class="bg-white">
                <div
                    class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 px-6 lg:px-8"
                >

                    <button class="block text-teal-600">
                        <Link to="/"><img class="h-12" src="https://i.ibb.co/2YYrkKd/LL-2-copy.png"></img></Link>
                    </button>


                    <div class="flex flex-1 items-center justify-end md:justify-between">

                        <nav aria-label="Site Nav" class="hidden md:block">
                            <ul class="flex items-center gap-6 text-sm">
                                <li>
                                    {profileButton}
                                </li>

                                <li>
                                    {futureMoveInsButton}
                                </li>

                                <li>
                                    {pastMoveInsButton}
                                </li>
                            </ul>
                        </nav>


                        <div class="flex items-center gap-4">
                            
                                {logInSingUpLogOutButtons}
                        

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