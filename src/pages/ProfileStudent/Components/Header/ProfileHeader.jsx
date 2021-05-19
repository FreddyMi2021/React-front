import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { FiCamera } from 'react-icons/fi';
import { UPDATE_STUDENT_INFOS } from '../../../../services/mutations/MutationsStudents';
import Modal from 'react-modal';
import ImageEditor from './components/ImageEditor/ImageEditor';
import { RiCloseCircleLine } from 'react-icons/ri';
import SuccessNotification from './components/SuccessNotification/SuccessNotification'; //'./Components/SuccessNotification/SuccessNotification';
import { toast } from 'react-toastify';
import {
  decryptUser,
  encryptString,
  passwordKey,
} from '../../../../services/BaseUrl';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    margin: '40px 40px 40px 40px',
    height: 'auto',
  },
};

Modal.setAppElement('#root');

const currentUser = decryptUser(localStorage.getItem('currentUser'));

const ProfileHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [initImage, setInitImage] = useState('/images/avatar.png');

  const [
    updateStudentInfos,
    { loading: studentLoad, error: studentErr },
  ] = useMutation(UPDATE_STUDENT_INFOS, {
    onCompleted() {
      toast.success(
        <SuccessNotification message={'Modification photo de profile reussi'} />
      );
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    },
    ignoreResults: false,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (initImage) {
      updateStudentInfos({
        variables: {
          id: JSON.parse(currentUser).data.data.id,
          firstName: `${JSON.parse(currentUser).data.data.first_name}`,
          lastName: `${JSON.parse(currentUser).data.data.last_name}`,
          email: JSON.parse(currentUser).data.data.email,
          birthday: '',
          gender: '',
          image: initImage,
        },
      });
      let newCurrentUser = JSON.parse(currentUser);
      newCurrentUser.data.data.image = initImage;
      localStorage.setItem(
        'currentUser',
        encryptString(JSON.stringify(newCurrentUser), passwordKey)
      );
    }
  };

  return (
    <>
      <div className='bg-green-700 border-b-2 border-gray-50 py-5 px-10 h-auto'>
        <div className=' block relative'>
          <div className='w-full rounded-full border-4 border-gray-50'>
            <div className='w-full relative'>
              <img
                className='w-full rounded-full'
                src={
                  JSON.parse(currentUser).data.data.image !== null
                    ? JSON.parse(currentUser).data.data.image
                    : '/images/avatar.png'
                }
                alt='profil avatar'
              />
              <button
                className='text-gray-100 bg-gray-500 rounded-full p-2 xl:p-4 absolute bottom-0 right-0'
                onClick={(e) => setModalIsOpen(true)}
              >
                <FiCamera size='1.25em' />
              </button>
            </div>
          </div>
          <div className='w-full text-center mt-5 bottom-0 text-gray-50 '>
            <h3 className='font-semibold bottom-0 text-xl'>
              {JSON.parse(currentUser).data.data.first_name !== null &&
              JSON.parse(currentUser).data.data.last_name !== null
                ? `${JSON.parse(currentUser).data.data.first_name} ${
                    JSON.parse(currentUser).data.data.last_name
                  }`
                : ''}
            </h3>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
            className='modal bg-gray-50 z-50'
            overlayClassName='overlay-modal'
          >
            <button
              className='w-auto sticky top-0 float-right'
              type='button'
              style={{ transition: 'all .15s ease' }}
              onClick={() => setModalIsOpen(false)}
            >
              <RiCloseCircleLine
                className='inline-block float-right text-gray-600 hover:text-green-700'
                size='2em'
              />
            </button>
            <ImageEditor sourceImage={initImage} updateImage={setInitImage} />
            <div className='w-full flex justify-center'>
              {studentLoad ? (
                <button
                  className=' inline-block m-auto bg-green-500 px-16 mt-14 py-3 xl:py-4 focus:outline-none text-white rounded-full font-bold text-lg'
                  style={{ transition: 'all .15s ease' }}
                  // onClick={(e) => handleClick(e)}
                  disabled
                >
                  Processing...
                </button>
              ) : (
                <button
                  className=' inline-block m-auto bg-green-700 px-16 mt-14 py-3 xl:py-4 focus:outline-none text-white rounded-full font-bold text-lg'
                  style={{ transition: 'all .15s ease' }}
                  onClick={(e) => handleClick(e)}
                >
                  Submit
                </button>
              )}
              {studentErr ? (
                <p className='text-red-500'>error... please try again</p>
              ) : (
                ''
              )}
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};
export default ProfileHeader;
