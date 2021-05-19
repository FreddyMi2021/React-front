import React from 'react';
import { decryptUser } from '../../../../services/BaseUrl';
import Nationality from './Nationality/Nationality';

const currentUser = decryptUser(localStorage.getItem('currentUser'));

const Header = () => {
  const user = JSON.parse(currentUser).data.data;
  // console.log(user);
  return (
    <>
      <div className='bg-green-700 h-18 flex flex-row p-5 border-b-2 border-gray-100 relative'>
        <div className='justify-center block text-center mx-auto relative'>
          <div className='w-full'>
            <img
              className='w-1/3 m-auto rounded-full'
              src={user.image !== null ? user.image : '/images/avatar.png'}
              alt='profil avatar'
            />
          </div>
          <div className='mt-6 text-gray-100 '>
            <h3 className='font-semibold text-xl'>{user.first_name}</h3>
          </div>
          <div className='mt-2 text-gray-100 '>
            {/* <h3 className='font-semibold text-xl'>{user.nationality}</h3> */}
            <Nationality nationality={user.nationality} id={user.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
