import React from 'react';
import {Link} from 'react-router-dom';
import {BiMoney } from 'react-icons/bi';

const clientInfos = localStorage.getItem("clientInfos")

export const CardWithDeadline =(props)=>{
    const monthNames = [
        'Jan.',
        'Feb.',
        'Mar.',
        'Apr.',
        'Mai.',
        'Jun.',
        'Jul.',
        'Aug.',
        'Sept.',
        'Oct.',
        'Nov.',
        'Dec.',
    ];
    const dateOfCreation = new Date(props.deadline.replace(/-/g, ' '));
    const day = dateOfCreation.getDate();
    const month = monthNames[dateOfCreation.getMonth()];
    const year = dateOfCreation.getFullYear();

    const hour = dateOfCreation.getHours();
    const minutes = dateOfCreation.getMinutes();

    const dateDMY = `${day} ${month} ${year}`;
    const hoursDead = `${hour}:${minutes}`;

    let price0 = props.amount
        

    const setPriceAccount = (cur) => {
        const amount = new Intl.NumberFormat("de-DE",{
            style: 'currency',
            currency: JSON.parse(clientInfos).currency, 
            minimumFractionDigits: 0
        })
        const amount1 = new Intl.NumberFormat("de-DE",{
            style: 'currency',
            currency: "EUR", 
            minimumFractionDigits: 0
        })
        if (cur) {
            if(JSON.parse(clientInfos).currency=== "MGA"){
                return amount.format(price0).toString()
            }
            else{
                return amount1.format(price0/4000).toString()
            }
                
        }
    }


    // const ariary = new Intl.NumberFormat("de-DE",{
    //     style: 'currency',
    //     currency: 'MGA', 
    //     minimumFractionDigits: 0
    // });
        
    

    return(
        <>
            <div className='relative content-center rounded-lg h-64 w-full lg:w-64 bg-gray-50 hover:bg-gray-100 block   shadow-md' style={{ transition: "all .4s ease" }}>
                <div className="absolute w-full flex flex-wrap justify-between">
                    <div className="h-12 flex items-center bg-gray-600 justify-center flex-shrink-0 top-0 bottom-o left-0 w-12 text-red-500">
                        <BiMoney className="inline text-gray-50" size="2em" />
                    </div>
                    <div className="absolute p-2 flex w-3/4 right-0">
                        <span className="text-green-700 text-right float-right text-2xl font-bold">
                            {/* {price0} */}
                            {setPriceAccount(price0)}
                            </span>
                    </div>
                </div>
                <div className="relative content-center text-center w-full h-full transform translate-y-1/2">
                    <label className="text-green-500 font-bold uppercase">
                        {props.paymentType}
                    </label>
                </div>
                <div className="absolute w-full m-auto text-center -mt-20">
                    <div className="m-auto ">
                    {
                        props.isPaid ? (
                            <div className="text-center m-auto mb-4 md:mb-0 w-32 py-1 rounded-md font-semibold text-white bg-pink-700 ring-4 ring-pink-300 inline-block z-0">
                                Already paid
                            </div>
                        ) : (
                            <div>
                                <Link to={ "/payment/product/" + props.productId + "/slice_mode/" + props.payment.id }>
                                    <div className="text-center m-auto mb-4 md:mb-0 w-32 py-1 rounded-md font-semibold text-white bg-green-700 ring-4 ring-green-300 inline-block z-0">
                                        Pay
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-0">
                    <div className="text-right float-right text-gray-500 text-md font-bold px-2">
                        {/* <IoMdClock size="1.2em" className="inline mr-1 text-gray-500"/> */}
                            Exp.Date:&nbsp; {dateDMY} at {hoursDead}
                    </div>
                </div>
            </div>
        </>
    )
}