import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { register } from "../api"

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const signUp = await register(username, password);
          if(password !== confirmPassword){
            setMessage("Passwords do not match!")
            setUsername('');
            setPassword('');  
            return
          }
          if (signUp.error) {
            setMessage(signUp.message);
            setUsername('');
            setPassword('');   
            return;
            }
          if (signUp) {
            setMessage(signUp.message);
            setUsername('');
            setPassword('');   
            }
        } catch (error) {
            console.error("error in handleSubmit of Register.js");
        }
    };


    return (
        <section>


            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Get started with Leasing Lad today!</h1>

                    <p class="mt-4 text-gray-500">
                        Create your account below.
                    </p>

                    {message !== "" ? <p class="mt-4 text-gray-500">
                        {message}
                    </p> : ""}
                </div>

                <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label for="username" class="sr-only">Username</label>

                        <div class="relative">
                            <input
                              
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Create username"
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

                    <div>
                        <label for="password" class="sr-only">Confirm Password</label>

                        <div class="relative">
                            <input
                                type="password"
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Confirm password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <p class="text-sm text-gray-500">
                            <>Already have an account? </>
                            <Link class="underline" to="/Login">Log in</Link>
                        </p>

                        <button
                            type="submit"
                            class="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Register; 