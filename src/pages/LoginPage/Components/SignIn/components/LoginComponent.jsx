import React from 'react';
import { Link } from 'react-router-dom';
import {FaUserTie} from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
const LoginComponent = ({
  setEmail,
  setPassword,
  postLogin,
  password,
  email,
}) => {
  return (
    <>
              <div className="signupForm w-full lg:w-128 py-8 px-4 text-white transform lg:translate-y-16 rounded-xl lg:rounded-2xl block shadow">
                <div className="w-full text-center mb-2">
                    <h2 className="signupTitle text-gray-700 font-bold">Sign In</h2>
                    <label className="signupSubtitle text-gray-600">Go!</label>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>

                  <div className="w-full py-4 h-auto block space-y-4">
                    <div className="inputReagister w-full rounded-lg flex">
                        <span className="input flex justify-end items-center text-gray-400 p-2 hover:text-grey-darkest">
                            <FaUserTie className="text-gray-400" size="1.5em" />
                        </span>
                        <input
                            className=" inputSignup w-full text-gray-500 font-semibold outline-none focus:outline-none"
                            type="email"
                            placeholder="Email adress"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="inputReagister w-full rounded-lg flex">
                        <span className="input flex justify-end items-center text-gray-400 p-2 hover:text-grey-darkest">
                            <AiFillLock className="text-gray-400" size="1.5em" />
                        </span>
                        <input
                            className=" inputSignup w-full text-gray-500 font-semibold outline-none focus:outline-none"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                        />
                    </div>
                    
                    <div className="text-center mt-8">
                      <button
                        className="btnSignup bg-green-900 w-auto xl:w-2/3 m-auto px-6 text-gray-50 active:bg-indigo-800 text-lg font-bold py-2 shadow hover:shadow-lg outline-none focus:outline-none"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                        onClick={postLogin}
                      >
                        Log in
                      </button>
                    </div>
                      <div className="mt-4 w-full text-center">
                        <Link
                          to="/password-reset"
                          className="text-green-800 font-bold hover:underline"
                        >
                          <small>Forgot your password ?</small>
                        </Link>
                      </div>
                  </div>
                </form>

              </div>
    </>
  );
};

export default LoginComponent;
