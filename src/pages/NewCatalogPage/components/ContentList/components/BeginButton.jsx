import { split, useMutation, useQuery } from '@apollo/client';
import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { decryptUser } from '../../../../../services/BaseUrl';
import { DESTROY_PAYMENT } from '../../../../../services/mutations/PaymentMutations';
import { PAYMENT_BY_STUDENT } from '../../../../../services/queries/PaymentQueries';
import PropagateLoader from 'react-spinners/PropagateLoader';
const currentUser = decryptUser(localStorage.getItem('currentUser'));

export const BeginButton = (props) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#105a3f');
  const history = useHistory();
  const [magicLink, setMagicLink] = useState(null);
  // const { data: dataStudent, loading: loadingStudent, error: errorStudent } = useQuery(STUDENT_X_HEX_BY_STUDENT(JSON.parse(currentUser).data.data.id))
  const {
    data: dataPayment,
    loading: loadingPayment,
    error: errorPayment,
  } = useQuery(PAYMENT_BY_STUDENT(JSON.parse(currentUser).data.data.id));
  const handleClick = () => {
    localStorage.setItem('hex_product', JSON.stringify(props.product));
  };

  const [deletePayment, { data: dataDestroyPayment }] = useMutation(
    DESTROY_PAYMENT,
    {
      onCompleted: () => {
        history.push('/choice_payment_mode');
      },
    }
  );

  const createMagickLink = (studentHexId) => {
    axios({
      headers: {
        uid: JSON.parse(currentUser).authData.uid,
        client: JSON.parse(currentUser).authData.client,
        'access-token': JSON.parse(currentUser).authData['access-token'],
      },
      method: 'POST',
      url:
        'https://school-api.sayna.io/hex/students/' +
        studentHexId +
        '/magic_links',
      data: {},
    }).then((res) => {
      if (res.data.errors === undefined) {
        setMagicLink(res.data.url);
      }
    });
  };

  const disableHexStudent = (studentHexId, payment) => {
    const data = {
      active: false,
    };
    axios({
      headers: {
        uid: JSON.parse(currentUser).authData.uid,
        client: JSON.parse(currentUser).authData.client,
        'access-token': JSON.parse(currentUser).authData['access-token'],
      },
      method: 'PATCH',
      url: 'https://school-api.sayna.io/hex/students/' + studentHexId,
      data: data,
    }).then((res) => {
      if (res.data.errors === undefined) {
        history.push(
          '/payment/product/' +
            payment.paymentTickets[0].productId +
            '/slice_mode/' +
            payment.id
        );
      }
    });
  };

  const checkDirectModePayment = (payment) => {
    if (payment.paymentTickets.length !== 0) {
      if (payment.paymentTickets[0].isPaid) {
        createMagickLink(JSON.parse(currentUser).data.data.hex_id);
      } else {
        history.push(
          '/payment/product/' +
            payment.paymentTickets[0].productId +
            '/direct_mode/' +
            payment.id
        );
      }
    } else {
      deletePayment({
        variables: {
          id: payment.id,
        },
      });
    }
  };

  const checkSliceModePayment = (payment) => {
    if (payment.paymentTickets.length !== 0) {
      let paymentPaid = payment.paymentTickets.filter(
        (p) => p.isPaid === false
      );
      if (paymentPaid.length === 0) {
        createMagickLink(JSON.parse(currentUser).data.data.hex_id);
      } else {
        if (JSON.parse(currentUser).data.data.hex_id !== null) {
          // console.log("T1",moment(),"T2", moment(paymentPaid[0].deadline.split(" UTC")[0]),"compare",(moment() < moment(paymentPaid[0].deadline.split(" UTC")[0])? "YES": "NO"), "ANOTHER", moment().diff(moment(paymentPaid[0].deadline.split(" UTC")[0]), 'days'))
          if (moment() < moment(paymentPaid[0].deadline.split(' UTC')[0])) {
            createMagickLink(JSON.parse(currentUser).data.data.hex_id);
          } else {
            console.log('COUCOU');
            disableHexStudent(
              JSON.parse(currentUser).data.data.hex_id,
              payment
            );
          }
        } else {
          history.push(
            '/payment/product/' +
              payment.paymentTickets[0].productId +
              '/slice_mode/' +
              payment.id
          );
        }
      }
    } else {
      deletePayment({
        variables: {
          id: payment.id,
        },
      });
    }
  };

  const verifyPayment = (payment) => {
    switch (payment.mode) {
      case 'slice_mode':
        checkSliceModePayment(payment);
        break;
      case 'direct_mode':
        checkDirectModePayment(payment);
        break;

      default:
        history.push('/choice_payment_mode');
        break;
    }
  };

  if (loadingPayment) {
    return (
      <label className='text-green-500 font-bold text-lg'>LOADING...</label>
    );
  }

  if (errorPayment) {
    localStorage.removeItem('currentUser');
    window.location.href = '/login_page';
  }

  if (dataPayment && dataPayment.paymentByStudent !== null) {
    if (magicLink === null) {
      verifyPayment(dataPayment.paymentByStudent);
      return <>VERIFYING PAYMENT...</>;
    } else {
      return (
        <a
          href={magicLink}
          className='inline-block bg-green-700 px-16 mt-14 py-3 xl:py-4 focus:outline-none text-white rounded-full font-bold text-lg'
        >
          Start now
        </a>
      );
    }
  } else {
    return (
      <Link to={'/choice_payment_mode'} onClick={() => handleClick()}>
        <span className='inline-block m-auto bg-green-700 px-16 mt-14 py-3 xl:py-4 focus:outline-none text-white rounded-full font-bold text-lg'>
          Start now
        </span>
      </Link>
    );
  }
};

