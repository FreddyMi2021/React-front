import React from 'react';
import { BiError } from 'react-icons/bi'

export default function ErrorNotification(props){
    return (
        <>
            <div className="w-full">
                <div className="flex flex-row bg-transparent rounded-sm">
                    <div className="bg-red-900 bg-opacity-20 flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-16 rounded-sm text-red-500">
                        <BiError className="inline text-white" size="2em"/>
                    </div>
                    <div className="flex flex-col flex-grow bg-transparent p-4">
                        <div className="font-bold text-md text-gray-50 text-left">{ props.message }</div>
                    </div>
                </div>
            </div>
        </>
    )
}