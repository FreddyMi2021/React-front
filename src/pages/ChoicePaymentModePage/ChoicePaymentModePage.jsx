import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { decryptUser } from '../../services/BaseUrl';
import DirectModePaymentCard from './components/DirectModePaymentCard/DirectModePaymentCard';
import SliceModePaymentCard from './components/SliceModePaymentCard/SliceModePaymentCard';

const currentUser = JSON.parse(
  decryptUser(localStorage.getItem('currentUser'))
);

export const ChoicePaymentModePage = () => {
  const [hexProductId, setHexProductId] = useState(null);

  const getHexProducts = () => {
    Axios.get('https://school-api.sayna.io/hex/products', {
      headers: {
        uid: currentUser.authData.uid,
        client: currentUser.authData.client,
        'access-token': currentUser.authData['access-token'],
      },
    }).then((res) => {
      if (res.data.errors === undefined) {
        if (hexProductId === null) {
          setHexProductId(res.data.items[0].id);
          // localStorage.setItem("hex_product", JSON.stringify(res.data.items[0]))
        }
      }
    });
  };

  useEffect(() => {
    getHexProducts();
  });

  return (
    <>
      <div className='w-full h-screen overflow-y-scroll pb-40 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8'>
          <h2 className='text-gray-500 font-bold text-center py-12'>
            MODE PAIEMENT
          </h2>
          <div className='flex flex-row space-x-12 justify-center mt-8'>
            {hexProductId === null ? (
              <>LOADING...</>
            ) : (
              <>
                <DirectModePaymentCard
                  productId={hexProductId}
                  studentId={currentUser.data.data.id}
                />
                <SliceModePaymentCard productId={hexProductId} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
