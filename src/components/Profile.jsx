import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllResident_Cards } from '../api';

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

    const numberOfFutreMoveIns = notMovedInFilter.length

    const numberOfPastMoveIns = (notMovedInFilter.length) - numberOfFutreMoveIns

    return (
        <section class="mb-8 mt-8">
            <div class="w-3/4 m-auto">
                <h1 class="text-black text-5xl font-bold">Profile</h1>
                <h1 class="text-black text-2xl font-bold mt-4">Welcome Back "{user.username}"! 🎉</h1>
                <h1 class="text-xl mt-8">About your account:</h1>
                <p>Username: {user.username}</p>
                <div class="flex sm:flex-wrap justify-center gap-8 mt-8">
                    <div class="font-bold"><h1 class="text-3xl">Future Move-ins</h1><h2 class="text-8xl">{numberOfFutreMoveIns}</h2></div>
                    <div class="font-bold"><h1 class="text-3xl">Past Move-ins</h1><h2 class="text-8xl">{numberOfPastMoveIns}</h2></div>
                </div>

                <div class="lg:flex md:flex sm:flex-wrap justify-center gap-4 mt-10">
                    <Link to="/Upcoming_moves">
                        <button
                            class="block rounded-md bg-white border-black border-2 lg:px-5 sm:px-2 py-2.5 text-sm font-medium text-black w-72"

                        >
                            Future Move-in's
                        </button>
                    </Link>
                    <Link to="/Past_moves">
                        <button
                            class="block rounded-md bg-white border-black border-2 lg:px-5 sm:px-2 py-2.5 text-sm font-medium text-black w-72"

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