import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../api/index.js"



const Login = ({ setToken, setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const log_in = async (event) => {
        event.preventDefault();

        try {
            if (password.length < 8) {
                setMessage('Password is too short!');
            }
            const logIn = await login(username, password);
            if (logIn.error) {
                if(logIn.message === "Cannot read properties of undefined (reading 'password')"){
                    setMessage("Please check username or password")
                    return
                }
                setMessage("Please check username and password");
            } else {
                setMessage(logIn.message)
                setToken(logIn.token);
                setUser(logIn.user);
                localStorage.setItem('token', JSON.stringify(logIn.token));
                navigate('/Profile');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const loginMessage = message !== "" ? <p class="mt-4 text-gray-500">{message}</p> : ""


    return (
        <section>



            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Welome back to Leasing Lad!</h1>

                    <p class="mt-4 text-gray-500">
                        Please enter your username and password to log in.
                    </p>
                    {loginMessage}

                </div>

                <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={log_in}>
                    <div>
                        <label for="email" class="sr-only">Email</label>

                        <div class="relative">
                            <input
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter username"
                                onChange={(e) => setUsername(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
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

