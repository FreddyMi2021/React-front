import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

import { BiEuro } from "react-icons/bi";

import { STUDENT_X_PATH_BY_STUDENT_ID_AND_PATH_ID } from "../../../../../services/queries/StudentXPathQueries";
import {STUDENT_X_SUBSCRIPTION_BY_STUDENT_ID} from '../../../../../services/queries/StudentXSubscriptionQueries';
import { decryptUser } from '../../../../../services/BaseUrl';
const currentUser = decryptUser(localStorage.getItem("currentUser"))

const CardPathOnlineUser = (props) => {
  const { loading, error, data } = useQuery(STUDENT_X_PATH_BY_STUDENT_ID_AND_PATH_ID( JSON.parse(currentUser).data.data.id, props.id ))
  const {loading: sxsbLoding, error: sxsbError, data: sxsbData} = useQuery(STUDENT_X_SUBSCRIPTION_BY_STUDENT_ID(JSON.parse(currentUser).data.data.id))
  
  if(loading) return <h1>LOADING</h1>;
  if(sxsbLoding) return <p>Loading...</p>
  if(sxsbError) return <p>Erreur</p>
  if(sxsbData) console.log(sxsbData.studentXSubscriptionByStudentId.length)
  if(sxsbData.studentXSubscriptionByStudentId.length !== 0){
    console.log("Vous avez deja une abonmenent")
  }else{
    console.log("Vous n'avez pas encore abonner")
  }
  if(sxsbData.studentXSubscriptionByStudentId.length !== 0){
    return (
      <>
        <div className="w-96 p-4 bg-green-50 rounded-lg shadow m-4">
          <Link to={ "/stack/" + props.id } onClick={ e => { props.closeDropdownMenu(); props.handleSetPathTitle(props.title) } } >
          <div className="rounded-lg h-1/3 overflow-hidden">
            <img className="rounded-lg w-full" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="logo"/>
          </div>
          <p className="text-left text-4xl text-gray-600 font-bold mt-8">
            { props.title }
            <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-green-600 text-white text-lg">20 &nbsp;<BiEuro className="inline-block mb-1" /></span>
          </p>
          
          <p className="text-left font-light p-2 mt-8">
            { props.description }
          </p>
          </Link>
        </div>
      </>
    )
  }
  if(error) {
    return (
      <>
        <div className="w-96 p-4 bg-green-50 rounded-lg shadow m-4">
          <Link to={ "/stack/" + props.id } onClick={ e => { props.closeDropdownMenu(); props.handleSetPathTitle(props.title) } } >
          <div className="rounded-lg h-1/3 overflow-hidden">
            <img className="rounded-lg w-full" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="logo"/>
          </div>
          <p className="text-left text-4xl text-gray-600 font-bold mt-8">
            { props.title }
            <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-green-600 text-white text-lg">20 &nbsp;<BiEuro className="inline-block mb-1" /></span>
          </p>
          
          <p className="text-left font-light p-2 mt-8">
            { props.description }
          </p>
          </Link>
        </div>
      </>
    )
  }

  if(data){
    return (
      <>
        <div className="w-96 p-4 bg-green-50 rounded-lg shadow m-4">
          <Link to={ "/path/" + props.id } onClick={ e => { props.closeDropdownMenu(); props.handleSetPathTitle(props.title) } } >
          <div className="rounded-lg h-1/3 overflow-hidden">
            <img className="rounded-lg w-full" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="logo"/>
          </div>
          <p className="text-left text-4xl text-gray-600 font-bold mt-8">
            { props.title }
          </p>
          
          <p className="text-left font-light p-2 mt-8">
            { props.description }
          </p>
          </Link>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="w-96 p-4 bg-green-50 rounded-lg shadow m-4">
          <Link to={ "/stack/" + props.id } onClick={ e => { props.closeDropdownMenu(); props.handleSetPathTitle(props.title) } } >
          <div className="rounded-lg h-1/3 overflow-hidden">
            <img className="rounded-lg w-full" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="logo"/>
          </div>
          <p className="text-left text-4xl text-gray-600 font-bold mt-8">
            { props.title }
            <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-green-600 text-white text-lg">20 &nbsp;<BiEuro className="inline-block mb-1" /></span>
          </p>
          
          <p className="text-left font-light p-2 mt-8">
            { props.description }
          </p>
          </Link>
        </div>
      </>
    )
  }
  
}

const CardPathOfflineUser = (props) => {
  return (
    <>
      <div className="w-96 p-4 bg-green-50 rounded-lg shadow m-4">
        <Link to={ "/stack/" + props.id } onClick={ e => { props.closeDropdownMenu(); props.handleSetPathTitle(props.title) } } >
        <div className="rounded-lg h-1/3 overflow-hidden">
          <img className="rounded-lg w-full" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="logo"/>
        </div>
        <p className="text-left text-4xl text-gray-600 font-bold mt-8">
          { props.title }
        </p>
        
        <p className="text-left font-light p-2 mt-8">
          { props.description }
        </p>
        </Link>
      </div>
    </>
  )
}

const CardPath = (props) => {
  if(currentUser) {
    return ( <CardPathOnlineUser 
                id={ props.id } 
                title={ props.title } 
                description={ props.description } 
                closeDropdownMenu={ props.closeDropdownMenu } 
                handleSetPathTitle={ props.handleSetPathTitle } 
            /> )
  } else {
    return ( <CardPathOfflineUser 
                id={ props.id } 
                title={ props.title } 
                description={ props.description } 
                closeDropdownMenu={ props.closeDropdownMenu } 
                handleSetPathTitle={ props.handleSetPathTitle } 
            /> )
  }
}

export default CardPath;