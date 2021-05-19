import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { PAGINATE_PATHS } from '../../../../services/queries/PathsQueries';

import '../../styles/dropdownMenu.css';
import CardPath from './CardPath/CardPath';
import Navsticky from './Sticky/Navsticky';
import StackCard from './StackCard/StackCard';
import Axios from 'axios';
import { BiAlarm, BiAlarmOff } from 'react-icons/bi';
import { decryptUser } from '../../../../services/BaseUrl'; //'../../services/BaseUrl';

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(decryptUser(localStorage.getItem('currentUser')))
  : {};

function DropdownMenuPath(props) {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getHexProduct();
  });

  const getHexProduct = () => {
    Axios.get('https://school-api.sayna.io/hex/products', {
      headers: {
        uid: currentUser.authData.uid,
        client: currentUser.authData.client,
        'access-token': currentUser.authData['access-token'],
      },
    }).then((res) => {
      if (products === null) {
        setProducts(res.data.items);
      }
    });
  };

  return (
    <>
      <div className='z-40 absolute w-full bg-white p-5 shadow-lg'>
        <div className='content-path flex flex-row'>
          {products ? (
            products.map((product) => (
              <StackCard
                key={product.id}
                product={product}
                closeDropdownMenu={props.closeDropdownMenu}
              />
            ))
          ) : (
            <>
              <div className='animate-pulse w-96 h-96 p-4 bg-gray-50 flex-shrink-0 rounded-lg shadow-lg m-4'>
                <div className='rounded-lg h-1/2 overflow-hidden'>
                  <div className='rounded-lg w-full bg-gray-200 h-96'></div>
                </div>
                <p className='text-left text-2xl text-gray-600 font-bold mt-8'>
                  <span className='inline-block py-1 bg-gray-200 w-1/3'></span>
                  <span className='relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-14 py-5 bg-purple-400 text-white text-lg'></span>
                </p>

                <p className='text-left font-light p-2 mt-8'>
                  <BiAlarmOff
                    size='1.5em'
                    className='inline text-gray-600 opacity-50'
                  />
                  &nbsp;
                  <span className='inline-block py-1 bg-gray-200 w-1/3'></span>
                </p>
                <p className='text-left font-light p-2'>
                  <BiAlarm
                    size='1.5em'
                    className='inline text-gray-600  opacity-50'
                  />
                  &nbsp;
                  <span className='inline-block py-1 bg-gray-200 w-1/3'></span>
                </p>
              </div>

              <div className='animate-pulse w-96 h-96 p-4 bg-gray-50 flex-shrink-0 rounded-lg shadow-lg m-4'>
                <div className='rounded-lg h-1/2 overflow-hidden'>
                  <div className='rounded-lg w-full bg-gray-200 h-96'></div>
                </div>
                <p className='text-left text-2xl text-gray-600 font-bold mt-8'>
                  <span className='inline-block py-1 bg-gray-200 w-1/3'></span>
                  <span className='relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-14 py-5 bg-purple-400 text-white text-lg'></span>
                </p>

                <p className='text-left font-light p-2 mt-8'>
                  <BiAlarmOff
                    size='1.5em'
                    className='inline text-gray-600 opacity-50'
                  />
                  &nbsp;
                  <span className='inline-block py-1 bg-gray-200 w-1/3'></span>
                </p>
                <p className='text-left font-light p-2'>
                  <BiAlarm
                    size='1.5em'
                    className='inline text-gray-600  opacity-50'
                  />
                  &nbsp;
                  <span className='inline-block py-1 bg-gray-200 w-1/3'></span>
                </p>
              </div>

              <div className='animate-pulse w-96 h-96 p-4 bg-gray-50 flex-shrink-0 rounded-lg shadow-lg m-4'>
                <div className='rounded-lg h-1/2 overflow-hidden'>
                  <div className='rounded-lg w-full bg-gray-200 h-96'></div>
                </div>
                <p className='text-left text-2xl text-gray-600 font-bold mt-8'>
                  <span className='inline-block py-1 bg-gray-200 w-1/3'></span>
                  <span className='relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-14 py-5 bg-purple-400 text-white text-lg'></span>
                </p>

                <p className='text-left font-light p-2 mt-8'>
                  <BiAlarmOff
                    size='1.5em'
                    className='inline text-gray-600 opacity-50'
                  />
                  &nbsp;
                  <span className='inline-block py-1 bg-gray-200 w-1/3'></span>
                </p>
                <p className='text-left font-light p-2'>
                  <BiAlarm
                    size='1.5em'
                    className='inline text-gray-600  opacity-50'
                  />
                  &nbsp;
                  <span className='inline-block py-1 bg-gray-200 w-1/3'></span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Sticky navmenu */}
      {/* <div className="z-50 w-72 h-auto float-right text-center sticky bg-gray-50 transform translate-y-7 right-8 py-6 shadow-md">
        <Navsticky paths={ data.paths }  closeDropdownMenu={ props.closeDropdownMenu } />
      </div> */}
      {/* Fin sticky navmenu */}
    </>
  );
}

export default DropdownMenuPath;
