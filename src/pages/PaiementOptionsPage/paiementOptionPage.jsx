import { useQuery } from '@apollo/client';
import Axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { decryptUser } from '../../services/BaseUrl';
import { PAYMENT_BY_STUDENT } from '../../services/queries/PaymentQueries';
import PaiementOptionsComponents from './components/PaiementOptionsComponents/PaiementOptionsComponents';

const currentUser = decryptUser(localStorage.getItem('currentUser'));

export default function PaiementOptionPage() {
  const [hexProductId, setHexProductId] = useState(null);
  const {
    data: dataPayment,
    loading: loadingPayment,
    error: errorPayment,
  } = useQuery(PAYMENT_BY_STUDENT(JSON.parse(currentUser).data.data.id));

  const getHexProducts = () => {
    Axios.get('https://school-api.sayna.io/hex/products', {
      headers: {
        uid: JSON.parse(currentUser).authData.uid,
        client: JSON.parse(currentUser).authData.client,
        'access-token': JSON.parse(currentUser).authData['access-token'],
      },
    }).then((res) => {
      if (res.data.errors === undefined) {
        if (hexProductId === null) {
          setHexProductId(res.data.items[0].id);
        }
      }
    });
  };
  useEffect(() => {
    getHexProducts();
  });

  if (loadingPayment) return <>CHECKING PAYMENT...</>;
  if (errorPayment) {
    localStorage.removeItem('currentUser');
    window.location.href = '/login_page';
  }

  if (dataPayment && dataPayment.paymentByStudent !== null) {
    return (
      <>
        <Redirect to='/catalog' />
      </>
    );
  } else {
    if (hexProductId !== null) {
      return (
        <>
          <PaiementOptionsComponents productId={hexProductId} />
        </>
      );
    } else {
      return <>LOADING...</>;
    }
  }
}
