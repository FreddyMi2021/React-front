import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiFlagLine,
  RiQuestionAnswerLine,
  RiCodeSSlashLine,
  RiTeamLine,
  RiDashboard3Line,
} from 'react-icons/ri';
import { decryptUser } from '../../services/BaseUrl';

const currentUser = decryptUser(localStorage.getItem('currentUser'));

export default function NavbarBottom() {
  return (
    <>
      <div className="fixed w-full bottom-0 left-0 right-0 bg-gray-100 p-5 z-50">
        <ul className="flex flex-row justify-center">
          {currentUser ? (
            <>
              <li className='w-1/5 text-center'>
                <Link to='/' className='text-gray-400 w-full'>
                  <RiDashboard3Line
                    size='1.5em'
                    className='text-gray-400 inline-block'
                  />
                  <span className='text-semibold ml-3 hidden sm:inline-block'>
                    Dashboard
                  </span>
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
          {currentUser ? (
            <>
              <li className='w-1/5 text-center'>
                <Link to='/catalog' className='text-gray-400 w-full'>
                  <RiFlagLine
                    size='1.5em'
                    className='text-gray-400 inline-block'
                  />
                  <span className='text-semibold ml-3 hidden sm:inline-block'>
                    Catalog
                  </span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='w-1/5 text-center'>
                <Link to='/' className='text-gray-400 w-full'>
                  <RiFlagLine
                    size='1.5em'
                    className='text-gray-400 inline-block'
                  />
                  <span className='text-semibold ml-3 hidden sm:inline-block'>
                    Catalog
                  </span>
                </Link>
              </li>
            </>
          )}

          {currentUser ? (
            <>
              <li className='w-1/5 text-center'>
                <a href='#' className='text-gray-400 w-full'>
                  <span class='relative inline-block'>
                    <RiTeamLine
                      size='1.5em'
                      className='text-gray-400 inline-block'
                    />
                    <span className='text-semibold ml-3 hidden sm:inline-block'>
                      Community
                    </span>
                    <span class='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-10 -translate-y-3 bg-yellow-500 rounded-full'>
                      Soon
                    </span>
                  </span>
                </a>
              </li>

              <li className='w-1/5 text-center'>
                <a href='#' className='text-gray-400 w-full'>
                  <span class='relative inline-block'>
                    <RiCodeSSlashLine
                      size='1.5em'
                      className='text-gray-400 inline-block'
                    />
                    <span className='text-semibold ml-3 hidden sm:inline-block'>
                      Code
                    </span>
                    <span class='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-10 -translate-y-3 bg-yellow-500 rounded-full'>
                      Soon
                    </span>
                  </span>
                </a>
              </li>
              <li className='w-1/5 text-center'>
                <a to='#' className='text-gray-400 w-full'>
                  <span class='relative inline-block'>
                    <RiQuestionAnswerLine
                      size='1.5em'
                      className='text-gray-400 inline-block'
                    />
                    <span className='text-semibold ml-3 hidden sm:inline-block'>
                      Discussions
                    </span>
                    <span class='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-10 -translate-y-3 bg-yellow-500 rounded-full'>
                      Soon
                    </span>
                  </span>
                </a>
              </li>
            </>
          ) : (
            // <>
            // <li className="w-1/5 text-center">
            //   <Link to="/community" className="text-gray-400 w-full">
            //     <RiTeamLine size="1.5em" className="text-gray-400 inline-block" />
            //     <span className="text-semibold ml-3 hidden sm:inline-block">Communautes</span>
            //   </Link>
            // </li>

            // <li className="w-1/5 text-center">
            //   <Link to="/code" className="text-gray-400 w-full">
            //     <RiCodeSSlashLine size="1.5em" className="text-gray-400 inline-block" />
            //     <span className="text-semibold ml-3 hidden sm:inline-block">Code</span>
            //   </Link>
            // </li>
            // <li className="w-1/5 text-center">
            //   <Link to="/discuss" className="text-gray-400 w-full">
            //     <RiQuestionAnswerLine size="1.5em" className="text-gray-400 inline-block" />
            //     <span className="text-semibold ml-3 hidden sm:inline-block">Discussions</span>
            //   </Link>
            // </li>
            // </>
            <></>
          )}
        </ul>
      </div>
    </>
  );
}
