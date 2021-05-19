import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ParcourComponent from './ParcourComponent/ParcoursComponent';
import { decryptUser } from '../../../../../services/BaseUrl'; //'../../../../../../services/BaseUrl';

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(decryptUser(localStorage.getItem('currentUser')))
  : {};

const Parkour = (props) => {
  const [parkour, setParkour] = useState(null);

  useEffect(() => {
    getHexParkour();
  });

  const getHexParkour = () => {
    axios
      .get('https://school-api.sayna.io/hex/products', {
        headers: {
          uid: currentUser.authData.uid,
          client: currentUser.authData.client,
          'access-token': currentUser.authData['access-token'],
        },
      })
      .then((res) => {
        if (parkour === null) {
          setParkour(res.data.items);
        }
      });
  };
  if (parkour) props.count(parkour.length);
  return (
    <>
      {parkour !== null ? (
        <ParcourComponent parkour={parkour} />
      ) : (
        <div className='w-full text-center'>
          <span className='pl-5 uppercase text-gray-500 font-bold'>
            No path
          </span>
        </div>
      )}
    </>
  );
};
export default Parkour;
