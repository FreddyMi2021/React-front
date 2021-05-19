import React, { useEffect, useState } from "react";

// import { BsLayoutWtf } from "react-icons/bs";
import { BiEuro, BiStore } from "react-icons/bi";
// import Axios from "axios";
import robot from "./robotCode.png"

const HeaderPayment = (props) => {
  const [priceInEuro, setPriceInEuro ] = useState(null)

  useEffect(() => {
    setPriceInEuro(450)
    props.setPriceInEuro(450)
  })

  // const getEuroCurrency = () => {
  //   Axios.get("https://v6.exchangerate-api.com/v6/bbbf04797a70291a94a097d4/latest/EUR")
  //   .then(res => {
  //     if(priceInEuro === null) {
  //       if(res.data.conversion_rates){
  //         setPriceInEuro(Math.ceil(Math.ceil(props.price) / Math.ceil(res.data.conversion_rates.MGA) ))
  //         props.setPriceInEuro(Math.ceil(Math.ceil(props.price) / Math.ceil(res.data.conversion_rates.MGA) ))
  //       } else {
  //         setPriceInEuro(Math.ceil(Math.ceil(props.price) / Math.ceil(4500) ))
  //         props.setPriceInEuro(Math.ceil(Math.ceil(props.price) / Math.ceil(4500) ))
  //       }
  //     }
  //   })
  // }
  return(
    <>
    <div className="w-full h-full md:pt-12 xl:pt-14  px-8">
      <div className="w-full pt-8 md:pt-0">
          <div className="w-full">
              <div className="w-full md:flex flex-row text-gray-700">
                <div className="w-full md:w-2/3 pb-2 md:pb-0">
                  <span className="text-xl mb-4 font-bold block text-green-700">
                    <BiStore className="bg-white rounded-full shadow p-2 inline-block" size="3em" />&nbsp; Fighter program
                  </span>
                  <span className="text-base font-bold block">Standard payment</span>
                  <span className="inline text-lg font-bold mt-4 inline-block mb-2">Amount:&nbsp; &nbsp;</span>
                  <p className="inline text-3xl font-bold text-gray-500 mb-6">
                    {/* <span className="text-black">{ props.price ? props.price : "0" } Ar</span>&nbsp; */}
                    {/* <span className="text-base">ou</span>&nbsp; */}
                    <span className="text-black">{ priceInEuro !== null ? 475 : "0" } <BiEuro className="inline-block mb-1" /></span>
                  </p>
                </div>
                <div className="relative text-right w-full md:w-1/3 pb-12 md:pb-0">
                  <button className="text-center w-full md:w-32 py-2 rounded-md font-semibold text-white bg-pink-700 ring-4 ring-pink-300 float-right" onClick={ () => props.cancelPaymentMode() }>
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
    
    </>
  )
}

export default HeaderPayment;