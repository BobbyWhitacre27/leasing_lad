import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, Switch, useNavigate  } from "react-router-dom";
import { handle } from "../..";
import { getAllResident_Cards } from '../api';

const Upcoming_moves = () => {
    const navigate = useNavigate();

    const [resident_cards, setResident_Cards] = useState([]);

    const cards = async () => {
        const cards = await getAllResident_Cards();
        setResident_Cards(cards)
    }
    console.log({resident_cards})


    const handleSelect = (residentCardId) => {
        navigate("/Resident_card", {residentCardId: residentCardId})
    }

console.log({navigate})

    const residentCard = resident_cards.map((c) => {

        const date = new Date(c.move_in_date)
        const newDate = date.toLocaleDateString('en-US');
        const residentCardId = c.id
        console.log({residentCardId})
        
        return <div onClick={() => handleSelect(residentCardId)}>
            {/* <Link navigate() residentCardId={residentCardId} to="/Resident_card"> */}
            <a class="group relative block h-64 sm:h-64 lg:h-64 w-80 mt-8 mx-4">
                <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                <div
                    class="relative h-full border-2 border-black bg-white group-hover:-translate-x-2 group-hover:-translate-y-2"
                >
                    <div
                        class=" !pt-0 group-hover:absolute group-hover:opacity-0"
                    >


                        <div class="text-left h-full align-center text-black">
                            <div class="flex justify-between bg-black text-white p-2 pb-4"><h2 class="mt-4 font-bold text-3xl">#{c.apartment}</h2><h2 class="mt-4 font-bold text-3xl">{newDate}</h2></div>
                            
                            
                            <div class="flex justify-between p-2"><h2 class="mt-4 font-bold text-3xl">{c.name}</h2><h2 class="mt-4 font-bold text-3xl">80%</h2></div>
                        </div>

                    </div>

                    <div
                        class="absolute p-2 opacity-0 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                    >
                        
            
                        <h1 class="mt-14 text-xl text-black font-bold sm:text-xl ">Lease Term: {c.lease_term} Months</h1>
                        <h1 class="text-xl text-black font-bold sm:text-xl ">Rent: ${c.rent}</h1>
                        <h1 class="mt-6 text-xl text-black font-bold sm:text-xl ">See Details</h1>
                    </div>
                </div>
            </a>
        
        </div>

     
      
    
    
    
    })

    useEffect(() => {
        cards()
    }, [])



    return (
        <section class="mb-8 mt-8">
            <div class="w-3/4 m-auto">
                <h1 class="text-black text-5xl font-bold">Future Move-in's</h1>
                

                <Link to="/Resident_form">
                    <button
                        class="rounded-md bg-black border-black text-white border-2 px-5 py-2.5 text-lg font-medium text-black mt-4"
                    >
                        + Add New Resident
                    </button>
                </Link>

        <div className="cardsDisplay">
                {residentCard}
               </div>
            </div>
        </section>
    )
}

export default Upcoming_moves; 