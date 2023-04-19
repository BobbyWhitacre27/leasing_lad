import React, { useState, useEffect }  from "react";

const Resident_form = () => {


    return (
        <section class="mb-8 mt-8">
            <div class="w-3/4 m-auto">
            <h1 class="text-black text-5xl font-bold">Add a New Resident</h1>
            </div>



<section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <p class="max-w-xl text-lg">
       Congrats on your new lease! 🎊
        </p>
        <p class="max-w-xl text-lg mt-8">
       Let's make sure we are all prepared for move-in. Please fill out the form to begin tracking theirprogress.
        </p>
        <p class="max-w-xl text-lg mt-8">
       Then go get more leases. 😎
        </p>


      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-black border-1 p-3 text-sm"
              placeholder="Name(s)"
              type="text"
              id="name"
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
              />
            </div>

            <div class="flex content-center">
              <div class="flex pt-1 pr-1 text-4xl">$</div><label class="sr-only" for="phone">Rent</label>
              <input
                class="w-full rounded-lg border-black border-1  p-3 text-sm"
                placeholder="Monthly Rent"
                type="text"
                id="rent"
              />
            </div>
            <div>
              <label class="sr-only" >Lease Term</label>
              <input
                class="w-full rounded-lg border-black border-1  p-3 text-sm"
                placeholder="Lease Term (# of Months)"
                type="text"
                id="leaseterm"
              />
            </div>
            
          </div>

          <div class="grid justify-start text-left">
            <h1 class="font-bold">Leasing Agent Tasks:</h1>
            <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5"  /><h1>Reservation Agreement & Approval Letter Sent?</h1></div>
            <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5"  /><h1>Lease Sent?</h1></div>
          </div>

          <hr></hr>

          <div class="grid justify-start text-left">
            <h1 class="font-bold">Future Resident Tasks:</h1>
            <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5"  /><h1>Electric set-up?</h1></div>
            <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5"  /><h1>Renter's Insurance set-up?</h1></div>
            <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5"  /><h1>Lease signed?</h1></div>
            <div class="flex mt-2"><input type="checkbox" class="mr-2 w-5 h-5"  /><h1>Paid move-in funds?</h1></div>
          </div>

          <div>
            <label class="sr-only" for="message">Account Notes</label>

            <textarea
              class="w-full rounded-lg border-black border-1 p-3 text-sm"
              placeholder="Account Notes"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
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