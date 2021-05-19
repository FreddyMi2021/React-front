import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { PAYMENT } from '../../services/queries/PaymentQueries';
import {
  DESTROY_PAYMENT_TICKET,
  UPDATE_PAYMENT_TICKET,
} from '../../services/mutations/PaymentTicketMutations';
import { DESTROY_PAYMENT } from '../../services/mutations/PaymentMutations';
import StackPaymentComponent from './components/StackPaymentComponent/StackPaymentComponent';
import Axios from 'axios';
import { CREATE_HEX_ID } from '../../services/mutations/MutationsStudents';
import {
  decryptUser,
  encryptString,
  passwordKey,
} from '../../services/BaseUrl';

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(decryptUser(localStorage.getItem('currentUser')))
  : {};
// const hexProduct = JSON.parse(localStorage.getItem("hex_product"))
const currentRegister = localStorage.getItem('currentRegister');

export const DirectPaymentPage = () => {
  let ticketId = 0;
  const { paymentId, productId } = useParams();
  const [priceInEuro, setPriceInEuro] = useState(0);

  const {
    loading: loadingPayment,
    error: errorPayment,
    data: dataPayment,
  } = useQuery(PAYMENT(paymentId));
  const [
    updatePaymentTicket,
    {
      loading: loadingPaymentTicket,
      error: errorPaymentTicket,
      data: dataPaymentTicket,
    },
  ] = useMutation(UPDATE_PAYMENT_TICKET, {
    onCompleted: () => {
      newHexStudent();
    },
  });

  const [deletePaymentTicket, { data: dataDestroyPaymentTicket }] = useMutation(
    DESTROY_PAYMENT_TICKET,
    {
      onCompleted: () => {
        deletePayment({
          variables: {
            id: parseInt(paymentId),
          },
        });
      },
    }
  );

  const [deletePayment, { data: dataDestroyPayment }] = useMutation(
    DESTROY_PAYMENT,
    {
      onCompleted: () => {
        window.location.href = '/catalog';
      },
    }
  );

  const [setHexId, { data: mutationHexData }] = useMutation(CREATE_HEX_ID, {
    onCompleted: () => {
      localStorage.removeItem('currentRegister');
      window.location.href = '/catalog';
    },
  });

  const newHexStudent = () => {
    let data = {};
    if (currentRegister) {
      data = {
        first_name: JSON.parse(currentRegister).first_name,
        last_name: JSON.parse(currentRegister).last_name,
        email: currentUser.data.data.email,
        product_id: parseInt(productId),
      };
    } else {
      if (
        currentUser.data.data.first_name !== null &&
        currentUser.data.data.last_name !== null
      ) {
        data = {
          first_name: currentUser.data.data.first_name,
          last_name: currentUser.data.data.last_name,
          email: currentUser.data.data.email,
          product_id: parseInt(productId),
        };
      }
    }

    if (Object.keys(data).length !== 0) {
      Axios({
        headers: {
          uid: currentUser.authData.uid,
          client: currentUser.authData.client,
          'access-token': currentUser.authData['access-token'],
        },
        method: 'POST',
        url: 'https://school-api.sayna.io/hex/students/',
        data: data,
      }).then((res) => {
        if (res.data.errors === undefined) {
          let student = currentUser;
          student.data.data.hex_id = parseInt(res.data.id);
          student.data.data.first_name = data.first_name;
          student.data.data.last_name = data.last_name;
          student.data.data.name = data.last_name + ' ' + data.first_name;

          localStorage.setItem(
            'currentUser',
            encryptString(JSON.stringify(student), passwordKey)
          );

          setHexId({
            variables: {
              id: parseInt(currentUser.data.data.id),
              hexId: parseInt(res.data.id),
            },
          });
        } else {
          window.location.href = '/catalog';
        }
      });
    } else {
      window.location.href = '/catalog';
    }
  };

  const cancelPaymentMode = () => {
    deletePaymentTicket({
      variables: {
        id: parseInt(ticketId),
      },
    });
  };

  const payTicket = (paymentType, paymentMethod) => {
    let dateNow = new Date();
    dateNow.setDate(dateNow.getDate() + 30);
    let deadlineDate = dateNow;
    updatePaymentTicket({
      variables: {
        id: ticketId,
        sliceType: 'one_slice_direct',
        deadline: JSON.stringify(deadlineDate),
        isPaid: true,
        paymentType: paymentType,
        paymentMethod: paymentMethod,
        amount: 1900000.0,
        productId: parseInt(productId),
        paymentId: parseInt(paymentId),
      },
    });
  };

  if (loadingPayment) return <>LOADING PAYMENT...</>;
  if (errorPayment) return <>ERROR PAYMENT...</>;
  if (dataPayment && dataPayment.payment !== null) {
    let ticket = dataPayment.payment.paymentTickets[0];
    if (ticket.isPaid || ticket.sliceType !== 'one_slice_direct') {
      window.location.href = '/';
    } else {
      ticketId = ticket.id;
      return (
        <>
          {/* <HeaderPayment product={ hexProduct } price={ 1900000.0 } setPriceInEuro={ setPriceInEuro } cancelPaymentMode={ cancelPaymentMode } /> */}
          <StackPaymentComponent
            updatePaymentTicket={payTicket}
            priceInEuro={priceInEuro}
            price={1900000.0}
            setPriceInEuro={setPriceInEuro}
            cancelPaymentMode={cancelPaymentMode}
            ticketId={ticketId}
          />
        </>
      );
    }
  } else {
    window.location.href = '/payment_choice';
  }
};
