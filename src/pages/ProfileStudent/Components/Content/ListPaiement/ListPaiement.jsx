import React, { useState } from 'react';
import {PAYMENT_BY_STUDENT} from '../../../../../services/queries/PaymentQueries';
import { useQuery } from '@apollo/client';
import { ListPaiementComponent } from './ListPaiementComponent/ListPaiementComponent';
import { decryptUser } from '../../../../../services/BaseUrl';
import FadeLoader from 'react-spinners/FadeLoader';
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(decryptUser(localStorage.getItem('currentUser'))) : {}
export default function ListPaiement(){
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#105a3f");
    const {
        loading:loadingPayment, 
        error: errorPayment, 
        data: paymentData
    } = useQuery(PAYMENT_BY_STUDENT(currentUser.data.data.id))
    if(loadingPayment){
        return(
            <div className="text-center align-middle">
              <div className="sweet-loading transform translate-y-1/2 align-middle">
                <FadeLoader color={color} loading={loading} size={500} />
              </div>
            </div>
        )
    }

    if(errorPayment){
        localStorage.removeItem('currentUser');
        window.location.href = '/login_page';
    }
    
    if(paymentData && paymentData.paymentByStudent !== null){
        
        return(
            <>
                <div className="w-full pb-32">
                    {
                        <div className="w-full grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 2xl:gap-10">
                            <ListPaiementComponent dataP={paymentData.paymentByStudent}/>
                        </div>
                    }
                </div>
                
                    
            </>
        )
        
    }else{
        return(
            <div className="text-center transform translate-y-1/2">
                <h1 className="text-gray-500 uppercase font-bold text-xl md:text-2xl">No payment is made!</h1>
            </div>
        )
    }
}