// const StackCard = (props) => {
//   const [ magicLink, setMagicLink ] = useState(null);
//   const { data: dataStudent, loading: loadingStudent, error: errorStudent } = useQuery(STUDENT_X_HEX_BY_STUDENT(JSON.parse(currentUser).data.data.id))
//   const { data: dataPayment, loading: loadingPayment, error: errorPayment } = useQuery(PAYMENT_BY_STUDENT(JSON.parse(currentUser).data.data.id))
//   const handleClick = () => {
//     localStorage.setItem("hex_product", JSON.stringify(props.product))
//   }

//   const createMagickLink = (studentHexId) => {
//     Axios.post("https://school-api.sayna.io/hex/students/" + studentHexId + "/magic_links")
//     .then((res) => {

//       if(res.data.errors === undefined) {
//         setMagicLink(res.data.url);
//       }
//     })
//   }

//   const checkDirectModePayment = (payment) => {
//     if(payment.paymentTickets.length !== 0) {
//       if(payment.paymentTickets[0].isPaid){
//         createMagickLink( JSON.parse(currentUser).data.data.hex_id )
//       } else {
//         window.location.href = "/payment/product/"+ payment.paymentTickets[0].productId +"/direct_mode/" + payment.id
//       }
//     } else {
//       window.location.href = "/choice_payment_mode"
//     }
//   }

//   const verifyPayment = (payment) => {
//     switch (payment.mode) {
//       case "slice":

//         break;
//       case "direct_mode":
//         checkDirectModePayment(payment)
//         break;

//       default:
//         window.location.href = "/choice_payment_mode"
//         break;
//     }
//   }

//   if(loadingPayment) return (<>LOADING...</>)
//   if(errorPayment) return (<>ERROR</>)

//   if(dataPayment && dataPayment.paymentByStudent !== null) {
//     if(magicLink === null){
//       verifyPayment(dataPayment.paymentByStudent)
//       return (<>LOADING...</>)
//     } else {
//       return (
//         <a href={ magicLink }>
//         <div className="w-96 p-4 bg-green-50 rounded-lg shadow-lg m-4">
//           <div className="rounded-lg h-1/3 overflow-hidden">
//             <img className="rounded-lg w-full" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="logo"/>
//           </div>
//           <p className="text-left text-2xl text-gray-600 font-bold mt-8">
//             { props.product.title }
//             <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-green-600 text-white text-lg">GO</span>
//           </p>

//           <p className="text-left font-light p-2 mt-8">
//             <BiAlarmOff size="1.5em" className="inline text-gray-600" />&nbsp;
//             <span>{ props.product.durations["20h_w"] }</span>
//           </p>
//           <p className="text-left font-light p-2">
//             <BiAlarm size="1.5em" className="inline text-gray-600" />&nbsp;
//             <span>{ props.product.durations["40h_w"] }</span>
//           </p>
//         </div>
//         </a>
//       )
//     }
//   } else {
//     return(
//       <Link to={ "/choice_payment_mode" } onClick={ () => handleClick() }>
//       <div className="w-96 p-4 bg-green-50 rounded-lg shadow-lg m-4">
//         <div className="rounded-lg h-1/3 overflow-hidden">
//           <img className="rounded-lg w-full" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="logo"/>
//         </div>
//         <p className="text-left text-2xl text-gray-600 font-bold mt-8">
//           { props.product.title }
//           <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-purple-600 text-white text-lg">20 &nbsp;<BiEuro className="inline-block mb-1" /></span>
//         </p>

//         <p className="text-left font-light p-2 mt-8">
//           <BiAlarmOff size="1.5em" className="inline text-gray-600" />&nbsp;
//           <span>{ props.product.durations["20h_w"] }</span>
//         </p>
//         <p className="text-left font-light p-2">
//           <BiAlarm size="1.5em" className="inline text-gray-600" />&nbsp;
//           <span>{ props.product.durations["40h_w"] }</span>
//         </p>
//       </div>
//       </Link>
//     )
//   }
// }
