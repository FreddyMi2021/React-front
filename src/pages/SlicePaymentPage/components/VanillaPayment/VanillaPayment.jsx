import React from 'react'
import InfosPayment from './InfosPayment/InfosPayment'

export const VanillaPayment = (props) => {
  return(
    <>
      <InfosPayment ticketId={ props.ticketId } price={props.price} setPriceInEuro={props.setPriceInEuro} cancelPaymentMode={props.cancelPaymentMode} />
    </>
  )
}