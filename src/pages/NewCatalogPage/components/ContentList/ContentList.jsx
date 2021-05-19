import React, { useEffect, useState, useRef } from 'react';
import robot from './robotCode.png';
import Axios from 'axios';
import { BeginButton } from './components/BeginButton';
import SeeMore from './components/SeeMore';
import { AboutFitherPro } from './components/AboutFitherPro/AboutFitherPro';
import { HowiLearn } from './components/HowILearn/HowILearn';
import { GoRepo } from 'react-icons/go';
import { decryptUser } from '../../../../services/BaseUrl';

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(decryptUser(localStorage.getItem('currentUser')))
  : {};

export default function ContentList() {
  const [showModal, setShowModal] = useState(false);
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
      // console.log(res.data.items)
      if (products === null) {
        setProducts(res.data.items);
      }
    });
  };
  return (
    <>
      <div>
        <div className='w-full bg-white z-10'>
          <div className='p-4 md:flex flex-row'>
            <div className='w-full md:w-2/3 lg:w-3/5 xl:w-4/6 px-4 md:px-10'>
              <div className='w-full'>
                <p className='text-left text-4xl text-gray-600 font-bold mt-8'>
                  Fighter program
                </p>
                <div className='m-auto flex flex-row mt-5 text-semibold text-gray-500'>
                  <span className='grid grid-cols-2 grap-4 mr-5'>
                    <span className='inline-block'>
                      <GoRepo size='1.5em' className='text-gray-500 inline' />
                      &nbsp; <i className='inline font-bold'>80 projects</i>
                    </span>
                  </span>
                </div>
              </div>
              <p className='text-justify md:text-left font-light p-2 mt-8 text-gray-600'>
                Web development is one of the fastest-growing careers. With this
                self-paced program designed in Silicon Valley, students will
                learn the skills to become a Full Stack Web Developer. In as
                little as 12 months, students will be ready to create modern,
                robust web applications.
                {/* &nbsp;<a className="text-lg cursor-pointer text-green-600 hover:text-green-700 underline outline-none focus:outline-none"
										type='button'
										style={{ transition: 'all .4s ease' }}
										onClick={() => setShowModal(true)}
									>
										see more
									</a> */}
              </p>
              <div className='w-full m-auto'>
                <BeginButton products={products} />
              </div>
              <div className='relative'>
                {showModal ? (
                  <>
                    <SeeMore setShowModal={setShowModal} />
                  </>
                ) : null}
              </div>
            </div>

            <div className='w-full mt-4 md:mt-0 md:w-1/3 lg:w-2/5 xl:w-2/6 bg-green-700 rounded-lg py-8 text-center'>
              <img
                className='lg:h-60 xl:h-60 inline-block'
                src={robot}
                alt='robotCode'
              />
            </div>
          </div>
        </div>
        <div className='w-full p-4 md:pr-2'>
          <AboutFitherPro />
          <HowiLearn />
        </div>
      </div>
    </>
  );
}
