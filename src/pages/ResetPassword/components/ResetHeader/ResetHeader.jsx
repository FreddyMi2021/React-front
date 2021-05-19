import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

import {Link} from 'react-router-dom'
const ResetHeader = () => {
    return (
        <>
            <div className="bg-transparent text-center px-6 w-full">
              
                    <div className="w-full text-center">
                        <Link to='/login_page'>
                            <img className="w-48 text-center m-auto" src="HomePage/Sayna.png" alt="Logo SAYNA" />
                        </Link>
                    </div>
                </div>
                
                
        </>
    )
}
export default ResetHeader;