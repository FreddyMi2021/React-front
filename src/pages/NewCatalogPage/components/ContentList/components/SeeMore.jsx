import React from 'react';
import {AiFillCloseCircle} from 'react-icons/ai';
import SeeMoreIntro from './SeeMoreComponents/SeeMoreIntro/SeeMoreIntro';
import SeeMoreListProgram from './SeeMoreComponents/SeeMoreListProgram/SeeMoreListProgram';
import './Styles/SeeMore.css'
export default function SeeMore(props){
    return(
        <>
            <div 
            className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none"
            
            >
                <div className="relative w-auto rounded-lg mx-auto max-w-6xl" style={{height:"80vh"}}>
                    
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        
                        <div className="flex items-start justify-between p-2 border-b border-solid border-gray-300 rounded-t">
                            <button
                                className="p-1 ml-auto bg-red-500 border-0 rounded-lg float-right leading-none outline-none focus:outline-none"
                                onClick={() => props.setShowModal(false)}
                            >
                                <AiFillCloseCircle className="bg-transparent text-white h-6 w-6 block outline-none focus:outline-none"/>
                            </button>
                        </div>
                        
                        <div className="overflow-y-auto pl-4 py-4 pr-4 md:pr-0 md:overflow-hidden md:flex rounded-lg" style={{height:"75vh"}}>
                            <div className="seeMoreSidebar hidden md:block relative rounded-l-lg w-full md:w-1/6">
                                <div className="vertical-center w-full ">
                                    <img 
                                    src="images/Laptop.png" 
                                    className="w-full md:w-2/3 mx-auto"
                                    alt="Logo laptop" />
                                </div>
                            </div>
                            <div className="flex md:overflow-y-auto w-full md:w-5/6">
                                <div className="w-full md:flex">
                                    <div className="w-full md:h-full rounded-r-lg bg-white md:w-2/5">
                                        <SeeMoreIntro/>
                                    </div>
                                    <div className="w-full md:pl-4 rounded-r-lg md:w-3/5">
                                        <SeeMoreListProgram/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        {/* <div className="flex items-center justify-end px-2 py-1 rounded-b">
                            <button
                                className="bg-green-500 text-white active:bg-green-600 font-bold capitalize text-md px-6 py-1 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={() => props.setShowModal(false)}
                            >
                                Fermer
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="opacity-90 fixed inset-0 z-40 bg-green-900"></div>
        </>
    )
}