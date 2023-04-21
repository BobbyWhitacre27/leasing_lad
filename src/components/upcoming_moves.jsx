import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, Switch, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getAllResident_Cards, deleteResident_Card } from '../api';

const Upcoming_moves = ({ user }) => {
    const [resident_cards, setResident_Cards] = useState([]);
    const [select, setSelect] = useState(false);
    const [selectedId, setSelectedId] = useState('')

    const [approvalDocsSent, setApprovalDocsSent] = useState(false);
    const [leaseSent, setLeaseSent] = useState(false);
    const [electricSetUp, setElectricSetUp] = useState(false);
    const [insuranceSetUp, setInsuranceSetUp] = useState(false);
    const [leaseSigned, setLeaseSigned] = useState(false);
    const [paymentMade, setPaymentMade] = useState(false);
    const [notes, setNotes] = useState('');
    const [movedIn, setMovedIn] = useState(false);

    const [isDeleteCard, setIsDeleteCard] = useState(false);




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
    console.log({ resident_cards })


    const handleSelect = (id) => {
        if (select === false) {
            setSelect(true)
            setSelectedId(id)
            return
        }
        setSelect(false)
        setSelectedId("")
    }

    const handleDeleteResidentCard = async (id) => {
        setIsDeleteCard(true)
        await deleteResident_Card(id)
        setIsDeleteCard(false)
    }


    const userFilter = resident_cards.filter((u) => user.id === u.user_id)

    const notMovedInFilter = userFilter.filter((u) => u.moved_in === false)

    const sortByDate = notMovedInFilter.sort((a, b) => new Date(a.move_in_date) - new Date(b.move_in_date))

    const residentCard = sortByDate.map((c) => {

        const date = new Date(c.move_in_date)
        const newDate = date.toLocaleDateString('en-US');

        const editForm = (<div>
            <section class="mb-8 mt-8">
                <div class="w-3/4 m-auto">
                    <div class="rounded-lg mt-8 bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <div class="flexn">
                            <div>
                                <h1 class="flex text-black text-3xl font-bold">{c.name}</h1>
                                <h1 class="flex text-black text-md font-bold">APT #{c.apartment}</h1>
                                <h1 class="flex text-black text-md font-bold">Move-in: {newDate}</h1>
                                <h1 class="flex text-black text-md font-bold">Rent: ${c.rent}</h1>
                                <h1 class="flex text-black text-md font-bold">Lease Term: {c.lease_term} Months</h1>
                            </div>

                        </div>
                        <h1 class="font-bold text-red-600 mb-2"></h1>
                        <div action="" class="space-y-4">

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

                                    class="inline-block w-full rounded-lg border-black border-2 bg-white px-5 py-3 font-medium text-black sm:w-auto"
                                    onClick={(event) => handleDeleteResidentCard(c.id)}
                                >
                                    Delete Resident
                                </button>
                                <button

                                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"

                                >
                                    Update notes
                                </button>
                            </div>
                            <div class="flex mt-6 justify-center"><input type="checkbox" class="mr-2 w-5 h-5" onClick={handleApprovalDocsSent} /><h1>Moved-in?</h1></div>

                            <div class="mt-2">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)



        const residentCards = (<div class="mb-4 mt-4">
            <div class="overflow-x-auto border-2 rounded-xl">
                <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
                    <tbody class=" divide-y divide-gray-200">
                        <tr class="grid grid-cols-4 pt-8 text-xl pb-2">
                            <td class="whitespace-nowrap px-4 font-bold text-gray-700">{c.name}</td>
                            <td class="whitespace-nowrap pb-4 px-4 text-gray-900">
                                {c.apartment}
                            </td>
                            <td class="whitespace-nowrap px-4  text-gray-700">{newDate}</td>
                            <td class="whitespace-nowrap px-4 ">
                                {select === true & selectedId === c.id ?
                                    <button

                                        class="inline-block rounded bg-black px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
                                        onClick={(event) => handleSelect(c.id)}
                                    >
                                        Close
                                    </button> :
                                    <button

                                        class="inline-block rounded bg-black px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
                                        onClick={(event) => handleSelect(c.id)}
                                    >
                                        View
                                    </button>
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
                {select === true & selectedId === c.id ? editForm : ""}
            </div>

        </div>)



        return residentCards

    })



    useEffect(() => {
        cards()
    }, [isDeleteCard])



    return (
        <section class="mb-24 mt-8">
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
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
                            <tbody class="border-b-4 border-black">
                                <tr class="grid grid-cols-4 text-2xl font-bold">
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Name</td>
                                    <td class="whitespace-nowrap px-4 py-2  text-black">Apartment</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Move-in</td>
                                    <td class="whitespace-nowrap px-4 py-2">Select</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                    {residentCard}
                </div>

            </div>
        </section>
    )
}

export default Upcoming_moves; 