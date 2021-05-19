import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import {  BiAlarmOff, BiAlarm } from "react-icons/bi";
import { STUDENT_X_HEX_BY_STUDENT } from "../../../../../../services/queries/StudentXHexQueries";
import robot from "./robotCode.png"
import { decryptUser } from "../../../../../../services/BaseUrl";
import FadeLoader from 'react-spinners/FadeLoader';

const currentUser = decryptUser(localStorage.getItem("currentUser"))

const ParkourCard = (props) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#105a3f");
  const { data: dataStudent, loading: loadingStudent, error: errorStudent } = useQuery(STUDENT_X_HEX_BY_STUDENT(JSON.parse(currentUser).data.data.id))
  

  if(loadingStudent){
    return(
      <div className="text-center align-middle">
        <div className="sweet-loading transform translate-y-1/2 align-middle">
          <FadeLoader color={color} loading={loading} size={500} />
        </div>
      </div>
    )
  }
  if(errorStudent){
    localStorage.removeItem('currentUser')
    window.location.href = '/login_page';
  }

  if(dataStudent) {
    
      return (
        <Link to="/catalog">
          <div className="w-96 p-4 bg-green-50 rounded-lg shadow-lg">
            <div className="rounded-lg h-1/3 overflow-hidden bg-green-700">
              <img className="rounded-lg w-full" src={robot} alt="logo"/>
            </div>
            <p className="text-left text-2xl text-gray-600 font-bold mt-8">
              Fighter program
              <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-green-600 text-white text-lg">GO</span>
            </p>
            
            <p className="text-left font-light p-2 mt-8">
              <BiAlarmOff size="1.5em" className="inline text-gray-600" />&nbsp;
              <span>{ props.parkours.durations["20h_w"] }</span> 
            </p>
            <p className="text-left font-light p-2">
              <BiAlarm size="1.5em" className="inline text-gray-600" />&nbsp;
              <span>{ props.parkours.durations["40h_w"] }</span> 
            </p>
          </div>
        </Link>
      )
    }
  } 

export default ParkourCard;