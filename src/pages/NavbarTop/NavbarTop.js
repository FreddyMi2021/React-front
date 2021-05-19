import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { useDetectOutsideClick } from "./components/UseDetectOutSide/UseDetectOutsideClick";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';

import DropdownMenuPath from './components/DropdownMenuPath/DropdownMenuPath';
import logo from "./sayna.png"
import { decryptUser } from '../../services/BaseUrl';

export default function NavbarTop() {
  let user = JSON.parse(decryptUser(localStorage.getItem('currentUser')));

  const dropdownRef = useRef(null);
  const dropdownMenu = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const [isLoggedOut, setLoggedOut] = useState(false);
  const [isDropdownMenu, setDropdownMenu] = useDetectOutsideClick(dropdownMenu,false);
  const [pathTitle, setPathTitle] = useState('Select');

  let currentPath = JSON.parse(localStorage.getItem('currentPath'));

  function logout() {
    axios({
      url: 'https://school-api.sayna.io/auth/sign_out',
      method: 'delete',
      headers: {
        uid: user.authData['uid'],
        'access-token': user.authData['access-token'],
        client: user.authData['client'],
      },
    })
      .then((result) => {
        if (result.status === 200) {
          localStorage.removeItem('currentUser');
          setLoggedOut(true);
          window.location.href = '/login_page';
        }
      })
      .catch(function (error) {
        localStorage.removeItem('currentUser');
        setLoggedOut(true);
        window.location.href = '/login_page';
      });
  }

  let handleSetPathTitle = (t) => {
    setPathTitle(t);
  };

  let closeDropdownMenu = () => {
    setDropdownMenu(false);
  };
  let closeDropUser = ()=> {
    setIsActive(false);
  }
  return (
    <>
      <div className='bg-green-700 flex flex-row p-5 relative z-50'>
        <img src={ logo } className="z-50 h-8 absolute" style={ { left: "47%", top: "30px" } } />
        <a
          onClick={(e) => setDropdownMenu(!isDropdownMenu)}
          className='bg-green-600 rounded-full  text-left text-lg text-white font-semibold w-auto inline-block relative'
          style={ { top: "10px" } }
        >
          <span className="w-48 pl-4 pr-1 py-2">
            {pathTitle}

            {isDropdownMenu ? (
              <RiArrowUpSLine className='inline' size='2em' />
            ) : (
              <RiArrowDownSLine className='inline' size='2em' />
            )}
          </span>
        </a>
        {user && user.authData ? (
          <>
          <div className="menu-container inline-block float-right text-white absolute right-0 mr-5 z-50 top-8"
          onClick={closeDropdownMenu}>
                {
                  user.data.data.image !== null ? (
                    <a onClick={onClick} className="menu-trigger">
                    <img
                      className='cursor-pointer flex mb-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white w-8'
                      src={
                        user.data.data.image
                      }
                      alt='profil avatar'
                    />
                    </a>
                  ) : (
                    <a onClick={onClick} className="menu-trigger">
                      <FaRegUserCircle size='2em' />
                    </a>
                  )
                }
              
              <div
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"} z-50 text-center bg-white`}
              >
                  <Link to='/profileStudent'
                    className='items block px-4 py-3 text-sm hover:rounded-t-lg hover:bg-gray-50 z-50'
                    onClick={closeDropUser}
                  >
                    {/* <FaRegUserCircle className='inline mr-4 text-gray-700' size='1em' /> */}
                    <span className='inline  text-md font-bold'>
                      My profile
                    </span>
                  </Link>
                  <hr />

                  <hr />
                  <a
                    href='#'
                    className='items block px-4 py-3 text-sm hover:rounded-b-lg hover:bg-gray-50 z-50'
                    onClick={(e) => logout()}
                  >
                    {/* <RiLogoutCircleRLine className='inline mr-4 text-gray-700' size='1em' /> */}
                    <span className='inline text-md font-bold'>
                      Log out
                    </span>
                  </a>
                  <div className="arrow bg-white rounded"></div>
              </div>
              
            </div>
          </>
        ) : (
          <Link
            className='block float-right text-white absolute right-0 mr-5'
            to='/login'
          >
            <FaRegUserCircle size='2em' />
          </Link>
        )}

        {isLoggedOut ? <Redirect to='/login' /> : <span></span>}
      </div>
      {isDropdownMenu ? (
        <div ref={dropdownMenu}>
          <DropdownMenuPath
            className='block'
            closeDropdownMenu={closeDropdownMenu}
            handleSetPathTitle={handleSetPathTitle}
          />
        </div>
      ) : (
        <span></span>
      )}
    </>
  );
}
