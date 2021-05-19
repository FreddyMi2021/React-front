import React from 'react';
import { GiBullseye } from 'react-icons/gi';

const CurrentProject = (props) => {
  // const date1 = new Date(props.createdAt);
  // const date2 = new Date(Date.now());

  //   console.log(date2 - date1);
  // const diffTime = Math.abs(date2 - date1);
  // const timePassed = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // console.log(timePassed);

  return (
    <>
      <div className='w-full mt-8 py-4 mx-auto border-gray-500 shadow-lg'>
        <div className='pt-3 px-6 mx-auto'>
          <div className='py-4'>
            <div className='flex items-center text-gray-800'>
              <div className='w-full'>
                <div className='grid grid-cols-12'>
                  <div className='col-span-12 sm:col-span-2 md:col-span-2'>
                    <div className='float-left'>
                      <div className='w-16 h-16 rounded-full text-white bg-indigo-800 text-center ml-4'>
                        <div
                          className='font-bold text-lg font-bold'
                          style={{ lineHeight: '4rem' }}
                        >
                          {props.userName ? props.userName.split('')[0] : 'M'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-12 sm:col-span-10  md:col-span-10'>
                    <label className='mb-4 font-semibold text-gray-500 dark:text-gray-300'>
                      <span className='text-green-500 text-lg font-semibold'>
                        {props.userName + ' '}
                      </span>
                      {
                        props.current.completion === 0 ? (
                          <>a commencé le projet { props.current.name.split('.')[1] }</>
                        ) : (
                          <>a achevé le projet { props.current.name.split('.')[1] }</>
                        )
                      }
                    </label>
                    <div className='block text-center m-auto sm:flex flex-row bg-white rounded py-4'>
                      {/* PIC */}
                      <div className='w-24 h-24 bg-indigo-800 text-center'>
                        <div
                          className='font-bold text-lg text-white font-bold'
                          style={{ lineHeight: '6rem' }}
                        >
                          <GiBullseye size="4.5em" className="inline" />
                        </div>
                      </div>
                      {/* END PIC */}
                      {/* TITLE */}
                      <div
                        className='text-lg text-gray-500 ml-4'
                        // style={{ lineHeight: '6rem' }}
                      >
                        { props.current.name.split('.')[1] }
                      </div>
                      {/* END TITLE */}
                    </div>
                    {/* <label className='mb-4 float-right -mt-7 font-semibold text-gray-500 dark:text-gray-300'>
                      {timePassed + ' j'}
                    </label> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {End box 1} */}
    </>
  );
};

export default CurrentProject;
