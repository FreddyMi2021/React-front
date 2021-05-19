import React, { useState } from 'react';
import axios from 'axios';


import { FaUserTie } from 'react-icons/fa';
import { SiLastpass } from 'react-icons/si';
import { AiTwotoneMail, AiFillLock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import SuccessNotification from './SuccessNotification/SuccessNotification';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-input-2';
import "./style/signup.css"

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(email)){
    toast.error(
      <ErrorNotification message="Please enter a valid email"/>
    );
  }
  return re.test(String(email).toLowerCase())
}

const validatePassword = (password)=> {
  // At least 1 digit and 1 letter
  const rgxp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
  const validate = rgxp.test(password);
  
  if (validate === false) {
    toast.error(
      <ErrorNotification message="Password must contain at least one uppercase letter, one lowercase letter and one number!" />
    );
  }
  
  return validate;
}



export default function SignUp () {
  const { phone, setPhone } = useState('');
  const [name, setName] = useState('')
  const [firstname, setFirstname] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')


  const checkData = () =>{
    var name = document.forms["myForm"]["name"].value;
    var firstname = document.forms["myForm"]["firstname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var password_confirmation = document.forms["myForm"]["password_confirmation"].value;
  
    if (name === "") {
      toast.error(
        <ErrorNotification message="The name field is empty!" />
      );
      return false;
    }
    if (firstname === "") {
      toast.error(
        <ErrorNotification message="The first names field is empty!" />
      );
      return false;
    }
    if (email === "") {
      toast.error(
        <ErrorNotification message="The email field is empty!" />
      );
      return false;
    }
    // if (phone == "") {
    //   toast.error(
    //     <ErrorNotification message="Le champs numero de contact est vide!" />
    //   );
    //   return false;
    // }
    if (password === "") {
      toast.error(
        <ErrorNotification message="Password field is empty!" />
      );
      return false;
    }
    if (password_confirmation === "") {
      toast.error(
        <ErrorNotification message="The password confirmation field is empty!" />
      );
      return false;
    }
    else{
      if (validateEmail(email)) {
        if (validatePassword(password)) {
          if (password === password_confirmation) {
            signup();
            return <Redirect to={'/confirmation'} />;
          } else {
            
            toast.error(
              <ErrorNotification message="Passwords do not match!" />
            );
          }
        }
      }
    }
  }

  const signup = () =>{
    axios
      .post('https://school-api.sayna.io/auth', {
        last_name: name,
        first_name: firstname,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        phone: phoneNumber
      })
      .then((result) => {
        if (result.status === 200) {
          localStorage.setItem(
            'currentRegister',
            JSON.stringify({
              first_name: setFirstname(),
              last_name: setName(),
            })
          );
          console.log(result.data)
          toast.success(
            <SuccessNotification
              message={`A confirmation email has been sent to ${result.data.data.email}. 
              Please follow the instructions in this email before logging in.`}
            />
          );
          setTimeout(() => (window.location.href = '/confirmation'), 10000);
        } else {
          toast.error(<ErrorNotification message="Error server" />);
        }
      })
      .catch((e) => {
        toast.error(
          <ErrorNotification
            message={`${e.response.data.errors.full_messages.toString()}`}
          />
        );
        console.log(e.response.data.errors.full_messages);
      });
  }




  return (
    <>
      <div className="signupForm w-full lg:w-128 py-8 px-4 text-white transform lg:translate-y-16 rounded-xl lg:rounded-2xl block shadow">
        <div className="w-full text-center mb-2">
          <h2 className="signupTitle text-gray-700 font-bold">
            Join the community
          </h2>
          <label className="signupSubtitle text-gray-600">Welcome!</label>
        </div>
        <form name="myForm" onSubmit={(e) => {
            e.preventDefault();
            checkData();
          }}
        >
          <div className="w-full py-4 h-auto block space-y-4">
            <div className="inputReagister w-full flex">
              <span className="input flex justify-end items-center text-gray-400 p-2 hover:text-grey-darkest">
                <FaUserTie className="text-gray-400" size="1.5em" />
              </span>
              <input
                className=" inputSignup placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="inputReagister w-full flex">
              <span className="input flex justify-end items-center text-gray-400 p-2 hover:text-grey-darkest">
                <FaUserTie className="text-gray-400" size="1.5em" />
              </span>
              <input
                className="r inputSignup placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
                type="text"
                name="firstname"
                placeholder="Firstname"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className='inputReagister w-full flex h-10' onChange={(e) => setPhoneNumber(e.target.value)}>
              {/* <span className="input flex justify-end items-center text-gray-400 p-2 hover:text-grey-darkest">
                <AiTwotonePhone className="text-gray-400" size="1.5em" />
              </span> */}
              <PhoneInput
                inputExtraProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                }}
                country={'mg'}
                value={phoneNumber}
                name="phone"
                onChange={setPhone}
                inputClass="inputSignup h-8 placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
              />
            </div>
            <div className="inputReagister w-full flex">
              <span className="input flex justify-end items-center text-gray-400 p-2 hover:text-grey-darkest">
                <AiTwotoneMail className="text-gray-400" size="1.5em" />
              </span>
              <input
                className=" inputSignup placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
                type="email"         
                name="email"      
                placeholder="Email adress"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="inputReagister w-full flex">
              <span className="input flex justify-end items-center text-gray-400 p-2 hover:text-grey-darkest">
                <SiLastpass className="text-gray-400" size="1.5em" />
              </span>
              <input
                className=" inputSignup placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
                type="password"
                name="password"      
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputReagister w-full flex">
              <span className="input flex justify-end items-center text-gray-400 p-2 hover:text-grey-darkest">
                <AiFillLock className="text-gray-400" size="1.5em" />
              </span>
              <input
                className=" inputSignup placeholder-opacity-50 w-full text-gray-500 font-semibold outline-none focus:outline-none"
                type="password"
                name="password_confirmation"      
                placeholder="Confirm password"
                onChange={(e) =>
                  setPassword_confirmation(e.target.value)
                }
              />
            </div>
          </div>


          <div className="text-center w-full mx-auto">
            <button
              className="btnSignup bg-green-900 w-auto xl:w-2/3 m-auto px-6 text-gray-50 active:bg-indigo-800 text-lg font-bold py-2 shadow hover:shadow-lg outline-none focus:outline-none"
              type="submit"
              style={{ transition: 'all .15s ease' }}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        toastClassName="toast"
        position="top-center"
        autoClose={10000}
        showProgressBar
        newestOnTop={true}
        closeOnClick
      />
    </>
  );

}
