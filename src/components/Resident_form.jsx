import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createResident_Card, getAllResident_Cards } from "../api"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Resident_form = ({ user }) => {
    const navigate = useNavigate();

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

    const [message, setMessage] = useState('')

    const userId = user.id

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

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (name === "") {
            setMessage("Please fill in the required fields")
            return
        }
        if (apartment === "") {
            setMessage("Please fill in the required fields")
            return
        }
        if (rent === "") {
            setMessage("Please fill in the required fields")
            return
        }
        if (moveDate === '') {
            setMessage("Please fill in the required fields")
            return
        }
        if (leaseTerm === "") {
            setMessage("Please fill in the required fields")
            return
        }
        if (leaseTerm === "") {
            setMessage("Please fill in the required fields")
            return
        }
        console.log({ name, apartment, rent, moveDate, leaseTerm, approvalDocsSent, leaseSent, electricSetUp, insuranceSetUp, leaseSigned, paymentMade, notes, movedIn })
        await createResident_Card(
            name,
            apartment,
            moveDate,
            rent,
            leaseTerm,
            approvalDocsSent,
            leaseSent,
            electricSetUp,
            insuranceSetUp,
            leaseSigned,
            paymentMade,
            notes,
            movedIn,
            userId)
        navigate("/Upcoming_moves")

    }

    return (
        <section class="mb-8 mt-8">
            <div class="w-3/4 m-auto">
                <h1 class="text-black text-5xl font-bold">Add a New Resident</h1>
            </div>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
            <script src="../path/to/flowbite/dist/datepicker.js"></script>


            <section class="bg-white">
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div class="lg:m-0 sm:m-auto lg:col-span-2 lg:py-12">
                            <p class="max-w-xl text-lg font-bold">
                                Congrats on your new lease! 🎊
                            </p>
                            <p class="max-w-xl text-lg mt-8 ">
                                Let's make sure we are all prepared for move-in. Please fill out the form to begin tracking move-in progress.
                            </p>
                            <p class="max-w-xl text-lg mt-8 font-bold">
                                Then go get more leases. 😎
                            </p>


                        </div>

                        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <h1 class="font-bold text-red-600 mb-2">{message}</h1>
                            <form action="" class="space-y-4">
                                <div>
                                    <label class="sr-only" for="name">Name</label>
                                    <input
                                        class="w-full rounded-lg border-black border-1 p-3 text-sm"
                                        placeholder="Name(s)"
                                        type="text"
                                        id="name"
                                        onChange={handleName}
                                    />
                                </div>

                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label class="sr-only" >Apartment #</label>
                                        <input
                                            class="w-full rounded-lg border-black border-1  p-3 text-sm"
                                            placeholder="Apartment #"
                                            type="text"
                                            id="apartment"
                                            onChange={handleApartment}
                                        />
                                    </div>

                                    <div class="flex content-center">
                                        <div class="flex pt-1 pr-1 text-4xl">$</div><label class="sr-only" for="phone">Rent</label>
                                        <input
                                            class="w-full rounded-lg border-black border-1  p-3 text-sm"
                                            placeholder="Monthly Rent"
                                            type="text"
                                            id="rent"
                                            onChange={handleRent}
                                        />
                                    </div>






                                    <div>
                                        <label class="sr-only" >Lease Term</label>
                                        <input
                                            class="w-full rounded-lg border-black border-1  p-3 text-sm"
                                            placeholder="Lease Term (# of Months)"
                                            type="text"
                                            id="leaseterm"
                                            onChange={handleLeaseTerm}
                                        />
                                    </div>

                                </div>

                                <div>
                                    <h1 class="font-bold mb-2 text-3xl">Move-in Date</h1>
                                    <DatePicker inline onChange={(date) => setMoveDate(date)} />
                                </div>


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
                                    <label class="sr-only" for="message" >Account Notes</label>

                                    <textarea
                                        class="w-full rounded-lg border-black border-1 p-3 text-sm"
                                        placeholder="Account Notes"
                                        rows="8"
                                        id="message"
                                        onChange={handleNotes}
                                    ></textarea>
                                </div>

                                <div class="mt-4">
                                    <button
                                        type="submit"
                                        class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                        onClick={handleSubmit}
                                    >
                                        Add Future Resident
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>






        </section>
    )
}

export default Resident_form; 