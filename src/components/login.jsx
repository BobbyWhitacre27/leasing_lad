import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import { Register, Header, Footer, Upcoming_moves, Past_moves, Home } from './index';
import leasingLad_video from "../video/leasingLad_video.mov"


const Login = () => {

    return (
        <section>


            <div>

                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-lg text-center">
                        <h1 class="text-2xl font-bold sm:text-3xl">Leasing Lad.</h1>

                        <p class="mt-4 text-gray-500">
                            Keep your sales simple, organized and efficient.
                        </p>
                    </div>


                    <div class="relative">
                   
                        <div class="relative bottom-0 left-0 z-1">
                            Absolute child
                        </div>
                        <video src={leasingLad_video} autoPlay loop muted class="absolute h-30"/>
                    </div>








                    <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4 abolute">
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
                                <Link class="underline" href="/Register">Sign up</Link>
                            </p>

                            <button
                                type="submit"
                                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>






                </div>
            </div>



            <section class="bg-white">
                <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div class="mx-auto max-w-3xl text-center">
                        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Trusted by eCommerce Businesses
                        </h2>

                        <p class="mt-4 text-gray-500 sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                            laborum labore provident impedit esse recusandae facere libero harum
                            sequi.
                        </p>
                    </div>

                    <div class="mt-8 sm:mt-12">
                        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div
                                class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt class="order-last text-lg font-medium text-gray-500">
                                    Total Sales
                                </dt>

                                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                    $4.8m
                                </dd>
                            </div>

                            <div
                                class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt class="order-last text-lg font-medium text-gray-500">
                                    Official Addons
                                </dt>

                                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                            </div>

                            <div
                                class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt class="order-last text-lg font-medium text-gray-500">
                                    Total Addons
                                </dt>

                                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>



        </section>
    )
}

export default Login; 