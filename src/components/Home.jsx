import React, { useState, useEffect } from "react";
import leasingLad_video from "../video/leasingLad_video.mov"
import leasingLadDemo from "../video/LeasingLadGifVideo.mov"




const Home = () => {


    return (
        <section>
            <section>

                <div>

                    <div class="">
                        <video src={leasingLad_video} autoPlay playsInline loop muted plays-inline class="brightness-50 object-cover h-72 w-full" />
                    </div>

                    <div>
                        <div class="absolute flex-wrap inset-x-0 top-2 mt-8 lg:top-10 md:top-10 sm:top-10 justify-center content-center text-center">
                            <h1 class="text-8xl font-bold text-white mt-14">Leasing Lad.</h1>
                            <p class="mt-4 text-white font-bold">
                                A leasing agents best friend.
                            </p>
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
                                Working in real estate can be fast paced. It's easy to lose track of where you are with paperwork. Leasing Lad is here to help.
                            </p>
                        </div>

                        <div class="mt-8 sm:mt-12">
                            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div
                                    class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                                >
                                    <dt class="order-last text-lg font-medium mt-4 text-gray-500">
                                        Reliable document tracking.
                                    </dt>

                                    <dd class="flex justify-center text-4xl font-extrabold text-black md:text-5xl">
                                        <img class="h-16" src="https://cdn-icons-png.flaticon.com/512/1167/1167092.png"></img>
                                    </dd>
                                </div>

                                <div
                                    class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                                >
                                    <dt class="order-last text-lg mt-4 font-medium text-gray-500">
                                        Easier way to organize.
                                    </dt>

                                    <dd class="flex justify-center text-4xl font-extrabold text-black md:text-5xl">
                                        <img class="h-16" src="https://media.istockphoto.com/id/1186273390/vector/cartoon-flat-style-vintage-analog-clock-icon-time-symbol-logo-vector-illustration-image.jpg?s=170667a&w=0&k=20&c=7imSeeUMkHfKg3h78n2l7cxs472v1cavR2ShMhPA1qo="></img>
                                    </dd>
                                </div>

                                <div
                                    class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                                >
                                    <dt class="order-last mt-4 text-lg font-medium text-gray-500">
                                        More efficient process.
                                    </dt>

                                    <dd class="flex justify-center text-4xl font-extrabold text-black md:text-5xl">
                                        <img class="h-16" src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-3-1/512/dollar-512.png"></img>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>

                <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                    How Leasing Lad Works?
                </h2>
                <div class="flex justify-center m-8">
                    <video src={leasingLadDemo} autoPlay playsInline loop muted plays-inline class="object-cover rounded-2xl border-2 border-black lg:w-1/2" />
                </div>
                <h2 class="text-2xl font-bold text-gray-600 italic m-auto mb-8">
                    <ul>
                        <li class="mb-2">Steps to getting started:</li>
                        <li class="mb-2">1. Create an account</li>
                        <li class="mb-2">2. Add new residents</li>
                        <li class="mb-2">3. Update guest cards</li>
                        <li class="mb-2">4. Be organized <span class="not-italic">😎</span></li>
                    </ul>
                </h2>
                {/* <div class="grid lg:grid-cols-2 p-8 text-2xl font-bold text-gray-600 italic">
                        <div class="mb-4">1. Create an account<img class="m-auto my-2 border-gray-200 border-1 rounded-xl w-3/4" src="https://i.ibb.co/k0ytMhL/Create-Account.png"></img></div>
                        <div class="mb-4">2. Add new residents<img class="m-auto my-2 border-gray-200 border-1 rounded-xl w-3/4" src="https://i.ibb.co/cFq4SKK/Add-Resident.png"></img></div>
                        <div class="mb-4">3. Update guest cards<img class="m-auto my-2 border-gray-200 border-1 rounded-xl w-3/4 " src="https://i.ibb.co/dpDSjQJ/View-All-Cards.png"></img></div>
                        <div class="mb-4">4. Be organized <span class="not-italic">😎</span><img class="m-auto my-2 border-gray-200 border-1 rounded-xl w-3/4 " src="https://i.ibb.co/1K7gWgy/Profie-Page.png"></img></div>
                </div> */}
                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-16">
                       ** Bonus: <span><a href="https://prorationcalculator.netlify.app/" target="_blank" class="underline italic transition hover:text-gray-700/75">Rent Proration</a></span> and <span><a href="https://rent-specials-calculator.netlify.app/" target="_blank" class="underline italic transition hover:text-gray-700/75">Rent Specials</a></span> Calculators included **
                </h2>
                
             
            </section>
        </section>
    )
}

export default Home; 

