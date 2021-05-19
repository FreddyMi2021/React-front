import React, { useEffect, useState } from "react";

import { BiStore } from "react-icons/bi";
import Axios from "axios";
import robot from "./robotCode.png"
import baseUrl, { decryptUser } from "../../../../../services/BaseUrl";

const currentRegister = localStorage.getItem("currentRegister")
const currentUser = localStorage.getItem("currentUser") ? JSON.parse(decryptUser(localStorage.getItem("currentUser"))) : {}

const InfosPayment = (props) => {
  const [ vanillaUrl, setVanillaUrl ] = useState(null)

  useEffect(() => {
    if(vanillaUrl === null) {
      getToken()
    }
  })

  const getToken = () => {
    Axios.get(baseUrl() + "/get_token_vanilla_pay")
    .then((res) => {
      if(res.data.access_token){
        initVanillaPay(res.data.access_token)
      }
    })
  }

  const initVanillaPay = (access_token) => {
    let data = {}
    if(currentRegister){
      data = {
        site_url: 'http://school.sayna.io',
        unitemonetaire: "Ar",
        adresseip: "127.0.0.1",
        ticket_id: props.ticketId + '',
        amount: props.price,
        name: JSON.parse(currentRegister).last_name + ' ' + JSON.parse(currentRegister).first_name,
        email: currentUser.data.data.email,
        reference: "STUDENT_" + currentUser.data.data.id,
        access_token: access_token
      }
    } else if(currentUser.data.data.last_name === null) {
      data = {
        site_url: 'http://school.sayna.io',
        unitemonetaire: "Ar",
        adresseip: "127.0.0.1",
        ticket_id: props.ticketId + '',
        amount: props.price,
        name: "UNKNOWN",
        email: currentUser.data.data.email,
        reference: "STUDENT_" + currentUser.data.data.id,
        access_token: access_token
      }
    } 
    else {
      data = {
        site_url: 'http://school.sayna.io',
        unitemonetaire: "Ar",
        adresseip: "127.0.0.1",
        ticket_id: props.ticketId + '',
        amount: props.price,
        name: currentUser.data.data.last_name + ' ' + currentUser.data.data.first_name,
        email: currentUser.data.data.email,
        reference: "STUDENT_" + currentUser.data.data.id,
        access_token: access_token
      }
    }
    Axios.post(baseUrl() + "/init_vanilla_pay", data)
    .then((res) => {
      setVanillaUrl(res.data.vanilla_pay_url)
    })
  } 
  const ariary = new Intl.NumberFormat("de-DE",{
    style: 'currency',
    currency: 'MGA', 
    minimumFractionDigits: 0});
  let price = ariary.format(props.price)
  console.log(typeof(price))
  return(
    <div className="w-full h-full md:pt-12 xl:pt-14  px-8">
      <div className="w-full pt-8 md:pt-0">
            <div className="w-full">
                <div className="w-full  md:flex flex-row text-gray-700">
                  <div className="w-full pb-4 md:w-2/3">
                    <span className="text-xl mb-4 font-bold block text-green-700">
                      <BiStore className="bg-white rounded-full shadow p-2 inline-block" size="3em" />&nbsp; Fighter program
                    </span>
                    <span className="text-base font-bold block">Standard payment</span>
                    <span className="inline text-lg font-bold mt-4 inline-block mb-2">Amount:&nbsp; &nbsp;</span>
                    <p className="inline text-xl lg:text-3xl font-bold text-gray-500 mb-6">
                      <span className="text-black">{ price ? price : "0" }</span>&nbsp;
                    </p>
                  </div>
                  
                  <div className="relative py-4 md:py-0 text-right md:w-1/3">
                    {
                      vanillaUrl === null ? (
                        <button className="text-center w-full md:w-32 py-2 rounded-md font-semibold text-white bg-gray-500 ring-4 ring-gray-300">
                          LOADING ...
                        </button>
                      ) : (
                        <a href={ vanillaUrl } className="text-center lg:mb-4 md:mb-0 w-full md:w-32 py-2 rounded-md font-semibold text-white bg-green-700 ring-4 ring-green-300 inline-block 2xl:mr-4">
                          PAY
                        </a>
                      )
                    }
                    <button className="text-center w-full md:w-32 py-2 rounded-md font-semibold text-white bg-pink-700 ring-4 ring-pink-300 mt-4" onClick={ () => props.cancelPaymentMode() }>
                      CANCEL
                    </button>
                  </div>
                </div>
                <div className="bg-transparent py-2">
                  <div className="w-full bg-green-700 rounded-lg py-8 text-center">
                    <img className="inline-block" src={robot} alt="robotCode" />
                  </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default InfosPayment;