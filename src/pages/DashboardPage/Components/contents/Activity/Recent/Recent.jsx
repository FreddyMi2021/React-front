import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CurrentProject from './Components/RecentCards/CurrentProject';
import { decryptUser } from '../../../../../../services/BaseUrl';

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(decryptUser(localStorage.getItem('currentUser')))
  : {};

const Recent = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const getStudentHex = (studentHexId) => {
    Axios.get('https://school-api.sayna.io/hex/students/' + studentHexId, {
      headers: {
        uid: currentUser.authData.uid,
        client: currentUser.authData.client,
        'access-token': currentUser.authData['access-token'],
      },
    }).then((res) => {
      if(res.data.errors === undefined && currentProject === null) {
        setCurrentProject(res.data.current_project);
      }
    });
  };

  useEffect(() => {
    getStudentHex(currentUser.data.data.hex_id);
  });

  return (
    <div className='pb-60'>
      <h1 className='text-center md:text-left mb-4 px-6 py-4 font-semibold uppercase text-gray-500 dark:text-gray-300'>
        RECENT ACTIVITY
      </h1>
      {currentProject !== null ? (
        <CurrentProject
          userName={currentUser.data.data.first_name}
          current={currentProject}
        />
      ) : (
        <div className='w-full text-center'>
          <span className='pl-5 uppercase text-gray-500 font-bold'>
            No activity
          </span>
        </div>
      )}
    </div>
  );
};

export default Recent;
