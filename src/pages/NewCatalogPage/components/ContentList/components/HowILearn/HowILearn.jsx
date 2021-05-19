import React, { useRef, useState } from 'react';
import Chevron from '../Chevron/Chevron';
import { CardLearning } from './CardLearning/CardLearning';
export const HowiLearn = () => {
    const [active, setActive] = useState("")
    const [height, setHeight] = useState("0px")
    const [rotate, setRotate] = useState("accordion_icon")
    const content = useRef(null);

    function toggleAccordion(){
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate")
        // console.log(content.current.scrollHeight)
    }
    return(
        <>
            <div className=" flex-grow p-4">
                <div className="accordion_section bg-gray-50 rounded-sm shadow">
                    <div className="accordion  bg-gray-50 cursor-pointer"
                        onClick={toggleAccordion}
                    >
                        <div className="accordion_title text-center">
                            <div className="text-center font-bold text-md text-gray-600">
                                What can i learn ?
                            </div>
                        </div>
                        <Chevron className={`${rotate}`} size={"1.5em"} color={"#7a7a7b"} position={"right"}/>
                    </div>
                    <div
                        ref={content}
                        style={{maxHeight:`${height}`}}
                        className="accordion_content">
                            
                        <div className='px-4 w-full justify-items-auto'>
                            <div className="py-4 border-t-2 border-gray-100">
                                <CardLearning/>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>

        </>
    )
}