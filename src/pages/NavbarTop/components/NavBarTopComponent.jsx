import React from 'react';

import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiShutDownLine,
  RiNotification3Line,
  RiLogoutCircleRLine,
} from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import Notification from './Notification/Notification';
import { Link, Redirect } from 'react-router-dom';
import DropdownMenuPath from './DropdownMenuPath/DropdownMenuPath';

const NavbarTopComponent = ({
  setDropdownMenu,
  pathTitle,
  isDropdownMenu,
  user,
  isActive,
  logout,
  handleSetPathTitle,
  closeDropdownMenu,
  currentPath,
  onClickNotif,
  onClick,
  isLoggedOut,
  dropdownNotif,
  isActiveNotif,
  dropdownRef,
}) => {
  return (
    <>
      <div className="bg-green-700 flex flex-row p-5 relative z-40">
        <a
          onClick={(e) => setDropdownMenu(!isDropdownMenu)}
          className="text-left text-lg text-white font-semibold w-1/4 inline-block"
        >
          {pathTitle}

          {isDropdownMenu ? (
            <RiArrowUpSLine className="inline" size="2em" />
          ) : (
            <RiArrowDownSLine className="inline" size="2em" />
          )}
        </a>
        {user && user.authData ? (
          <>
            <div className="menu-container inline-block float-right text-white absolute right-0 mr-5 z-50">
              <a onClick={onClick} className="menu-trigger">
                <img
                  className="cursor-pointer flex mb-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white w-8"
                  src={
                    user.data.data.image && user.data.data.image !== null
                      ? user.data.data.image
                      : '/images/avatar.png'
                  }
                  alt="profil avatar"
                />
              </a>
              <div
                ref={dropdownRef}
                className={`menu ${isActive ? 'active' : 'inactive'} z-50`}
              >
                <Link
                  to="/profileStudent"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 z-50"
                >
                  <FaRegUserCircle className="inline mr-4" size="1em" />
                  <span className="inline text-gray-400 text-md font-bold">
                    My profile
                  </span>
                </Link>
                <hr />
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 z-50"
                  onClick={(e) => logout()}
                >
                  <RiLogoutCircleRLine className="inline mr-4" size="1em" />
                  <span className="inline text-gray-400 text-md font-bold">
                    Log out
                  </span>
                </a>
              </div>
            </div>

            <div className="inline-block float-right text-white absolute  right-14 mr-5">
              <span className="relative inline-block">
                <RiNotification3Line
                  size="2em"
                  className="cursor-pointer"
                  onClick={onClickNotif}
                />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  15
                </span>
              </span>
              <div
                ref={dropdownNotif}
                className={`menu ${isActiveNotif ? 'active' : 'inactive'}`}
              >
                <Notification />
              </div>
            </div>
          </>
        ) : (
          <Link
            className="block float-right text-white absolute right-0 mr-5"
            to="/login"
          >
            <RiShutDownLine size="2em" />
          </Link>
        )}

        {isLoggedOut ? <Redirect to="/login" /> : <span></span>}
      </div>
      {isDropdownMenu ? (
        <DropdownMenuPath
          className="block"
          closeDropdownMenu={closeDropdownMenu}
          handleSetPathTitle={handleSetPathTitle}
        />
      ) : (
        <span></span>
      )}
    </>
  );
};

export default NavbarTopComponent;
