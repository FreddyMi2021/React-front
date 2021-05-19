import React, { useState } from 'react';

import HeaderPayment from './components/HeaderPayment/HeaderPayment';

import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { PAYMENT } from '../../services/queries/PaymentQueries';
import {
  CREATE_PAYMENT_TICKET,
  DESTROY_PAYMENT_TICKET,
  UPDATE_PAYMENT_TICKET,
} from '../../services/mutations/PaymentTicketMutations';
import { DESTROY_PAYMENT } from '../../services/mutations/PaymentMutations';
import StackPaymentComponent from './components/StackPaymentComponent/StackPaymentComponent';
import Axios from 'axios';
import { CREATE_HEX_ID } from '../../services/mutations/MutationsStudents';
import { decryptUser } from '../../services/BaseUrl';

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(decryptUser(localStorage.getItem('currentUser')))
  : {};
// const hexProduct = JSON.parse(localStorage.getItem("hex_product"))
const currentRegister = localStorage.getItem('currentRegister');

export const SlicePaymentPage = () => {
  let history = useHistory();
  let ticketId = 0;
  let ticketSliceType = '';
  let sliceType;
  const { paymentId, productId } = useParams();
  const [priceInEuro, setPriceInEuro] = useState(0);

  const {
    loading: loadingPayment,
    error: errorPayment,
    data: dataPayment,
  } = useQuery(PAYMENT(paymentId));
  const [updatePaymentTicket, { data: dataPaymentTicketNew }] = useMutation(
    UPDATE_PAYMENT_TICKET,
    {
      onCompleted: () => {
        if (ticketSliceType === 'slice_0') {
          let newTicketSlice =
            'slice_' + (parseInt(ticketSliceType.split('_')[1]) + 1);
          newHexStudent(newTicketSlice);
        } else {
          let newTicketSlice =
            'slice_' + (parseInt(ticketSliceType.split('_')[1]) + 1);
          updateHexStudent(newTicketSlice);
        }
      },
    }
  );

  const [nextPaymentTicket, { data: dataPaymentTicketCreate }] = useMutation(
    CREATE_PAYMENT_TICKET,
    {
      onCompleted: (data) => {
        window.location.href = '/catalog';
      },
    }
  );

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

  const newHexStudent = (sliceType) => {
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

          localStorage.setItem('currentUser', JSON.stringify(student));

          let sliceCount = dataPayment.payment.sliceCount;
          if (dataPayment.payment.paymentTickets.length <= sliceCount) {
            const amountTicket = (2000000 - 600000) / sliceCount;
            let dateNow = new Date();
            dateNow.setDate(dateNow.getDate() + 30);
            let deadlineDate = dateNow;

            if (parseInt(sliceType.split('_')[1]) < 10) {
              nextPaymentTicket({
                variables: {
                  id: ticketId,
                  sliceType: sliceType,
                  deadline: JSON.stringify(deadlineDate),
                  isPaid: false,
                  paymentType: '',
                  paymentMethod: '',
                  amount: Math.round(amountTicket),
                  productId: parseInt(productId),
                  paymentId: parseInt(paymentId),
                },
              });
            } else {
              window.location.href = '/catalog';
            }
          }

          setHexId({
            variables: {
              id: parseInt(currentUser.data.data.id),
              hexId: parseInt(res.data.id),
            },
          });
        } else {
          history.push('/catalog');
        }
      });
    } else {
      history.push('/catalog');
    }
  };

  const updateHexStudent = (sliceType) => {
    let data = {};

    if (
      currentUser.data.data.first_name !== null &&
      currentUser.data.data.last_name !== null
    ) {
      data = {
        active: true,
      };
    }

    if (Object.keys(data).length !== 0) {
      Axios({
        headers: {
          uid: currentUser.authData.uid,
          client: currentUser.authData.client,
          'access-token': currentUser.authData['access-token'],
        },
        method: 'PATCH',
        url:
          'https://school-api.sayna.io/hex/students/' +
          currentUser.data.data.hex_id,
        data: data,
      }).then((res) => {
        if (res.data.errors === undefined) {
          let sliceCount = dataPayment.payment.sliceCount;
          if (dataPayment.payment.paymentTickets.length < sliceCount) {
            const amountTicket = (2000000 - 600000) / sliceCount;
            let dateNow = new Date();
            dateNow.setDate(dateNow.getDate() + 30);
            let deadlineDate = dateNow;

            if (parseInt(sliceType.split('_')[1]) < 10) {
              nextPaymentTicket({
                variables: {
                  id: ticketId,
                  sliceType: sliceType,
                  deadline: JSON.stringify(deadlineDate),
                  isPaid: false,
                  paymentType: '',
                  paymentMethod: '',
                  amount: Math.round(amountTicket),
                  productId: parseInt(productId),
                  paymentId: parseInt(paymentId),
                },
              });
            } else {
              window.location.href = '/catalog';
            }
          }
        }
      });
    } else {
      history.push('/catalog');
    }
  };

  const cancelPaymentMode = () => {
    if (ticketSliceType === 'slice_0') {
      deletePaymentTicket({
        variables: {
          id: parseInt(ticketId),
        },
      });
    }
  };

  const payTicket = (paymentType, paymentMethod, ticket) => {
    // console.log("TICKET +>" , ticket)
    let dateNow = new Date();
    dateNow.setDate(dateNow.getDate() + 30);
    let deadlineDate = dateNow;
    updatePaymentTicket({
      variables: {
        id: ticketId,
        sliceType: ticket.sliceType,
        deadline: JSON.stringify(deadlineDate),
        isPaid: true,
        paymentType: paymentType,
        paymentMethod: paymentMethod,
        amount: ticket.amount,
        productId: parseInt(productId),
        paymentId: parseInt(paymentId),
      },
    });
  };

  if (loadingPayment) return <>LOADING PAYMENT...</>;
  if (errorPayment) return <>ERROR PAYMENT...</>;
  if (dataPayment && dataPayment.payment !== null) {
    let ticket = null;
    ticket = dataPayment.payment.paymentTickets.filter(
      (t) => t.isPaid === false
    )[0];
    if (ticket !== null || ticket !== undefined) {
      if (ticket.isPaid || ticket.sliceType === 'one_slice_direct') {
        history.push('/');
      } else {
        ticketId = ticket.id;
        ticketSliceType = ticket.sliceType;
        return (
          <>
            <StackPaymentComponent
              updatePaymentTicket={payTicket}
              priceInEuro={priceInEuro}
              price={ticket.amount}
              setPriceInEuro={setPriceInEuro}
              cancelPaymentMode={cancelPaymentMode}
              ticketId={ticketId}
              ticket={ticket}
            />
          </>
        );
      }
    } else {
      return <>LOADING PAYMENT...</>;
    }
  } else {
    history.push('/payment_choice');
  }
};
