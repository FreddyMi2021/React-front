import React from "react";

import { BsAlarm } from "react-icons/bs";

const HeaderPayment = (props) => {
  return(
    <div className="w-full flex flex-row p-4 bg-gray-200">
      <div className="w-1/3 text-center">
        <BsAlarm className="inline text-gray-500" size="5em" />
      </div>
      <div className="w-2/3 flex flex-col px-4 text-gray-700">
        <h2>Title</h2>
        <div className="relative">
          <span className="text-center w-32 py-2 rounded-md font-semibold text-white bg-indigo-500 ring-4 ring-indigo-300 float-right">20000 Ar</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderPayment;