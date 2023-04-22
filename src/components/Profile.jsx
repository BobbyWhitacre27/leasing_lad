import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllResident_Cards } from '../api/index.js';

const Profile = ({ user }) => {

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

                <div class="lg:flex md:flex sm:flex-wrap justify-center sm:gap-4 mt-10 sm:py-4">
                    <Link to="/Upcoming_moves">
                        <button
                            class="block rounded-md bg-white border-black border-2 py-2.5 text-sm font-medium text-black w-72"

                        >
                            Future Move-in's
                        </button>
                    </Link>
                    <Link to="/Past_moves">
                        <button
                            class="block rounded-md bg-white border-black border-2 py-2.5 text-sm font-medium text-black w-72"

                        >
                            Past Move-in's
                        </button>
                    </Link>
                </div>
                <h1 class="text-black text-2xl font-bold mt-8">Go get some leases!</h1>
            </div>
        </section>
    )
}

export default Profile; 