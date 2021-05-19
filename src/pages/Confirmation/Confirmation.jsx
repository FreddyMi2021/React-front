import React, { useState } from 'react';
import SuccessNotification from './components/SuccessNotification/SuccessNotification';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { ConfirmationComponent } from "./components/ConfirmationComponent";

// POST /confirmation Requires: email



const Confirmation = () => {
  const [email, setEmail] = useState('');
  const validateEmail = (adress) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(adress).toLowerCase());
  };

  const checkData = () => {
    if (validateEmail(email)) {
      //console.log(email);
      verifyMail();
    } else {
      toast.error(<ErrorNotification message='Email invalide' />);
    }
  };

  const verifyMail = () => {
    axios
      .post('https://school-api.sayna.io/auth/confirmation', {
        email: email,
        confirm_success_url: 'https://school.sayna.io/login_page',
      })
      .then((result) => {
        if (result.status === 200) {
          toast.success(
            <SuccessNotification
              message={`Un mail de confirmation a été re-envoye à ${email},
              Veuillez suivre les instructions inscrites dans ce mail avant de se connecter`}
            />
          );
        } else {
          toast.error(<ErrorNotification message='Erreur serveur' />);
        }
      })
      .catch((e) => {
        toast.error(
          <ErrorNotification message='On ne reconnait pas votre email, veillez vous inscrire' />
        );
        // console.log(e.response);
      });
  };

  return (
    <>
      <main>
        <ConfirmationComponent 
          checkData={ checkData } 
          setEmail={ setEmail }
        />
        <ToastContainer
          toastClassName='toast'
          position='top-center'
          autoClose={30000}
          showProgressBar
          newestOnTop={true}
          closeOnClick
        ></ToastContainer>
      </main>
    </>
  );
};

export default Confirmation;
