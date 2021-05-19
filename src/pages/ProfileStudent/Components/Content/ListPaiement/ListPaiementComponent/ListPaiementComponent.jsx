import React from 'react';
import { CardWithOutDeadline } from './CardWithOutDeadline/CardWithOutDeadline';
import { CardWithDeadline } from './CardWithDeadline/CardWithDeadline';
export const ListPaiementComponent = (props) => {
      
    if(props.dataP.mode == "direct_mode"){
        return(
            <>
            {
                props.dataP.paymentTickets.map(p=>(
                    <CardWithOutDeadline 
                        key={p.id}
                        amount={p.amount} 
                        deadline={p.deadline} 
                        paymentType={p.paymentType}
                        sliceType={p.sliceType} 
                        isPaid={p.isPaid} 
                        productId={p.productId}
                        payment={p.payment}
                    /> 
                ))
                
            }
            </>
        )
    }else{
        return(
            <>
            {
                props.dataP.paymentTickets.map(p=>(
                    <CardWithDeadline 
                        key={p.id}
                        amount={p.amount} 
                        deadline={p.deadline} 
                        paymentType={p.paymentType}
                        sliceType={p.sliceType}
                        isPaid={p.isPaid}
                        productId={p.productId}
                        payment={p.payment}
                    />
                ))
                
            }
            </>
        )
    }
        
    
}