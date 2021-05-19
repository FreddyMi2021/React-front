import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import SuccessNotification from './components/SuccessNotification/SuccessNotification';
import LoginComponent from './components/LoginComponent';
import 'react-toastify/dist/ReactToastify.css'
import { encryptString, passwordKey } from '../../../../services/BaseUrl';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function postLogin() {
    axios
      .post('https://school-api.sayna.io/auth/sign_in', {
        email,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          localStorage.setItem(
            'currentUser',
            encryptString(JSON.stringify({ data: result.data, authData: result.headers }), passwordKey)
          );
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
        // console.log(e.response.data.errors.toString().substring(0, 14));
        if(e.response !== undefined && e.response !== null) {
          if (
            e.response.data.errors.toString().substring(0, 14) == 'A confirmation'
          ) {
            // const link = <Link to="/confirmation">Click ici</Link>;
            toast.error(
              <Link to="/confirmation">
                <ErrorNotification
                  message={`${
                    e.response.data.errors.toString() + '    '
                  } Click ici si vous ne l'avez pas recu`}
                />
              </Link>
            );
          } else {
            toast.error(
              <ErrorNotification message={e.response.data.errors.toString()} />
            );
          }
        }
      });
  }

  if (isLoggedIn) {
    // return <Redirect from="/login" to="/" />;
    window.location.href = '/catalog';
  }

  return (
    <>
      <LoginComponent
        setEmail={setEmail}
        setPassword={setPassword}
        postLogin={postLogin}
        email={email}
        password={password}
      />
      <ToastContainer
        toastClassName="toast"
        position="top-center"
        autoClose={15000}
        showProgressBar
        newestOnTop={true}
        closeOnClick
      />
    </>
  );
}

export default Login;
