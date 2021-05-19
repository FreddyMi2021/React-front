import React from 'react';
import {Link} from 'react-router-dom'
const HomeHeader = () => {
    return (
        <>
            <div className="bg-transparent px-6 w-full ">
                <div className="md:flex">
                    <div className="text-center m-auto">
                        <img className="w-48 text-center m-auto" src="HomePage/Sayna.png" alt="Logo SAYNA" />
                    </div>
                </div>
                <div className="text-center md:float-right mb-16 md:-mt-10">
                    <label className="justify-end text-gray-900 text-md font-bold">
                        No registered ? 
                        <Link to='/'>
                            <span className="text-gray-50"> Sign up</span> 
                        </Link>
                    </label>
                </div>
            </div>
                
        </>
    )
}
export default HomeHeader;