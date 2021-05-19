import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useDetectOutsideClick } from './components/UseDetectOutSide/UseDetectOutsideClick';
import NavbarTopComponent from './components/NavBarTopComponent';
import { decryptUser } from '../../services/BaseUrl';

export default function NavbarTop() {
  let user = JSON.parse(decryptUser(localStorage.getItem('currentUser')));

  const dropdownRef = useRef(null);
  const dropdownNotif = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [isActiveNotif, setIsActiveNotif] = useDetectOutsideClick(
    dropdownNotif,
    false
  );
  const onClick = () => setIsActive(!isActive);
  const onClickNotif = () => setIsActiveNotif(!isActiveNotif);

  const [isLoggedOut, setLoggedOut] = useState(false);
  const [isDropdownMenu, setDropdownMenu] = useState(false);
  const [pathTitle, setPathTitle] = useState('Selectionner');

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
          window.location.href = '/login';
        }
      })
      .catch(function (error) {
        localStorage.removeItem('currentUser');
        setLoggedOut(true);
        window.location.href = '/login';
      });
  }

  let handleSetPathTitle = (t) => {
    setPathTitle(t);
  };

  let closeDropdownMenu = () => {
    setDropdownMenu(false);
  };

  return (
    <>
      <NavbarTopComponent
        setDropdownMenu={setDropdownMenu}
        pathTitle={pathTitle}
        isDropdownMenu={isDropdownMenu}
        user={user}
        isActive={isActive}
        logout={logout}
        handleSetPathTitle={handleSetPathTitle}
        closeDropdownMenu={closeDropdownMenu}
        currentPath={currentPath}
        onClickNotif={onClickNotif}
        onClick={onClick}
        isLoggedOut={isLoggedOut}
        isActiveNotif={isActiveNotif}
        dropdownNotif={dropdownNotif}
        dropdownRef={dropdownRef}
      />
    </>
  );
}
