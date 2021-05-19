import React, { useState, useEffect } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import { UPDATE_STUDENT_X_DOCUMENT } from '../../../../../../../services/mutations/StudentXDocumentMutation';
import { useMutation } from '@apollo/client';
import { CREATE_STUDENT_X_DOCUMENT } from '../../../../../../../services/mutations/StudentXDocumentMutation';

// props = studentXDocument_id, documentTitle, studentId, documentId

const UploadDocument = (props) => {
  // console.log('studentXDocument_id', props.studentXDocument_id);
  const [image, setImage] = useState('');
  const [text64, setText64] = useState('');

  const [updateStudentXDocument, { data: updateData }] = useMutation(
    UPDATE_STUDENT_X_DOCUMENT,
    {
      onCompleted() {
        window.location.reload();
      },
    }
  );

  const [createStudentXDocument, { data: createData }] = useMutation(
    CREATE_STUDENT_X_DOCUMENT,
    {
      onCompleted() {
        window.location.reload();
      },
    }
  );

  // console.log(parseInt(props.studentXDocument_id));

  useEffect(() => {
    if (text64) {
      updateStudentXDocument({
        variables: {
          id: parseInt(props.studentXDocument_id),
          pic: text64,
          studentId: props.studentId,
          documentId: parseInt(props.documentId),
        },
      });
      // console.log(props.sxd_id);
    }
  }, [text64]);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleClick = (e) => {
    createStudentXDocument({
      variables: {
        pic: '',
        studentId: parseInt(props.studentId),
        documentId: parseInt(props.documentId),
      },
    });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (image) {
        reader.readAsDataURL(file);
      }
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  let base64Text = '';
  async function Main() {
    const file = image;
    // console.log(await toBase64(file));
    base64Text = await toBase64(file);
    setText64(base64Text);
  }

  Main();

  console.log(image);

  if (props.studentXDocument_id !== undefined) {
    return (
      <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
        <label className='text-2xl text-center text-gray-500'></label>
        <div className='flex w-full items-center justify-center'>
          <label
            className='w-full flex flex-col items-center hover:bg-blue-100 py-6 bg-white text-blue  tracking-wide border border-blue cursor-pointer hover:text-blue-500'
            style={{ transition: 'all .4s' }}
          >
            <BsCloudUpload className='text-gray-500' size='5em' />
            <span className='mt-2 text-base text-gray-500 font-bold leading-normal'>
              Importer votre {props.documentTitle} (PDF, JPG)
            </span>
            <span className='bolk text-gray-500'>Taille maximale : 10Mo</span>
            <input
              type='file'
              class='hidden'
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
      </div>
    );
  } else {
    return (
      <div className='my-1 px-1 w-full md:w-1/2 lg:my-4  lg:px-4 lg:w-1/3 '>
        <label className='text-2xl text-center text-gray-500'></label>
        <div className='flex w-full items-center justify-center'>
          <label
            className='w-full flex flex-col items-center hover:bg-blue-100 h-48 py-6 bg-gray-400 text-blue  tracking-wide border border-blue cursor-pointer hover:text-blue-500'
            style={{ transition: 'all .4s' }}
          >
            <BsCloudUpload className='text-gray-500 z-10' size='5em' />
            <span className='mt-2 text-base text-gray-500 text-center font-bold leading-normal z-10'>
              Cliquez ici pour importer votre {props.documentTitle}
            </span>
            {/* <span className="bolk text-gray-500 z-10">
              Taille maximale : 10Mo
            </span> */}
            <input
              type='button'
              class='hidden'
              onClick={(e) => handleClick(e)}
            />
          </label>
        </div>
      </div>
    );
  }
};

export default UploadDocument;
