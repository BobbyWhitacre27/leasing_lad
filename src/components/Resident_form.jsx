import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createResident_Card, getAllResident_Cards } from "../api/index.js"
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
        setLeaseSigned(false)
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

    const checked = "data:image/png;base64,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"

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
                            <div action="" class="space-y-4">
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
                                    <button class="flex h-8 mt-4" onClick={() => handleApprovalDocsSent()}><div>{approvalDocsSent === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Reservation Agreement & Approval Letter Sent?</h1></button>
                                    <button class="flex h-8 mt-2" onClick={() => handleLeaseSent()}><div>{leaseSent === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Lease Sent?</h1></button>

                                </div>

                                <hr></hr>

                                <div class="grid justify-start text-left">
                                    <h1 class="font-bold text-xl">Future Resident Tasks:</h1>
                                    <button class="flex h-8 mt-4" onClick={() => handleElectricSetUp()}><div>{electricSetUp === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Electric set-up?</h1></button>
                                    <button class="flex h-8 mt-2" onClick={() => handleInsuranceSetUp()}><div>{insuranceSetUp === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Renter's Insurance set-up?</h1></button>
                                    <button class="flex h-8 mt-2" onClick={() => handleLeaseSigned()}><div>{leaseSigned === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Lease signed?</h1></button>
                                    <button class="flex h-8 mt-2" onClick={() => handlePaymentMade()}><div>{paymentMade === false ? "" : <img class="h-5 pr-2" src={checked} />}</div><h1>Paid move-in funds?</h1></button>
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

                                <div class="md:flex lg:flex sm:flex-wrap justify-between gap-4 mt-4">

                                    <Link to="/Upcoming_moves">
                                        <button
                                            type="submit"
                                            class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto mt-2"
                                        >
                                            Cancel
                                        </button>
                                    </Link>
                                    <button
                                        type="submit"
                                        class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto mt-2"
                                        onClick={handleSubmit}
                                    >
                                        Add Future Resident
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </section>
    )
}

export default Resident_form; 