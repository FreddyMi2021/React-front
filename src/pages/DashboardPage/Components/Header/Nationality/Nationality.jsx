import React, { useState, useMemo } from 'react';
import { FaPen, FaCheckCircle } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useMutation } from '@apollo/client';
import { UPDATE_STUDENT_NATIONALITY } from '../../../../../services/mutations/MutationsStudents';
import {
  decryptUser,
  encryptString,
  passwordKey,
} from '../../../../../services/BaseUrl';
import Flags from './Flags/Flags';

const Nationality = ({ nationality, id }) => {
  const currentUser = JSON.parse(
    decryptUser(localStorage.getItem('currentUser'))
  );
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(nationality || '');
  const options = useMemo(() => countryList().getData(), []);
  // console.log(currentUser);

  const [updateStudentNationality] = useMutation(UPDATE_STUDENT_NATIONALITY, {
    onCompleted() {
      window.location.reload();
    },
    ignoreResults: false,
  });

  // useEffect(() => {
  //   if (nationality !== null && nationality !== '') {
  //     setValue(nationality.split(',')[0]);
  //   }
  // }, []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const handleClick = () => {
    if (value !== '') {
      updateStudentNationality({
        variables: {
          id: parseInt(id),
          nationality: `${value.label},${value.value}`,
        },
      });
      let newCurrentUser = currentUser;
      newCurrentUser.data.data.nationality = `${value.label},${value.value}`;
      localStorage.setItem(
        'currentUser',
        encryptString(JSON.stringify(newCurrentUser), passwordKey)
      );
    }
  };

  // console.log(currentUser.data.data.nationality.value);

  return (
    <div className='flex justify-center flex-row items-center '>
      <div className='flex items-center mr-2 justify-center'>
        <h3 className='font-semibold text-md mr-2'>
          {nationality !== null && nationality !== ''
            ? nationality.split(',')[0]
            : 'Your nationality'}
        </h3>
        <div style={{ width: '25px', height: 'auto' }}>
          <Flags
            countryCode={
              nationality !== null && nationality !== ''
                ? nationality.split(',')[1]
                : 'MG'
            }
          />
        </div>
      </div>
      <button className='text-md' onClick={() => setShowModal(true)}>
        <FaPen />
      </button>

      <div
        style={{ display: `${showModal ? 'block' : 'none'}` }}
        className={`origin-top-right absolute mt-2 w-72 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='options-menu'
      >
        <div
          className='flex flex-row justify-evenly items-center'
          style={{ color: '#000' }}
        >
          <Select
            options={options}
            value={value}
            onChange={changeHandler}
            className=' w-8/12 z-100'
          />
          <button
            className='p-1 bg-green-500 border-0 rounded-lg leading-none outline-none focus:outline-none'
            onClick={() => handleClick()}
          >
            <FaCheckCircle className='bg-transparent text-white h-6 w-6 block outline-none focus:outline-none' />
          </button>
          <button
            className='p-1 bg-red-500 border-0 rounded-lg leading-none outline-none focus:outline-none'
            onClick={() => setShowModal(false)}
          >
            <AiFillCloseCircle className='bg-transparent text-white h-6 w-6 block outline-none focus:outline-none' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nationality;
