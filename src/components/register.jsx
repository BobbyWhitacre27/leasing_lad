import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    return (
        <section>


            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Get started with Leasing Lad today!</h1>

                    <p class="mt-4 text-gray-500">
                        Create your account below.
                    </p>
                </div>

                <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label for="email" class="sr-only">Email</label>

                        <div class="relative">
                            <input
                                type="email"
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Create username"
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

                    <div>
                        <label for="password" class="sr-only">Password</label>

                        <div class="relative">
                            <input
                                type="password"
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Confirm password"
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