import React from "react"
import { BsExclamationCircle } from "react-icons/bs"

export const FailedVanillaPayPage = () => {
  return (
    <>
      <div className="text-red-600 flex flex-col items-center pb-5" style={ { marginTop: "25vh" } }>
        <BsExclamationCircle size="10em" className="inline-block" />
        <span className="text-gray-700 text-lg text-center mb-10 mt-5">Failed</span>
        <button onClick={ () => window.location.href = "/catalog" } className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-opacity-75">Retry</button>
      </div>
    </>
  )
}