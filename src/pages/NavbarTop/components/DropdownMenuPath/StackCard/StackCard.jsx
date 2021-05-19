import React from "react";

import { BiEuro, BiAlarmOff, BiAlarm } from "react-icons/bi";
import { Link } from "react-router-dom";
import robot from './robotCode.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { decryptUser } from "../../../../../services/BaseUrl";
const currentUser = decryptUser(localStorage.getItem("currentUser"))

const StackCard = (props) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <>
    {
      currentUser ? (
       
          <Link to={ "/catalog" } onClick={props.closeDropdownMenu}>
            <div className="w-96 p-4 bg-green-50 rounded-lg shadow-lg m-4">
              <div className="rounded-lg h-1/3 overflow-hidden bg-green-700">
                <img className="rounded-lg w-full" src={ robot } alt="logo"/>
              </div>
              <p className="text-left text-2xl text-gray-600 font-bold mt-8">
                Fighter program
                <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-purple-600 text-white text-lg">2000000 &nbsp;Ar</span>
              </p>
              
              <p className="text-left font-light p-2 mt-8">
                <BiAlarmOff size="1.5em" className="inline text-gray-600" />&nbsp;
                <span>{ props.product.durations["20h_w"] }</span> 
              </p>
              <p className="text-left font-light p-2">
                <BiAlarm size="1.5em" className="inline text-gray-600" />&nbsp;
                <span>{ props.product.durations["40h_w"] }</span> 
              </p>
            </div>
            </Link>
      ) : (
          <Link to={ "/" }>
            <div className="w-96 p-4 bg-green-50 rounded-lg shadow-lg m-4">
              <div className="rounded-lg h-1/3 overflow-hidden">
                <img className="rounded-lg w-full" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="logo"/>
              </div>
              <p className="text-left text-2xl text-gray-600 font-bold mt-8">
                { props.product.title }
                <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-purple-600 text-white text-lg">20 &nbsp;<BiEuro className="inline-block mb-1" /></span>
              </p>
              
              <p className="text-left font-light p-2 mt-8">
                <BiAlarmOff size="1.5em" className="inline text-gray-600" />&nbsp;
                <span>{ props.product.durations["20h_w"] }</span> 
              </p>
              <p className="text-left font-light p-2">
                <BiAlarm size="1.5em" className="inline text-gray-600" />&nbsp;
                <span>{ props.product.durations["40h_w"] }</span> 
              </p>
            </div>
          </Link>
        
      )
    }
    </>
  )
}

export default StackCard;