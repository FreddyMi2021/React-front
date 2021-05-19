import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { AiOutlineLine } from 'react-icons/ai';
import './Style/paiement.css'
import { useMutation } from '@apollo/client';
import { CREATE_PAYMENT } from '../../../../services/mutations/PaymentMutations';
import { CREATE_PAYMENT_TICKET } from '../../../../services/mutations/PaymentTicketMutations';


const clientInfos = localStorage.getItem("clientInfos")
const currency = localStorage.getItem("currency")

export default function PaiementOptionCardMonthly(props) {

  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(2000000 - 600000)
  const [desableUp, setDesableUp] = useState(false)
  const [desableDown, setDesableDown] = useState(true)

  const [
    initPayment
  ] = useMutation(
    CREATE_PAYMENT,
    {
      onCompleted: (data) => {
        let dateNow = new Date()
        dateNow.setDate(dateNow.getDate() + 30)
        let deadlineDate = dateNow
        initPaymentTicket({
          variables: {
            sliceType: "slice_0",
            deadline: JSON.stringify(deadlineDate),
            isPaid: false,
            paymentType: "",
            paymentMethod: "",
            amount: 600000,
            productId: parseInt(props.productId),
            paymentId: parseInt(data.createPayment.payment.id)
          }
        })
      }
    }
  );

  const [
    initPaymentTicket,
  ] = useMutation(
    CREATE_PAYMENT_TICKET,
    {
      onCompleted: (data) => {
        window.location.href = "/payment/product/" + props.productId + "/slice_mode/" + data.createPaymentTicket.paymentTicket.payment.id
      }
    }
  );

  const handleUp = () => {
    let price = 2000000;
    let decount = 600000;
    setCount(count + 1);
    if (count >= 1) {
      setDesableDown(false)
    }
    if (count == 9) {
      setDesableUp(true)
    }
    setTotal((price - decount) / (count + 1));
  }

  const handleDown = () => {
    let price = 2000000;
    let decount = 600000;
    setCount(count - 1);
    if (count <= 2) {
      setDesableDown(true)
    }
    if (count <= 10) {
      setDesableUp(false)
    }
    setTotal((price - decount) / (count - 1));
  }

  const handleClick = () => {
    initPayment({
      variables: {
        mode: "slice_mode",
        studentId: props.studentId,
        sliceCount: count
      }
    })
  }

  const setPrice = (cur) => {
    switch (cur) {
      case "MGA":
        return "2.000.000 MGA"
    
      default:
        return "500 EUR"
    }
  }

  const setPriceAccount = (cur) => {
    switch (cur) {
      case "MGA":
        return "600.000 MGA"
    
      default:
        return "150 EUR"
    }
  }

  const setPriceSlice = (ariary, cur) => {
    switch (cur) {
      case "MGA":
        return Math.round(ariary) + " MGA"
    
      default:
        console.log(JSON.parse(currency).conversion_rates.MGA)
        return Math.ceil( ( Math.ceil(ariary) * 500 ) / Math.ceil(2000000) ) + " EUR"
    }
  }


  return (
    <>
      <div>
        <div className="md:flex">
          <div className="paiementMode-1 w-full md:w-96 p-4 md:p-8 shadow-lg">
            <div className="text-center w-auto ">
              <p className="text-left pb-8 text-center text-3xl text-white font-bold">
                Monthly
              </p>
            </div>
            <hr className="w-1/2 m-auto borer-2" />
            <div className="pb-4">
              <p className="text-center text-white font-normal p-2 mt-8">
                School fees ({ setPriceAccount(JSON.parse(clientInfos).currency) })
                            </p>
              <p className="text-center text-white font-normal">
                + monthly bank debit
               </p>
            </div>
            <div className="w-full border border-white rounded-lg px-4 py-8">
              <p className="text-center pb-8 text-xl md:text-4xl text-white font-bold">
              { setPrice(JSON.parse(clientInfos).currency) }
                            </p>
              <p className="text-left text-2xl text-white font-bold">
              { setPriceAccount(JSON.parse(clientInfos).currency) }
                            </p>
              <div className="flex text-center mt-2">
                <button
                  className="btnAdd p-2 outline-none focus:outline-none"
                  id="btnUp"
                  disabled={desableUp}
                  onClick={handleUp}
                >
                  <MdAdd className="text-gray-50 text-lg md:text-4xl" />
                </button>

                <div className="inputReagister px-2 w-full rounded-md flex">

                  <input
                    className=" w-1/6 rounded-md py-2 text-gray-500 font-semibold outline-none focus:outline-none"
                    type="text"
                    placeholder="Select number"
                    value={count + ' x '}
                  />
                  <span className="input flex justify-end items-center text-gray-400 py-2 hover:text-grey-darkest">
                    <p className="text-blue-500 text-xs font-bold">{ setPriceSlice(total, JSON.parse(clientInfos).currency) }</p>
                  </span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="input flex justify-end items-center text-gray-400 py-2 hover:text-grey-darkest">
                    <p className="text-green-700 text-sm font-bold">{count > 1 ? 'Months' : 'Month'}</p>
                  </span>
                </div>
                <button
                  className="btnDecount p-2 outline-none focus:outline-none"
                  id="btnDown"
                  disabled={desableDown}
                  onClick={handleDown}
                >
                  <AiOutlineLine className="text-gray-50 text-lg md:text-4xl" />
                </button>
              </div>
              <div>
                <p className="text-center mt-8 text-white font-normal">
                  12 months access
                                </p>
                <div className="text-center mt-4">
                  <button
                    className="bg-gray-50 w-full m-auto px-6 text-green-400 text-lg font-bold py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                    onClick={ () => handleClick() }
                  >
                    Select options
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}