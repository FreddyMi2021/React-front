import { useMutation } from '@apollo/client';
import React from 'react';
import { useHistory } from 'react-router';
import { CREATE_PAYMENT } from '../../../../services/mutations/PaymentMutations';
import { CREATE_PAYMENT_TICKET } from '../../../../services/mutations/PaymentTicketMutations';
import './Style/paiement.css'

const clientInfos = localStorage.getItem("clientInfos")

export default function PaiementOptionCardStandard(props) {
  let history = useHistory();
  const [
    initPayment,
    {
      loading: loadingPayment,
      error: errorPayment,
      data: dataPayment
    }
  ] = useMutation(
    CREATE_PAYMENT,
    {
      onCompleted: (data) => {
        let dateNow = new Date()
        dateNow.setDate(dateNow.getDate()+ 30)
        let deadlineDate = dateNow
        initPaymentTicket({
          variables: {
            sliceType: "one_slice_direct",
            deadline: JSON.stringify(deadlineDate),
            isPaid: false,
            paymentType: "",
            paymentMethod: "",
            amount: 1900000.0,
            productId: parseInt(props.productId),
            paymentId: parseInt(data.createPayment.payment.id)
          }
        })
      }
    }
  );

  const [
    initPaymentTicket,
    {
      loading: loadingPaymentTicket,
      error: errorPaymentTicket,
      data: dataPaymentTicket
    }
  ] = useMutation(
    CREATE_PAYMENT_TICKET,
    {
      onCompleted: (data) => {
        window.location.href = "/payment/product/" + props.productId + "/direct_mode/" + data.createPaymentTicket.paymentTicket.payment.id
      }
    }
  );
  const handleClick = () => {
    initPayment({
      variables: {
        mode: "direct_mode",
        studentId: props.studentId,
        sliceCount: 1
      }
    })
  }

  const setPrice = (currency) => {
    switch (currency) {
      case "MGA":
        return "1.900.000 MGA"
    
      default:
        return "475 EUR"
    }
  }

  return (
    <>
      <div>
        <div className="md:flex">
          <div className="paiementMode-1 w-full md:w-96 p-4 md:p-8 shadow-lg my-4 md:my-0">
            <div className="text-center w-auto ">
              <p className="text-left pb-8 text-center text-3xl text-white font-bold">
                Standard
                            </p>
            </div>
            <hr className="w-1/2 m-auto borer-2" />
            <div className="pb-8">
              <p className="text-center text-white font-normal p-2 mt-8">
                1 time payment (-5%)
                            </p>
            </div>
            <div className="w-full border border-white rounded-lg px-4 py-8">
              <p className="text-left pb-2 text-center text-xl md:text-4xl text-white font-bold">
              { setPrice(JSON.parse(clientInfos).currency) }
                            </p>
              <p className="text-center text-white font-normal">
                12 months access
                            </p>
              <div className="text-center mt-8">
                <button
                  className="bg-gray-50 w-full m-auto px-6 text-green-400 text-lg font-bold py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                  onClick={() => handleClick()}
                >
                  Select options
                                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}