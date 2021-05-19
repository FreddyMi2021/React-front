import React from 'react';

const RecentBadgeLearning = (props) => {
  const date1 = new Date(props.updatedAt);
  const date2 = new Date(Date.now());

  //   console.log(date2 - date1);
  const diffTime = Math.abs(date2 - date1);
  const timePassed = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <>
      <div className='h-32 flex flex-row  shadow-md rounded-md'>
            <div className='bg-gray-500 w-24 text-center'>
              <div
                className='font-bold text-lg text-white font-bold'
                style={{ lineHeight: '8rem' }}
              >
                LEARNING
              </div>
            </div>
          <div className='bg-green-600 flex flex-col border-l-2 border-gray-50 flex-grow p-2'>
            <div className='font-bold uppercase text-lg text-gray-50'>
              {props.learningTitle}
            </div>
            {/* <div className='font-semibold pt-2 text-lg text-left text-white'>
              
            </div> */}
            
            <div className='w-100 rounded-b-xl mt-12'>
                <p className='font-semibold pt-2 pr-2 text-right text-sm  text-gray-100'>
                Temps passee: {timePassed + 'jours'}
                </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default RecentBadgeLearning;
