import React, { useState } from 'react'
import { BiCreditCard } from "react-icons/bi";
import HeaderPayment from '../HeaderPayment/HeaderPayment';

import StripePayment from '../StripePayment/StripePayment';
import { VanillaPayment } from '../VanillaPayment/VanillaPayment';
import VanillaPay from "./logoVanilla.png"

const clientInfos = localStorage.getItem("clientInfos")

export default function StackPaymentComponent(props) {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full shadow-md px-4">
        <ul
            className="flex mb-0 list-none flex-wrap flex-row"
            role="tablist"
          >
          <li className="-mb-px last:mr-0 flex-wrap text-center">
            <a
              className={
                'text-xs font-bold m-auto text-center justify-center uppercase px-5 py-2 block leading-normal' +
                (openTab === 1
                  ? 'text-gray-400 border-b-4 border-gray-300'
                  : 'text-gray-500')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle='tab'
              href='#link1'
              role='tablist'
            >
                <span className="flex justify-center items-center text-center">
                <BiCreditCard
                  className='flex justify-center items-center text-center text-gray-500'
                  style={{ fontSize: '2rem', margin: 0 }}
                />
                </span>
              
              <span className='block text-gray-500'>Payment by card</span>
            </a>
          </li>

          {
            JSON.parse(clientInfos).currency === "MGA" ? (
              <li className="-mb-px last:mr-0 flex-wrap text-center">
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-2 block leading-normal' +
                    (openTab === 2
                      ? 'text-gray-400 border-b-4 border-gray-300'
                      : 'text-gray-500')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle='tab'
                  href='#link1'
                  role='tablist'
                >
                  <img src={ VanillaPay } className="inline-block" style={{ height: '31px', margin: 0 }} />
                  <span className='block text-gray-500'>Vanilla Pay payment</span>
                </a>
              </li>
            ) : (
              <></>
            )
          }

        </ul>
      </div>
      <div className="relative flex flex-col min-w-0 h-screen md:h-auto overflow-y-scroll md:overflow-hidden break-words bg-white w-full">
        <div className="flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
              <div className="block pb-32 md:pb-0 md:flex flex-row">
                <div className="w-full md:w-1/2">
                  <HeaderPayment price={props.price} setPriceInEuro={props.setPriceInEuro} cancelPaymentMode={props.cancelPaymentMode} />
                </div>
                <div className="w-full md:w-1/2">
                  <StripePayment price={ 475 } updatePaymentTicket={props.updatePaymentTicket} />
                </div>
              </div>
            </div>
            <div className={openTab === 2 ? 'block' : 'hidden'} id='link1'>
              <div className="w-full h-full overflow-y-auto md:overflow-hidden pb-64 md:pb-0 lg:w-1/2">
                <VanillaPayment ticketId={ props.ticketId } price={props.price} setPriceInEuro={props.setPriceInEuro} cancelPaymentMode={props.cancelPaymentMode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}