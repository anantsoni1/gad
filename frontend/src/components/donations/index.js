import React, { useState } from "react";
import "./style.css";
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


function Donation() {
  const [amount,setAmount] = useState(50)
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('https://pigameapp.com:8082/api/create-checkout-session?amount='+amount, { method: 'POST' });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }
  return (
    <>
      <div className="home">
        {/* <div className="">
          <Header img={purpleBg} heading="SUPPORT OUR PROGRAMS" />
        </div> */}
        <div className="donation-banner pb-5">
        <div className="row carousel-flex" style={{ paddingTop: "10vh" }}>
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-10 col-10">
                  <div className="card py-5 px-4">
                  <p className="text-center h2 text-blue mt-4">SUPPORT OUR PROGRAM</p>
                    <i class="fas fa-coins fa-5x text-blue text-center"></i>
                    <p className="text-center h2 text-blue mt-4">Give Now</p>
                    <p className="text-center mt-2">
                      Take action by making a tax-deductible donation to
                      school children
                    </p>
                    <p className="text-center mt-5 h5 text-blue">
                      <label className="mb-3">Enter the Amount you wish to donate (CAD)</label>
                      <input placeholder="Amount" type="Number" onChange={(e)=>{
                        setAmount(e.target.value);
                      }} value={amount}></input>
                    </p>
                    <button
                      type="submit"
                      className="btn-contact text-white btn px-5 mt-2 btn-donate"
                      onClick={handleClick}
                    >
                      Donate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;
