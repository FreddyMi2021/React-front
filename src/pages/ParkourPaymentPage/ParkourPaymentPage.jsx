import React, { useState } from 'react';
import axios from 'axios';
import HeaderPaymentnt from './components/HeaderPayment/HeaderPayment';

// export default ParkourPaymentPage;
import { CREATE_STUDENT_X_HEX } from '../../services/mutations/StudentXHexMutations';
import { CREATE_HEX_ID } from '../../services/mutations/MutationsStudents';
import { Redirect, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import StackPaymentComponent from './components/StackPaymentComponent/StackPaymentComponent';
import { STUDENT_X_HEX_BY_STUDENT } from '../../services/queries/StudentXHexQueries';
import { decryptUser } from '../../services/BaseUrl';

const currentUser = decryptUser(localStorage.getItem('currentUser'));

const ParkourPaymentPage = () => {
  const { hexProductId } = useParams();
  const [magicLink, setMagicLink] = useState(null);

  const {
    data: dataStudent,
    loading: loadingStudent,
    error: errorStudent,
  } = useQuery(STUDENT_X_HEX_BY_STUDENT(JSON.parse(currentUser).data.data.id));

  const [
    initStudentXHex,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(CREATE_STUDENT_X_HEX, {
    onCompleted: () => {
      localStorage.removeItem('hex_product');
      // window.location.href = magicLink;
    },
  });

  const [
    setHexId,
    {
      loading: mutationHexLoading,
      error: mutationHexError,
      data: mutationHexData,
    },
  ] = useMutation(CREATE_HEX_ID);

  const createHexStudent = () => {
    let student = JSON.parse(currentUser).data.data;
    let data = {
      email: student.email,
      first_name: student.first_name,
      last_name: student.last_name,
      product_id: parseInt(hexProductId),
    };
    axios({
      headers: {
        uid: JSON.parse(currentUser).authData.uid,
        client: JSON.parse(currentUser).authData.client,
        'access-token': JSON.parse(currentUser).authData['access-token'],
      },
      method: 'POST',
      url: 'https://school-api.sayna.io/hex/students/',
      data: data,
    }).then((res) => {
      if (res.data.errors === undefined) {
        console.log('createHexStudent', res.data);
        setHexId({
          variables: {
            id: parseInt(JSON.parse(currentUser).data.data.id),
            hexId: parseInt(res.data.id),
          },
        });
        createMagickLink(res.data.id);
      } else {
        console.log('createHexStudent', res.data);
      }
    });
  };

  const createMagickLink = (studentHexId) => {
    axios({
      headers: {
        uid: JSON.parse(currentUser).authData.uid,
        client: JSON.parse(currentUser).authData.client,
        'access-token': JSON.parse(currentUser).authData['access-token'],
      },
      method: 'POST',
      url:
        'https://school-api.sayna.io/hex/students/' +
        studentHexId +
        '/magic_links',
      data: {},
    }).then((res) => {
      console.log('createMagickLink', res.data);
      if (res.data.errors === undefined) {
        setMagicLink(res.data.url);
        initTheHex();
      } else {
        console.log('createMagickLink', res.data);
      }
    });
  };

  const initTheHex = () => {
    initStudentXHex({
      variables: {
        studentId: parseInt(JSON.parse(currentUser).data.data.id),
        hexProductId: parseInt(hexProductId),
      },
    });
  };

  if (dataStudent) {
    return <Redirect to='/catalogue' />;
  }

  return (
    <>
      <HeaderPaymentnt />
      {magicLink !== null ? (
        <a href={magicLink}>VERS HEX</a>
      ) : (
        <StackPaymentComponent createHexStudent={createHexStudent} />
      )}
    </>
  );
};

export default ParkourPaymentPage;
