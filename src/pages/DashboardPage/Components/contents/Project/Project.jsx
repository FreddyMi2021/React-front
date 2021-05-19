import React from 'react';
import { decryptUser } from '../../../../../services/BaseUrl';
import ProjectComponent from './ProjectComponent/ProjectComponent';

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(decryptUser(localStorage.getItem('currentUser')))
  : {};
const Project = (props) => {
  // uid: currentUser.authData.uid,
  //       client: currentUser.authData.client,
  //       'access-token': currentUser.authData['access-token'],

  return (
    <>
      <ProjectComponent
        studentId={currentUser.data.data.hex_id}
        count={props.count}
        uid={currentUser.authData.uid}
        client={currentUser.authData.client}
        access_token={currentUser.authData['access-token']}
      />
    </>
  );
};

export default Project;
