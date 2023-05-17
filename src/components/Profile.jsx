import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllResident_Cards } from '../api/index.js';

const Profile = ({ user, setNumberFutureResidents, setNumberPastResidents }) => {

    const [resident_cards, setResident_Cards] = useState([]);


    const cards = async () => {
        const cards = await getAllResident_Cards();
        setResident_Cards(cards)
    }




    useEffect(() => {
        cards()
    }, [])

    const userFilter = resident_cards.filter((u) => user.id === u.user_id)

    const notMovedInFilter = userFilter.filter((u) => u.moved_in === false)

    const movedInFilter = userFilter.filter((u) => u.moved_in === true)

    const numberOfFutreMoveIns = notMovedInFilter.length

    const numberOfPastMoveIns = movedInFilter.length

	setNumberFutureResidents(numberOfFutreMoveIns)

	setNumberPastResidents(numberOfPastMoveIns)

    return (
        <section class="mb-8 mt-8">
            <div class="w-3/4 m-auto">
                <h1 class="text-black text-5xl font-bold">Profile</h1>
                <h1 class="text-black text-2xl font-bold mt-4">Welcome Back "{user.username}"! 🎉</h1>
                <h1 class="text-xl mt-8">About your account:</h1>
                <p>Username: {user.username}</p>
                <div class="flex sm:flex-wrap justify-center gap-8 mt-8">
                    <div class="font-bold"><h1 class="lg:text-3xl md:text-3xl sm:text-md">Future Move-ins</h1><h2 class="text-8xl">{numberOfFutreMoveIns}</h2></div>
                    <div class="font-bold"><h1 class="lg:text-3xl md:text-3xl sm:text-md">Past Move-ins</h1><h2 class="text-8xl">{numberOfPastMoveIns}</h2></div>
                </div>


                <div class="md:flex sm:flex-wrap justify-center mt-8">
                    <div class="p-2">
                        <Link class="flex justify-center" to="/Upcoming_moves">
                            <button
                                class="block rounded-md bg-white border-black border-2 py-2.5 text-sm font-medium text-black w-72"

                            >
                                Future Move-in's
                            </button>
                        </Link>
                    </div>
                    <div class="p-2">
                        <Link class="flex justify-center" to="/Past_moves">
                            <button
                                class="block rounded-md bg-white border-black border-2 py-2.5 text-sm font-medium text-black w-72"

                            >
                                Past Move-in's
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <h1 class="text-black text-2xl font-bold mt-8">Additional Resources:</h1>
            <div class="p-4">
                <a
                    class="rounded-md bg-black border-black border-2 mt-6 py-2 px-8 text-sm font-medium text-white w-72"
                    target="_blank"
                    href="https://prorationcalculator.netlify.app/"
                >
                    Rent Proration Calculator
                </a>
            </div>
            <div class="p-2">
                <a
                    class="rounded-md bg-black border-black border-2 mt-6 py-2 px-8 text-sm font-medium text-white w-72"
                    target="_blank"
                    href="https://rent-specials-calculator.netlify.app/"
                >
                    Rent Specials Calculator
                </a>
            </div>



            <h1 class="text-black text-2xl font-bold mt-8">Go get some leases!</h1>

        </section>
    )
}

export default Profile; 
