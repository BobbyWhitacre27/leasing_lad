import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, Switch, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {
    getAllResident_Cards,
    getResidentCardsById,
    deleteResident_Card,
    updateApprovalDocs,
    updateSentLease,
    updateReceivedElectric,
    updateReceivedInsurance,
    updateReceivedSignedLease,
    updateReceivedPayment,
    updateNotes,
    updateMovedIn

} from '../api/index';

const Upcoming_moves = ({ user }) => {
    const [resident_cards, setResident_Cards] = useState([]);
    const [resident_cardsById, setResident_CardsById] = useState([]);
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
    const [isUpdateNotes, setIsUpdateNotes] = useState(false);






    const handleApprovalDocsSent = async (id) => {
        if (approvalDocsSent === false) {
            await updateApprovalDocs(id, true)
            return setApprovalDocsSent(true)
        }
        await updateApprovalDocs(id, false)
        setApprovalDocsSent(false)
    }

    const handleLeaseSent = async (id) => {
        if (leaseSent === false) {
            await updateSentLease(id, true)
            return setLeaseSent(true)
        }
        await updateSentLease(false)
        setLeaseSent(false)
    }

    const handleElectricSetUp = async (id) => {
        if (electricSetUp === false) {
            await updateReceivedElectric(id, true)
            return setElectricSetUp(true)
        }
        await updateReceivedElectric(id, false)
        setElectricSetUp(false)
    }

    const handleInsuranceSetUp = async (id) => {
        if (insuranceSetUp === false) {
            await updateReceivedInsurance(id, true)
            return setInsuranceSetUp(true)
        }
        await updateReceivedInsurance(id, false)
        setInsuranceSetUp(false)
    }

    const handleLeaseSigned = async (id) => {
        if (leaseSigned === false) {
            await updateReceivedSignedLease(id, true)
            return setLeaseSigned(true)
        }
        await updateReceivedSignedLease(id, false)
        setLeaseSigned(false)
    }

    const handlePaymentMade = async (id) => {
        if (paymentMade === false) {
            await updateReceivedPayment(id, true)
            return setPaymentMade(true)
        }
        await updateReceivedPayment(id, false)
        setPaymentMade(false)
    }

    const handleNotes = event => {
        setNotes(event.target.value)
    }

    const handleUpdateNotes = async (id, notes) => {
        setIsUpdateNotes(true)
        await updateNotes(id, notes)
        setIsUpdateNotes(false)
    }

    const handleMovedIn = async (id) => {
        alert("🥳 Congratulations on the new move-in!! This resident will be moved to the 'Past Move-in's' page.")
        if (movedIn === false) {
            await updateMovedIn(id, true)
            return setMovedIn(true)
        }
        await updateMovedIn(id, false)
        setMovedIn(false)
    }    

    const cards = async () => {
        const cards = await getAllResident_Cards();
        setResident_Cards(cards)
    }
    console.log({ resident_cards })

    const userId = user.id

    console.log({userId})

    const cardsById = async () => {
        const cards = await getResidentCardsById(userId);
        setResident_CardsById(cards)
    }

    console.log({ resident_cardsById })

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

        const approvalDocs = c.sent_approval_docs;
        const leaseSent = c.sent_lease;
        const electricSetUp = c.received_electric;
        const insuranceSetUp = c.received_insurance;
        const leaseSigned = c.received_signed_lease;
        const paymentMade = c.received_payment;
        const movedIn = c.moved_in;



        const checked = "data:image/png;base64,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"

        // const calclulatePercentComplete = (approvalDocsSent, leaseSent, electricSetUp, insuranceSetUp, leaseSigned, paymentMade) => {
        //     const total = 0
        //     if(approvalDocsSent == "true"){
        //         total += 1
        //     }if(leaseSent == "true"){
        //         total += 1
        //     }if(electricSetUp == "true"){
        //         total += 1
        //     }if(insuranceSetUp == "true"){
        //         total +=1
        //     }if(leaseSigned == "true"){
        //         total +=1
        //     }if(paymentMade == "true"){
        //         total +=1
        //     }
        //     const fraction = total / 6 
        //     const answer = fraction.toFixed(2) + "%"
        //     return answer
        // }


        const editForm = (<div>
            <section class="mb-8 mt-8">
                <div class="w-3/4 m-auto">
                    <div class="rounded-lg mt-8 bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <div class="flexn">
                            <div>
                                <h1 class="flex text-black text-3xl font-bold">{c.name}{ }</h1>
                                <h1 class="flex text-black text-md font-bold">APT #{c.apartment} { }</h1>
                                <h1 class="flex text-black text-md font-bold">Move-in: {newDate}</h1>
                                <h1 class="flex text-black text-md font-bold">Rent: ${c.rent}</h1>
                                <h1 class="flex text-black text-md font-bold">Lease Term: {c.lease_term} Months</h1>

                            </div>

                        </div>
                        <h1 class="font-bold text-red-600 mb-2"></h1>
                        <div action="" class="space-y-4">

                            <div class="grid justify-start text-left mt-4">
                                <h1 class="font-bold text-xl">Leasing Agent Tasks:</h1>
                                <button class="flex h-8 mt-2" onClick={() => handleApprovalDocsSent(c.id)}><div>{approvalDocs === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Reservation Agreement & Approval Letter Sent?</h1></button>
                                <button class="flex h-8 mt-2" onClick={() => handleLeaseSent(c.id)}><div>{leaseSent === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Lease Sent?</h1></button>
                            </div>

                            <hr></hr>

                            <div class="grid justify-start text-left">
                                <h1 class="font-bold text-xl">Future Resident Tasks:</h1>
                                <button class="flex h-8 mt-2" onClick={() => handleElectricSetUp(c.id)}><div>{electricSetUp === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Electric set-up?</h1></button>
                                <button class="flex h-8 mt-2" onClick={() => handleInsuranceSetUp(c.id)}><div>{insuranceSetUp === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Renter's Insurance set-up?</h1></button>
                                <button class="flex h-8 mt-2" onClick={() => handleLeaseSigned(c.id)}><div>{leaseSigned === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Lease signed?</h1></button>
                                <button class="flex h-8 mt-2" onClick={() => handlePaymentMade(c.id)}><div>{paymentMade === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Paid move-in funds?</h1></button>
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


                            <div class="md:flex sm:flex-wrap-reverse justify-between sm:gap-4">
                                <button

                                    class="inline-block w-full rounded-lg border-black border-2 bg-white px-5 py-3 font-medium text-black sm:w-auto"
                                    onClick={(event) => handleDeleteResidentCard(c.id)}
                                >
                                    Delete Resident
                                </button>
                                <button

                                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    onClick={(event) => handleUpdateNotes(c.id, notes)}
                                >
                                    Update notes
                                </button>
                            </div>
                            <button class="px-8 py-3 mt-4 font-bold bg-blue-500 text-3xl text-white hover:bg-blue-400 rounded-lg" onClick={() => handleMovedIn(c.id)}><h1>Move-in Resident</h1></button>

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
                        <tr class="grid grid-cols-4 pt-8 lg:text-xl sm:text-sm  pb-2">
                            <td class="whitespace-nowrap px-4 font-bold text-gray-700">{c.name}</td>
                            <td class="whitespace-nowrap pb-4 px-4 text-gray-900">#{c.apartment}</td>
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
        cardsById()
    }, [isDeleteCard, approvalDocsSent, leaseSent, electricSetUp, insuranceSetUp, leaseSigned, paymentMade, movedIn, isUpdateNotes])



    return (
        <section class="mb-24 mt-8">
            <div class="lg:w-3/4 md:w-3/4 sm:w-[7/8] m-auto">
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
                                <tr class="grid grid-cols-4 lg:text-2xl sm:text-sm font-bold">
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Name</td>
                                    <td class="whitespace-nowrap px-4 py-2  text-black">Apartment</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Move-in</td>
                                    <td class="whitespace-nowrap px-4 py-2 hidden">Select</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                    {notMovedInFilter.length >= 1 ? residentCard : <div class="mt-8 font-bold">None at this time.</div>}
                </div>

            </div>
        </section>
    )
}

export default Upcoming_moves; 