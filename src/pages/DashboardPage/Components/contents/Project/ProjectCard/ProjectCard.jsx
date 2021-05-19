import React from 'react';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {FaCheck} from 'react-icons/fa';

const ProjectCard = (props) => {
    const width = props.completion
    const style = { width: `${width >= 0.0 ? width : 0.0}%` }

    return(
        <div className="block w-full">
            
                {
                    props.completion === 100 ? (
                        <div className='h-16 flex flex-row   shadow-md rounded-sm'>
                            <div className="flex items-center bg-gray-600 justify-center flex-shrink-0 top-0 bottom-o left-0 w-16 text-red-500">
                                <FaCheck className="text-white" size="2rem"/>
                            </div>
                            <div className="relative flex flex-col bg-green-700 border-l-2 border-gray-50 flex-grow p-2">
                                <div className="flex text-left flex-col flex-grow px-2">
                                    <label className="text-left mb-auto mt-auto text-gray-50 font-bold" style={{fontSize:"14px"}}>
                                        {props.name.split(".")[1]}
                                    </label>
                                </div>
                                <div className="flex h-2 flex-col bg-yellow-400 absolute bottom-0 left-0 right-0 z-0" style={style}></div>
                            </div>
                        </div>
                    ):(
                        <div className='h-16 flex flex-row   shadow-md rounded-sm'>
                            <div className="flex items-center bg-gray-600 justify-center flex-shrink-0 top-0 bottom-o left-0 w-16 text-red-500">
                                <AiOutlineFundProjectionScreen className="text-white" size="2rem"/>
                            </div>
                            <div className="relative flex flex-col bg-gray-100 border-l-2 border-gray-50 flex-grow p-2">
                                <div className="flex text-left flex-col flex-grow px-2">
                                    <label className="text-left mb-auto mt-auto text-gray-500 font-bold" style={{fontSize:"14px"}}>
                                        {props.name.split(".")[1]}
                                    </label>
                                </div>
                                <div className="flex h-2 flex-col bg-yellow-400 absolute bottom-0 left-0 right-0 z-0" style={style}></div>
                            </div>
                        </div>
                    )
                }
                

            
            
        </div>
    )
}
export default ProjectCard;