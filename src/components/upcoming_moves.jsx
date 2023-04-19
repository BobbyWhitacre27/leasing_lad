import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllResident_Cards } from '../api';

const Upcoming_moves = () => {
    const [resident_cards, setResident_Cards] = useState({});

    const cards = async () => {
        const cards = await getAllResident_Cards();
        setResident_Cards(cards)
    }

    const residentName = resident_cards.name

    useEffect(() => {
        cards()
    }, [])



    return (
        <section class="mb-8 mt-8">
            <div class="w-3/4 m-auto">
                <h1 class="text-black text-5xl font-bold">Future Move-in's</h1>
                {residentName}

                <Link to="/Resident_form">
                    <button
                        class="rounded-md bg-black border-black text-white border-2 px-5 py-2.5 text-lg font-medium text-black mt-4"
                    >
                        + Add New Resident
                    </button>
                </Link>
                <div class="flex justify-center">
                <Link to="/Resident_card">
                    <a class="group relative block h-64 sm:h-64 lg:h-64 w-80 mt-8 mx-4">
                        <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                        <div
                            class="relative h-full border-2 border-black bg-white group-hover:-translate-x-2 group-hover:-translate-y-2"
                        >
                            <div
                                class="p-4 !pt-0 group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                            >


                                <div class="text-left h-full align-center text-black">
                                    <h2 class="mt-4 font-bold text-5xl">#101</h2>
                                    <h2 class="mt-4 font-bold text-3xl">John Smith</h2>
                                    <div class="flex justify-between"><h2 class="mt-4 font-bold text-xl">4/30/2023</h2><h2 class="mt-4 font-bold text-xl">80%</h2></div>
                                </div>

                            </div>

                            <div
                                class="absolute p-2 opacity-0  group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                            >
                                <h3 class="mt-12 text-3xl text-black font-bold sm:text-3xl ">Click to Update!</h3>
                                <ul class="text-black text-xl mt-4 font-bold">
                                    <li>Lease Term: 13 Months</li>
                                    <li>Rent: $2,300</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </Link>

             
                </div>
            </div>
        </section>
    )
}

export default Upcoming_moves; 