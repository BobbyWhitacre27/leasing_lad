import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, Switch, useNavigate  } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { handle } from "../..";
import { getAllResident_Cards } from '../api';

const Upcoming_moves = () => {
    const [resident_cards, setResident_Cards] = useState([]);
    const [select, setSelect] = useState(false);
    const [selectedId, setSelectedId] = useState('')



    const [name, setName] = useState('');
    const [apartment, setApartment] = useState('');
    const [rent, setRent] = useState('');
    const [leaseTerm, setLeaseTerm] = useState('');
    const [moveDate, setMoveDate] = useState('');
    const [approvalDocsSent, setApprovalDocsSent] = useState(false);
    const [leaseSent, setLeaseSent] = useState(false);
    const [electricSetUp, setElectricSetUp] = useState(false);
    const [insuranceSetUp, setInsuranceSetUp] = useState(false);
    const [leaseSigned, setLeaseSigned] = useState(false);
    const [paymentMade, setPaymentMade] = useState(false);
    const [notes, setNotes] = useState('');
    const [movedIn, setMovedIn] = useState(false);


    const handleName = event => {
        setName(event.target.value)
    }

    const handleApartment = event => {
        setApartment(event.target.value)
    }

    const handleRent = event => {
        setRent(event.target.value)
    }

    const handleLeaseTerm = event => {
        setLeaseTerm(event.target.value)
    }

    const handleApprovalDocsSent = event => {
        if (approvalDocsSent === false) {
            return setApprovalDocsSent(true)
        }
        setApprovalDocsSent(false)
    }

    const handleLeaseSent = event => {
        if (leaseSent === false) {
            return setLeaseSent(true)
        }
        setLeaseSent(false)
    }

    const handleElectricSetUp = event => {
        if (electricSetUp === false) {
            return setElectricSetUp(true)
        }
        setElectricSetUp(false)
    }

    const handleInsuranceSetUp = event => {
        if (insuranceSetUp === false) {
            return setInsuranceSetUp(true)
        }
        setInsuranceSetUp(false)
    }

    const handleLeaseSigned = event => {
        if (leaseSigned === false) {
            return setLeaseSigned(true)
        }
        leaseSigned(false)
    }

    const handlePaymentMade = event => {
        if (paymentMade === false) {
            return setPaymentMade(true)
        }
        setPaymentMade(false)
    }

    const handleNotes = event => {
        setNotes(event.target.value)
    }
 



    const cards = async () => {
        const cards = await getAllResident_Cards();
        setResident_Cards(cards)
    }
    console.log({resident_cards})


    const handleSelect = (id) => {
        if(select === false) {
            setSelect(true)
            setSelectedId(id)
            return
        }
        setSelect(false)
        setSelectedId("")
    }


    const residentCard = resident_cards.map((c) => {

        const date = new Date(c.move_in_date)
        const newDate = date.toLocaleDateString('en-US');
        
        return <div class="mb-4 mt-4">
            <button onClick={(event) => handleSelect(c.id)} class="flex justify-between w-full font-bold bg-black text-white border-black border-2 p-4 rounded-3xl">
                
                <h1>APT #{c.apartment}</h1>
                <h1>{c.name}</h1>
                <h1>{newDate}</h1>
                <h1>80%</h1>
                {select === true & selectedId === c.id ? <h1>Close</h1> : <h1>Details</h1>}

            </button>

            {select === true & selectedId === c.id ? <div>

                <section class="mb-8 mt-8">
            <div class="w-3/4 m-auto">
            


            <div class="rounded-lg mt-8 bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <div class="flex justify-between">
                
                
                
                <h1 class="text-black text-3xl font-bold">{c.name}</h1>
                    <button class="text-white bg-black p-2 rounded-xl mb-2" onClick={handleSelect}>Close</button>
                    </div>
                            <h1 class="font-bold text-red-600 mb-2"></h1>
                            <form action="" class="space-y-4">

                            <div class="grid justify-start text-left mt-4">
                                    <h1 class="font-bold text-xl">Leasing Agent Tasks:</h1>
                                    <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5" onClick={handleApprovalDocsSent} /><h1>Reservation Agreement & Approval Letter Sent?</h1></div>
                                    <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5" onClick={handleLeaseSent} /><h1>Lease Sent?</h1></div>
                                </div>

                                <hr></hr>

                                <div class="grid justify-start text-left">
                                    <h1 class="font-bold text-xl">Future Resident Tasks:</h1>
                                    <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5" onClick={handleElectricSetUp} /><h1>Electric set-up?</h1></div>
                                    <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5" onClick={handleInsuranceSetUp} /><h1>Renter's Insurance set-up?</h1></div>
                                    <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5" onClick={handleLeaseSigned} /><h1>Lease signed?</h1></div>
                                    <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5" onClick={handlePaymentMade} /><h1>Paid move-in funds?</h1></div>
                                </div>

                                <div>
                                <h1 class="text-left font-bold text-xl">Notes:</h1>
                                    <div class="text-left mb-2">{c.notes}</div>
                                    <label class="sr-only" for="message" >Account Notes</label>

                                    <textarea
                                        class="w-full rounded-lg border-black border-1 p-3 text-sm"
                                        placeholder="Account Notes"
                                        rows="8"
                                        id="message"
                                        onChange={handleNotes}
                                    ></textarea>
                                </div>


                                <div class="flex justify-between">
                                <button
                                        type="submit"
                                        class="inline-block w-full rounded-lg border-black border-2 bg-white px-5 py-3 font-medium text-black sm:w-auto"
                                        
                                    >
                                        Delete Resident
                                    </button>
                                <button
                                        type="submit"
                                        class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                        
                                    >
                                        Update notes
                                    </button>
                                </div>
                                <div class="flex mt-6 justify-center"><input type="checkbox" class="mr-2 w-5 h-5" onClick={handleApprovalDocsSent} /><h1>Moved-in?</h1></div>

                                <div class="mt-2">
        
                                </div>
                            </form>
                        </div>


            </div>
        </section>
                
            </div> : ""}
        </div>

     
      
    
    
    
    })

    useEffect(() => {
        cards()
    }, [])



    return (
        <section class="mb-12 mt-8">
            <div class="w-3/4 m-auto">
                <h1 class="text-black text-5xl font-bold">Future Move-in's</h1>
                

                <Link to="/Resident_form">
                    <button
                        class="rounded-md bg-black border-black text-white border-2 px-5 py-2.5 text-lg font-medium text-black mt-4"
                    >
                        + Add New Resident
                    </button>
                </Link>

        <div class="mt-8">
                {residentCard}
               </div>
               
            </div>
        </section>
    )
}

export default Upcoming_moves; 