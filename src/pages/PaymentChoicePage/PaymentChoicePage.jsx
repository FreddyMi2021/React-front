import { useQuery } from '@apollo/client';
import React from 'react';
import { Redirect } from 'react-router';
import { decryptUser } from '../../services/BaseUrl';
import { PAYMENT_BY_STUDENT } from '../../services/queries/PaymentQueries';
import CardChoiceActive from './components/CardChoiceActive/CardChoiceActive';
import CardChoiceLock from './components/CardChoiceLock/CardChoiceLock';

const currentUser = decryptUser(localStorage.getItem('currentUser'));

function PaymentChoicePage() {
  const {
    data: dataPayment,
    loading: loadingPayment,
    error: errorPayment,
  } = useQuery(PAYMENT_BY_STUDENT(JSON.parse(currentUser).data.data.id));
  if (loadingPayment) return <>CHECKING PAYMENT...</>;
  if (errorPayment) {
    localStorage.removeItem('currentUser');
    window.location.href = '/login_page';
  }
  if (dataPayment && dataPayment.paymentByStudent !== null) {
    if (dataPayment.paymentByStudent.paymentTickets.length === 0) {
      return (
        <>
          <Redirect to='/catalog' />
        </>
      );
    } else {
      const paymentTicket = dataPayment.paymentByStudent.paymentTickets.filter(
        (t) => t.isPaid === false
      );
      if (dataPayment.paymentByStudent.mode === 'direct_mode') {
        return (
          <>
            <Redirect
              to={
                '/payment/product/' +
                paymentTicket[0].productId +
                '/direct_mode/' +
                dataPayment.paymentByStudent.id
              }
            />
          </>
        );
      } else {
        return (
          <>
            <Redirect
              to={
                '/payment/product/' +
                paymentTicket[0].productId +
                '/slice_mode/' +
                dataPayment.paymentByStudent.id
              }
            />
          </>
        );
      }
    }
  } else {
    return (
      <>
        <div className='flex flex-row justify-center items-center pt-36 h-screen overflow-y-auto overflow-x-hidden pb-64'>
          <div className='none md:block'>
            <CardChoiceLock title='School' />
          </div>
          <div>
            <CardChoiceActive />
          </div>
          <div className='none md:block'>
            <CardChoiceLock title='Executive' />
          </div>
        </div>
      </>
    );
  }
}

export default PaymentChoicePage;
