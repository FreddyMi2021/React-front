import React from 'react';

import {GoInfo} from 'react-icons/go';

export default function Notification(){
    return(
        <>
            <div className="z-50 origin-top-right absolute right-0 z-50 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" style={{zIndex:"999"}}>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <GoInfo className="inline mr-4" size="1em" />
                <span className="inline text-gray-400 text-md font-bold">Notification 1</span>
                <span className="badge mb-3 bg-red-600 ml-2 rounded-full p-1 font-bold text-center object-right-top text-white text-sm mr-1" style={{fontSize:"10px"}}>24</span>
              </a>
              <hr/>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <GoInfo className="inline mr-4" size="1em" />
                <span className="inline text-gray-400 text-md font-bold">Notification 2</span>
                <span className="badge mb-3 bg-green-600 ml-2 rounded-full p-1 font-bold text-center object-right-top text-white text-sm mr-1"  style={{fontSize:"10px"}}>12</span>
              </a>
              <hr/>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <GoInfo className="inline mr-4" size="1em" />
                <span className="inline text-gray-400 text-md font-bold">Notification 3</span>
                <span className="badge mb-3 bg-red-300 ml-2 rounded-full p-1 font-bold text-center object-right-top text-white text-sm mr-1"  style={{fontSize:"10px"}}>06</span>

              </a>
              <hr/>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <GoInfo className="inline mr-4" size="1em" />
                <span className="inline text-gray-400 text-md font-bold">Notification 4</span>
                <span className="badge mb-3 bg-green-700 ml-2 rounded-full p-1 font-bold text-center object-right-top text-white text-sm mr-1"  style={{fontSize:"10px"}}>24</span>

              </a>
          </div>
        </>
    )
}