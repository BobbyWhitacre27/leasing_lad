import React, { useState, useEffect } from "react";
import leasingLad_video from "../video/leasingLad_video.mov"

const Home = () => {

    return (
        <section>
            <section>





                {/* main */}
                <div>


                    <div class="">
                    <video src={leasingLad_video} autoPlay loop muted plays-inline class="brightness-50 object-cover h-72 w-full" />
                    </div>

                    {/* content */}
                    <div>
                        <div class="absolute flex-wrap inset-x-0 top-2 lg:mt-8  justify-center content-center text-center">
                            <h1 class="text-8xl font-bold sm:text-9xl text-white pt-16">Leasing Lad.</h1>
                            <p class="mt-4 text-white font-bold">
                                A leasing agents best friend.
                            </p>

                            {/* <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
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
                <p class="text-sm text-white">
                    <>No account? </>
                    <Link class="underline" href="/Register">Sign up</Link>
                </p>

                <button
                    type="submit"
                    class="inline-block rounded-lg bg-white px-5 py-3 text-sm font-medium text-black"
                >
                    Sign in
                </button>
            </div>
        </form> */}
                        </div>
                    </div>
                </div>





                

                <section class="bg-white ">
                    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                        <div class="mx-auto max-w-3xl text-center">
                            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                                Designed to Improve the Leasing Experience
                            </h2>
                            <p class="mt-4 text-gray-500 sm:text-xl">
                                Working in real estate can be fast paced and easy to lose track of where you are with paperwork. Leasing Lad helps you keep track of your residents leasing paperwork.
                            </p>
                        </div>

                        <div class="mt-8 sm:mt-12">
                            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div
                                    class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                                >
                                    <dt class="order-last text-lg font-medium text-gray-500">
                                        Reliable tracking so you are always prepared for clients.
                                    </dt>

                                    <dd class="flex justify-center text-4xl font-extrabold text-black md:text-5xl">
                                    <img class="h-16" src="https://cdn-icons-png.flaticon.com/512/1167/1167092.png"></img>
                                    </dd>
                                </div>

                                <div
                                    class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                                >
                                    <dt class="order-last text-lg font-medium text-gray-500">
                                        Easier way to organize that gives you more time back. 
                                    </dt>

                                    <dd class="flex justify-center text-4xl font-extrabold text-black md:text-5xl">
                                    <img class="h-16" src="https://media.istockphoto.com/id/1186273390/vector/cartoon-flat-style-vintage-analog-clock-icon-time-symbol-logo-vector-illustration-image.jpg?s=170667a&w=0&k=20&c=7imSeeUMkHfKg3h78n2l7cxs472v1cavR2ShMhPA1qo="></img>
                                    </dd>
                                </div>

                                <div
                                    class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                                >
                                    <dt class="order-last text-lg font-medium text-gray-500">
                                        Gives you the opportunity for more tours and more sales.
                                    </dt>

                                    <dd class="flex justify-center text-4xl font-extrabold text-black md:text-5xl">
                                    <img class="h-16" src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-3-1/512/dollar-512.png"></img>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>



            </section>
        </section>
    )
}

export default Home; 