import React, { useState, useRef, useEffect } from 'react';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import {
  FaUserTie,
  FaMapMarkerAlt,
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaCircleNotch,
} from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { BsCloudUpload } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Style/PhoneNumber.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Styles/OtherComp.css';
import { BASIC_INFORMATION_BY_STUDENT_ID } from '../../../../../services/queries/BasicInformationQueries';
import {
  CREATE_BASIC_INFORMATION,
  UPDATE_BASIC_INFORMATION,
} from '../../../../../services/mutations/BasicInformationMutations';
import { UPDATE_STUDENT_INFOS } from '../../../../../services/mutations/MutationsStudents'; //'../../../../services/mutations/MutationsStudents';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ErrorNotification from './Components/ErrorNotification/ErrorNotification';
import SuccessNotification from './Components/SuccessNotification/SuccessNotification';
import {
  decryptUser,
  encryptString,
  passwordKey,
} from '../../../../../services/BaseUrl';
import FadeLoader from 'react-spinners/FadeLoader';

export default function BasicInformations() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#105a3f');

  const currentUser = JSON.parse(
    decryptUser(localStorage.getItem('currentUser'))
  );
  // console.log(currentUser);

  const { loading: BILoading, error: BIError, data: BIData } = useQuery(
    BASIC_INFORMATION_BY_STUDENT_ID(parseInt(currentUser.data.data.id))
  );

  const { phone, setPhone } = useState('');

  // fullName, studyLevel, phoneNumber, adress, dateBirth, filiere

  // Field basic info
  const [errMsg, setErrMsg] = useState('');
  const [nom, setNom] = useState(currentUser.data.data.last_name || '');
  const [prenom, setPrenom] = useState(currentUser.data.data.first_name || '');
  // const [studyLevel, setStudyLevel] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [adress, setAdress] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [emailAdress, setEmailAdress] = useState('');
  // const [gender, setGender] = useState('');
  // const [ambition, setAmbition] = useState('');
  // const [filiere, setFiliere] = useState('');
  const [experience, setExperience] = useState('');
  const [resum, setResum] = useState('');
  const [identity, setIdentity] = useState('');
  const [webSiteUrl, setWebSiteUrl] = useState('');
  const [languages, setLanguages] = useState('');

  const [text64Resum, setText64Resum] = useState('');
  const [text64Id, setText64Id] = useState('');

  // languages --> github
  // experiences --> linkedin
  // websiteURL --> portfolio

  const [
    updateStudentInfos,
    { loading: studentLoad, error: studentErr },
  ] = useMutation(UPDATE_STUDENT_INFOS, {
    onCompleted() {
      toast.success(
        <SuccessNotification
          message={'Information basique enregistree avec succes'}
        />
      );
      window.top.location.reload();
    },
    ignoreResults: false,
  });

  const [
    createBasicInfo,
    { loading: createLoad, error: createErr, data: createData },
  ] = useMutation(CREATE_BASIC_INFORMATION, {
    onCompleted() {
      toast.success(
        <SuccessNotification
          message={'Information basique enregistree avec succes'}
        />
      );
      setTimeout(() => {
        window.top.location.reload();
      }, 1000);
    },
  });

  const [
    updateBasicInfo,
    { loading: updateLoad, error: updateErr, data: updateData },
  ] = useMutation(UPDATE_BASIC_INFORMATION, {
    onCompleted() {
      toast.success(
        <SuccessNotification
          message={'Information basique enregistree avec succes'}
        />
      );
      setTimeout(() => {
        window.top.location.reload();
      }, 1000);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (BIData !== undefined && BIData.basicInformationByStudentId !== null) {
      setPhoneNumber(BIData.basicInformationByStudentId.phoneNumber);
      setAdress(BIData.basicInformationByStudentId.adress);
      setDateBirth(BIData.basicInformationByStudentId.dateBirth);
      setEmailAdress(BIData.basicInformationByStudentId.emailAdress);

      setExperience(BIData.basicInformationByStudentId.experience);
      setText64Resum(BIData.basicInformationByStudentId.resumPic);
      setText64Id(BIData.basicInformationByStudentId.identityPic);
      setWebSiteUrl(BIData.basicInformationByStudentId.webSiteUrl);
      setLanguages(BIData.basicInformationByStudentId.languages);
    }
  }, [BIData]);

  if (BILoading) {
    return (
      <div className='text-center align-middle'>
        <div className='sweet-loading transform translate-y-1/2 align-middle'>
          <FadeLoader color={color} loading={loading} size={500} />
        </div>
      </div>
    );
  }

  if (BIError) {
    localStorage.removeItem('currentUser');
    window.location.href = '/login_page';
  }

  // console.log(new Date(dateBirth));

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (nom === '' || phoneNumber === '' || adress === '' || dateBirth === '') {
      toast.error(
        <ErrorNotification message={'Les champs avec (*) sont obligatoire '} />
      );
      setErrMsg('Fields with (*) need to be filled');
    } else {
      if (BIData !== null && BIData.basicInformationByStudentId !== null) {
        updateBasicInfo({
          variables: {
            id: parseInt(BIData.basicInformationByStudentId.id),
            fullName: `${nom} ${prenom}`,
            studyLevel: '',
            phoneNumber: phoneNumber,
            adress: adress,
            dateBirth: dateBirth,
            emailAdress: emailAdress,
            gender: '',
            ambition: '',
            filiere: '',
            experience: experience, //LinkedIn URL
            resumPic: text64Resum,
            identityPic: text64Id,
            webSiteUrl: webSiteUrl, //Portfolio URL
            funFact: '',
            phoneNumber2: '',
            languages: languages, //Github URL
            wishPath: ``,
            interest: '',
            jobType: ``,
            wishSkill: ``,
            payMode: ``,
            studentId: parseInt(currentUser.data.data.id),
          },
        });
        updateStudentInfos({
          variables: {
            id: currentUser.data.data.id,
            firstName: `${prenom}`,
            lastName: `${nom}`,
            email: currentUser.data.data.email,
            birthday: new Date(dateBirth),
            gender: '',
            image: `${currentUser.data.data.image}`,
          },
        });
        let newCurrentUser = currentUser;
        newCurrentUser.data.data.first_name = prenom;
        newCurrentUser.data.data.last_name = nom;
        newCurrentUser.data.data.birthday = dateBirth;
        newCurrentUser.data.data.gender = '';
        localStorage.setItem(
          'currentUser',
          encryptString(JSON.stringify(newCurrentUser), passwordKey)
        );
      } else {
        createBasicInfo({
          variables: {
            fullName: `${nom} ${prenom}`,
            studyLevel: '',
            phoneNumber: phoneNumber,
            adress: adress,
            dateBirth: dateBirth,
            emailAdress: emailAdress,
            gender: '',
            ambition: '',
            filiere: '',
            experience: experience,
            resumPic: text64Resum,
            identityPic: text64Id,
            webSiteUrl: webSiteUrl,
            funFact: '',
            phoneNumber2: '',
            languages: languages,
            wishPath: ``,
            interest: '',
            jobType: ``,
            wishSkill: ``,
            payMode: ``,
            studentId: parseInt(currentUser.data.data.id),
          },
        });
        updateStudentInfos({
          variables: {
            id: currentUser.data.data.id,
            firstName: `${prenom}`,
            lastName: `${nom}`,
            email: currentUser.data.data.email,
            birthday: new Date(dateBirth),
            gender: '',
            image: currentUser.data.data.image,
          },
        });
        let newCurrentUser = currentUser;
        newCurrentUser.data.data.first_name = prenom;
        newCurrentUser.data.data.last_name = nom;
        newCurrentUser.data.data.birthday = dateBirth;
        newCurrentUser.data.data.gender = '';
        localStorage.setItem(
          'currentUser',
          encryptString(JSON.stringify(newCurrentUser), passwordKey)
        );
      }
    }
  };

  // Get all values of the checkboxes

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (resum) {
        reader.readAsDataURL(file);
      }
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  let base64Text1 = '';
  async function Main() {
    const file1 = resum;
    base64Text1 = await toBase64(file1);
    setText64Resum(base64Text1);
  }

  Main();

  const toBase64Id = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (identity) {
        reader.readAsDataURL(file);
      }
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  let base64Text2 = '';
  async function Main2() {
    const file2 = identity;
    base64Text2 = await toBase64Id(file2);
    setText64Id(base64Text2);
  }

  Main2();

  // img validation

  const handleResumPic = (e) => {
    const file = e.target.files[0];
    if (file.size > 10485760) {
      toast.error(
        <ErrorNotification
          message={"Fichier trop volumineux ('moins de 10Mb seulement') "}
        />
      );
      setResum('');
    } else {
      setResum(file);
    }
  };

  const handleIdPic = (e) => {
    const file = e.target.files[0];
    if (file.size > 10485760) {
      toast.error(
        <ErrorNotification
          message={"Fichier trop volumineux ('moins de 10Mb seulement') "}
        />
      );
      setIdentity('');
    } else {
      setIdentity(file);
    }
  };

  // ERROR MESSAGE

  // if (nom === '' || phoneNumber === '' || adress === '' || dateBirth === '') {
  //   setErrMsg('Fields with (*) need to filled before submitting');
  // } else if (studentErr || updateErr || createErr) {
  //   setErrMsg('Error, please try again');
  // } else {
  //   setErrMsg('');
  // }

  return (
    <>
      <div className='w-full pb-64'>
        <form className='space-y-4' onSubmit={(e) => handleSubmit2(e)}>
          <div className='w-full h-auto block md:flex md:space-x-4'>
            <div className='w-full h-auto md:w-1/2 block space-y-4 p-4 bg-gray-50'>
              <fieldset>
                <legend className='text-gray-500 font-semibold'>
                  Last name (*)
                </legend>
                <div className='w-full flex'>
                  <span className='input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                    <FaUserTie className='text-green-600' size='2em' />
                  </span>
                  <input
                    className='input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                    type='text'
                    placeholder='Nom'
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend className='text-gray-500 font-semibold'>
                  First name
                </legend>
                <div className='w-full flex'>
                  <span className='input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                    <FaUserTie className='text-green-600' size='2em' />
                  </span>
                  <input
                    className='input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                    type='text'
                    placeholder='Prenoms'
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </div>
              </fieldset>
              <fieldset onChange={(e) => setDateBirth(e.target.value)}>
                <legend className='text-gray-500 font-semibold'>
                  Date of birth (*) <span className='text-xs'>MM/DD/YYYY</span>
                </legend>
                <div className='w-full flex'>
                  <span className='input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                    <BiCalendar className='text-green-600' size='2em' />
                  </span>
                  <DatePicker
                    className='w-full pl-4 h-12 text-gray-500 font-semibold outline-none focus:outline-none'
                    selected={
                      dateBirth.length !== 10 ||
                      parseInt(dateBirth[0] + dateBirth[1]) > 12
                        ? new Date()
                        : new Date(dateBirth)
                    }
                    onChange={(date) => setDateBirth(date)}
                    dateFormat='MM/dd/yyyy'
                    placeholder='MM/DD/YYYY'
                  />
                </div>
              </fieldset>
            </div>
            <div className='w-full h-auto mt-4 md:mt-0 md:w-1/2 block space-y-4 p-4 bg-gray-50'>
              <fieldset>
                <legend className='text-gray-500 font-semibold'>
                  Address (*)
                </legend>
                <div className='w-full flex'>
                  <span className='input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                    <FaMapMarkerAlt className='text-green-600' size='2em' />
                  </span>
                  <input
                    className='input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                    type='text'
                    placeholder='Adresse'
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend className='text-gray-500 font-semibold'>
                  Email address
                </legend>
                <div className='w-full flex'>
                  <span className='input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                    <AiTwotoneMail className='text-green-600' size='2em' />
                  </span>
                  <input
                    className='input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                    type='email'
                    placeholder='Email adress'
                    value={emailAdress}
                    onChange={(e) => setEmailAdress(e.target.value)}
                  />
                </div>
              </fieldset>
              <fieldset onChange={(e) => setPhoneNumber(e.target.value)}>
                <legend className='text-gray-500 font-semibold'>
                  Phone number (*)
                </legend>
                <div className='w-full'>
                  <PhoneInput
                    inputExtraProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true,
                    }}
                    country={'us'}
                    value={phoneNumber}
                    onChange={setPhone}
                    inputClass='w-full h-12 text-gray-500 font-semibold outline-none focus:outline-none'
                    containerClass='w-full h-12 text-gray-500 font-semibold outline-none focus:outline-none'
                  />
                </div>
              </fieldset>
            </div>
          </div>

          <div className='w-full block md:flex md:space-x-4'>
            {text64Resum === '' ? (
              <div className='w-full md:w-1/2 p-4 bg-gray-50'>
                <div className='my-1 px-1 w-full '>
                  <label className='text-2xl text-center text-gray-500'></label>
                  <div className='flex w-full items-center justify-center'>
                    <label
                      className='w-full flex flex-col items-center hover:bg-blue-100 py-6 bg-white text-blue  tracking-wide border border-blue cursor-pointer hover:text-blue-500'
                      style={{ transition: 'all .4s' }}
                    >
                      <BsCloudUpload className='text-gray-500' size='3em' />
                      <span className='mt-2 text-base text-gray-500 font-bold leading-normal'>
                        Upload resume (PDF, JPG)
                      </span>
                      <span className='bolk text-gray-500'>
                        Max size : 10Mo
                      </span>
                      <input
                        type='file'
                        class='hidden'
                        onChange={(e) => handleResumPic(e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div className='w-full md:w-1/2 p-4 bg-gray-50'>
                <div className='my-1 mx-auto px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
                  <article className='overflow-hidden shadow-sm hover:shadow-lg'>
                    <a href='#'>
                      <img
                        alt='Placeholder'
                        className='block h-auto w-full'
                        src={text64Resum}
                      />
                    </a>

                    <header className='flex -mt-14 bg-gray-200 z-999 items-center justify-between leading-tight p-2 md:p-4'>
                      <h1 className='text-lg'>
                        <a
                          className='no-underline hover:underline text-gray-500 font-bold'
                          href='#'
                        >
                          Resume
                        </a>
                      </h1>
                      {/* <p className='text-gray-500 font-bold text-sm'>
                        {'dd/mm/yyyy'}
                      </p> */}
                    </header>
                  </article>
                  <div className='flex flex-row'>
                    <div className='bg-gray-300 w-1/2 h-8 flex align-center justify-center'>
                      <label className='cursor-pointer pt-1'>
                        <input
                          type='file'
                          className='hidden'
                          onChange={(e) => handleResumPic(e)}
                        />
                        <p className='text-center'>
                          <FaPen className='inline' />
                        </p>
                      </label>
                    </div>
                    <div className='bg-red-400 w-1/2 h-8 flex align-center justify-center'>
                      <label className='cursor-pointer pt-1'>
                        <input
                          type='button'
                          className='hidden'
                          onClick={() => setResum('')}
                        />
                        <p className='text-center'>
                          <FaTrashAlt className='inline' />
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {text64Id === '' ? (
              <div className='w-full mt-4 md:mt-0 space-y-4 md:w-1/2 p-4 bg-gray-50'>
                <div className='my-1 px-1 w-full '>
                  <label className='text-2xl text-center text-gray-500'></label>
                  <div className='flex w-full items-center justify-center'>
                    <label
                      className='w-full flex flex-col items-center hover:bg-blue-100 py-6 bg-white text-blue  tracking-wide border border-blue cursor-pointer hover:text-blue-500'
                      style={{ transition: 'all .4s' }}
                    >
                      <BsCloudUpload className='text-gray-500' size='3em' />
                      <span className='mt-2 text-base text-gray-500 font-bold leading-normal'>
                        Upload Identity card (PDF, JPG)
                      </span>
                      <span className='bolk text-gray-500'>Max size: 10Mo</span>
                      <input
                        type='file'
                        class='hidden'
                        onChange={(e) => handleIdPic(e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div className='w-full md:w-1/2 p-4 bg-gray-50'>
                <div className='my-1 mx-auto px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
                  <article className='overflow-hidden shadow-sm hover:shadow-lg'>
                    <a href='#'>
                      <img
                        alt='Placeholder'
                        className='block h-auto w-full'
                        src={text64Id}
                      />
                    </a>

                    <header className='flex -mt-14 bg-gray-200 z-999 items-center justify-between leading-tight p-2 md:p-4'>
                      <h1 className='text-lg'>
                        <a
                          className='no-underline hover:underline text-gray-500 font-bold'
                          href='#'
                        >
                          Id card
                        </a>
                      </h1>
                      {/* <p className='text-gray-500 font-bold text-sm'>
                        {'dd/mm/yyyy'}
                      </p> */}
                    </header>
                  </article>
                  <div className='flex flex-row'>
                    <div className='bg-gray-300 w-1/2 h-8 flex align-center justify-center'>
                      <label className='cursor-pointer pt-1'>
                        <input
                          type='file'
                          className='hidden'
                          onChange={(e) => handleIdPic(e)}
                        />
                        <p className='text-center'>
                          <FaPen className='inline' />
                        </p>
                      </label>
                    </div>
                    <div className='bg-red-400 w-1/2 h-8 flex align-center justify-center'>
                      <label className='cursor-pointer pt-1'>
                        <input
                          type='button'
                          className='hidden'
                          onClick={() => setIdentity('')}
                        />
                        <p className='text-center'>
                          <FaTrashAlt className='inline' />
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Portfolio */}
          <div className='w-full block md:flex'>
            <div className='w-full space-y-4 p-4 bg-gray-50'>
              <fieldset>
                <legend className='text-gray-500 font-semibold flex items-center'>
                  <FaGlobe className='inline mr-2' /> Portfolio
                </legend>
                <textarea
                  class='resize-y px-5 py-2 w-full h-20 text-gray-500 font-semibold outline-none focus:outline-none'
                  placeholder='Your portfolio URL here'
                  value={webSiteUrl}
                  onChange={(e) => setWebSiteUrl(e.target.value)}
                ></textarea>
              </fieldset>
            </div>
          </div>

          {/* Linkedin */}

          <div className='w-full block md:flex'>
            <div className='w-full space-y-4 p-4 bg-gray-50'>
              <fieldset>
                <legend className='text-gray-500 font-semibold flex items-center'>
                  <FaLinkedin className='inline mr-2' /> LinkedIn profile
                </legend>
                <textarea
                  class='resize-y px-5 py-2 w-full h-20 text-gray-500 font-semibold outline-none focus:outline-none'
                  placeholder='Your LinkedIn profile URL here'
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                ></textarea>
              </fieldset>
            </div>
          </div>

          {/* Github */}

          <div className='w-full block md:flex'>
            <div className='w-full space-y-4 p-4 bg-gray-50'>
              <fieldset>
                <legend className='text-gray-500 font-semibold flex items-center'>
                  <FaGithub className='inline mr-2' /> Github profile
                </legend>
                <textarea
                  class='resize-y px-5 py-2 w-full h-20 text-gray-500 font-semibold outline-none focus:outline-none'
                  placeholder='Your Github profile URL here'
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                ></textarea>
              </fieldset>
            </div>
          </div>

          <div className='text-center w-full md:w-1/2 mx-auto'>
            {studentLoad || createLoad || updateLoad ? (
              <button
                className='bg-green-500 flex items-center justify-center w-1/2 m-auto px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none'
                type='submit'
                value='Submit'
                style={{ transition: 'all .15s ease' }}
                disabled
              >
                <span>Processing...</span>
                <span>
                  <FaCircleNotch
                    className='ml-4 text-white inline animate-spin'
                    size='1.5em'
                  />
                </span>
              </button>
            ) : (
              <button
                className='bg-green-700 flex items-center justify-center w-1/2 m-auto px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none'
                type='submit'
                value='Submit'
                style={{ transition: 'all .15s ease' }}
              >
                <span>Submit</span>
                <span>
                  <FaArrowRight
                    className='ml-4 text-white inline'
                    size='1.5em'
                  />
                </span>
              </button>
            )}
            {studentErr || updateErr || createErr ? (
              <p className='text-red-500 mt-4'>error... please try again</p>
            ) : (
              ''
            )}

            <p className='text-red-500 mt-4'>{errMsg}</p>
          </div>
        </form>
      </div>
    </>
  );
}
