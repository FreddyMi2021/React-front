import React, {useEffect, useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe}  from '@stripe/react-stripe-js';
import { FaUserTie } from "react-icons/fa";
import {AiTwotoneMail, AiFillPhone} from 'react-icons/ai';
import axios from "axios";
import baseUrl from "../../../../services/BaseUrl";

import './styles/card-detailed.css';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#7795f8',
      color: '#000',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#525252',
      },
      '::placeholder': {
        color: '#525252',
      },
    },
    invalid: {
      iconColor: '#B91C1C',
      color: '#B91C1C',
    },
  },
};

const CardField = ({onChange}) => (
  <div className="inputReagister px-2 w-full flex">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow block">
    <legend htmlFor={id} className="text-gray-500 font-semibold">
      {label}
    </legend>
    <div className="w-full">
        <input
          className="input w-full pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
        />
    </div>
    
  </div>
);

const SubmitButton = ({processing, error, children, disabled}) => (
  <button
    className={`SubmitButton ${error ? 'SubmitButton--error' : ''}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </button>
);

const ErrorMessage = ({children}) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6771.5e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

const ResetButton = ({onClick}) => (
  <button type="button" className="ResetButton" onClick={onClick}>
    <svg width="32px" height="32px" viewBox="0 0 32 32">
      <path
        fill="#FFF"
        d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      />
    </svg>
  </button>
);

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: '',
    phone: '',
    name: '',
  });

  useEffect(() => {
    if(paymentMethod) {
      pay()
    }
  })

  const pay = () => {
    const pm = paymentMethod
    setPaymentMethod(null)
    axios.post(baseUrl() + "/pay_by_stripe", {
      pm_id: pm.id,
      price: props.price
    })
    .then(function (response) {
      props.updatePaymentTicket("stripe", pm.id)
      setPaymentMethod(null)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement('card').focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: '',
      phone: '',
      name: '',
    });
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle" role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod: {paymentMethod.id}
      </div>
      {/* <ResetButton onClick={reset} /> */}
    </div>
  ) : (
    <form className="Form w-full" onSubmit={handleSubmit}>
      <div className="w-full h-auto block space-y-4 p-4">
          <div className="inputReagister w-full flex">
            <span className="rounded-l-lg bg-white flex justify-end items-center p-2 hover:text-grey-darkest">
              <FaUserTie className="text-blue-700 opacity-70" size="1.5em" />
            </span>
            <input
              className="inputSignup placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
              id="name"
              type="text"
              placeholder="Jane Doe"
              required
              autoComplete="name"
              value={billingDetails.name}
              onChange={(e) => {
                setBillingDetails({...billingDetails, name: e.target.value});
              }}
            />
          </div>
          <div className="inputReagister w-full flex">
            <span className="bg-white rounded-l-lg flex justify-end items-center p-2 hover:text-grey-darkest">
              <AiTwotoneMail className="text-blue-700 opacity-70" size="1.5em" />
            </span>
            <input
              className="inputSignup placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
              id="email"
              type="email"
              placeholder="janedoe@gmail.com"
              required
              autoComplete="email"
              value={billingDetails.email}
              onChange={(e) => {
                setBillingDetails({...billingDetails, email: e.target.value});
              }}
            />
          </div>
          <div className="inputReagister w-full flex">
            <span className="rounded-l-lg bg-white flex justify-end items-center p-2 hover:text-grey-darkest">
              <AiFillPhone className="text-blue-700 opacity-70" size="1.5em" />
            </span>
            <input
              className="inputSignup placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
              id="phone"
              type="tel"
              placeholder="(941) 555-0123"
              required
              autoComplete="tel"
              value={billingDetails.phone}
              onChange={(e) => {
                setBillingDetails({...billingDetails, phone: e.target.value});
              }}
            />
          </div>
            <CardField
              onChange={(e) => {
                setError(e.error);
                setCardComplete(e.complete);
              }}
            />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <div className="mt-4">
          <SubmitButton processing={processing} error={error} disabled={!stripe}>
            Pay
          </SubmitButton>
        </div>
      </div>
    </form>
  );
};

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
    },
  ],
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_51IE9ayCkDghPzn5tJygmGyjhQ3NForcTGCD2nO5yMhBZvSMly6O5Hiwd9V1muB26y0dLzRbx9w4OwYF7K9r7yGaO00NAcAYC3X');
const stripePromise = loadStripe('pk_live_51IaQgcJswBEWGW3hE5oQtJvF7goVk1XpLhiEOnD7gb0aqYvUvVAvltpmLhcYlv91YxHaISft2CN6mU34zSWKsVdb00pfHWvcEj');


const StripePayment = (props) => {
  return (
    <div className="w-full transform md:translate-y-16 px-8">
      <h2 className="text-lg font-bold text-gray-700">Pay with card</h2>
      {
        props.price !== null && props.price !== 0 ? (
          <>
            <div className="AppWrapper flex justify-center md:mt-20">
              <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm updatePaymentTicket={ props.updatePaymentTicket } price={ props.price } />
              </Elements>
            </div>
          </>
        ) : (
          <div className="flex justify-center pt-10">
            <button tabIndex="-1" className="focus:outline-none w-32 py-2 rounded-md font-semibold text-white bg-green-500 focus:ring-4 focus:ring-green-300">
              LOADING
            </button>
          </div>
        )
      }
    </div>
  );
};

export default StripePayment;