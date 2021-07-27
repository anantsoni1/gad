import * as api from "../api";
import { PAYMENT } from "../constants/index";
import swal from "sweetalert";
import { loadStripe } from '@stripe/stripe-js';
import jwt from "jwt-decode";
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export const AddPayment = (amount) => async (dispatch) => {
    try {
        const stripe = await stripePromise;
        
        // Call your backend to create the Checkout Session
        const response = await api.payment(amount);

        const session = response.data;
        localStorage.setItem("session",session.id);

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            swal({
                text: result.error.message,
                icon: "error",
              });
          }

      dispatch({ type: PAYMENT, response });

    } catch (e) {
      console.log(e);
      swal({
        text: "Something went wrong",
        icon: "error",
      });
    }
};