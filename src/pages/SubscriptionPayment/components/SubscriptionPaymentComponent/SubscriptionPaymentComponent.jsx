import React,{useState} from 'react';
import { BiCreditCard } from "react-icons/bi";

import StripePayment from '../StripePayment/StripePayment';

export default function SubscriptionPaymentComponent(props){
    const [openTab, setOpenTab] = useState(1);

    return (
        <>
            <div className="w-full">
                <div className="bg-gray-50 h-18 py-4 px-5 md:py-2 md:h-16 flex flex-row relative shadow  overflow-x-scroll  md:overflow-hidden">
                <ul
                        className="flex list-none pb-4 flex-row space-x-4 sticky top-8"
                        role="tablist"
                    >
                        <li className="-mb-px text-center last:mr-0 text-center">
                        <a
                            className={
                            'block text-xs text-center font-bold uppercase px-5 space-y-1 leading-normal ' +
                            (openTab === 1
                                ? 'text-gray-400 border-b-2 border-gray-500'
                                : 'text-gray-500 -mb-20')
                            }
                            onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                            }}
                            data-toggle='tab'
                            href='#link1'
                            role='tablist'
                        >
                            <BiCreditCard
                            className='text-center relative left-10'
                            style={{ fontSize: '2rem', margin: 0 }}
                            />
                            <span className='block'>Paiement par carte</span>
                        </a>
                        </li>
                        
                    </ul>
                </div>
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 rounded'>
                    <div className='py-5 flex-auto'>
                        <div className='tab-content tab-space'>
                            <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                                <StripePayment />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}