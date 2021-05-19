import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// const currency = localStorage.getItem("currency")
const clientInfos = localStorage.getItem("clientInfos")

function CardChoiceActive() {
  const setPrice = (currency) => {
    switch (currency) {
      case "MGA":
        return "2.000.000 MGA"
    
      default:
        return "500 EUR"
    }
  }
  return (
    <>
      <div
        className=" text-white rounded-lg text-center w-80 mx-2 pb-12"
        style={{ background: '#4FAE76', height: '580px' }}
      >
        <div className="border-b border-white w-max mx-auto pb-4 px-4">
          <div className="text-2xl">
            <h3 className=" pb-4 font-semibold pt-8">Fighter</h3>
          </div>
          <p
            classname="pb-4 font-thin text-xs "
            style={{ lineHeight: '16px', fontSize: '12px' }}
          >
            Self placed <br /> full-time and part-time
          </p>
        </div>
        <h5 className="text-xl font-semibold pt-4">Features</h5>
        <div className="font-medium text-left text-sm ml-4">
          <p className=" pt-4 ml-4">
            <FaCheck className="inline mr-2" /> 80 projects
          </p>
          <p className=" pt-4 ml-4">
            <FaCheck className="inline mr-2" /> Set of online ressources
          </p>
          <p className=" pt-4 ml-4">
            <FaCheck className="inline mr-2" /> Skills to fullstack web
            developpment
          </p>
          <p className=" pt-4 ml-4">
            <FaCheck className="inline mr-2" /> Reviews on demand
          </p>
        </div>
        <div className="rounded-lg border border-white mx-8 pb-8 mt-12 mb-8">
          <div className="md:text-2xl text-xl">
            <h3 className=" pb-4 font-semibold md:pt-4 pt-2">{ setPrice(JSON.parse(clientInfos).currency) }</h3>
          </div>
          <div className="mb-4">
            <p
              classname="pb-2 font-thin text-xs "
              style={{ lineHeight: '16px', fontSize: '12px' }}
            >
              12 months access
            </p>
          </div>
          <Link
            class="bg-white font-bold py-2 px-4 rounded w-44 text-lg"
            style={{ color: '#4FAE76' }}
            to="/choice_payment_mode"
          >
            Payment Options
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardChoiceActive;
