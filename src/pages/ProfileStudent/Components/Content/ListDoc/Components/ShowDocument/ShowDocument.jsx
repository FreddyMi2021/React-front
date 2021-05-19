import React, { useState, useEffect } from 'react';
import { UPDATE_STUDENT_X_DOCUMENT } from '../../../../../../../services/mutations/StudentXDocumentMutation';
import { useMutation } from '@apollo/client';
import { FaPen, FaTrashAlt } from 'react-icons/fa';

const ShowDocument = (props) => {
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

  useEffect(() => {
    if (text64) {
      updateStudentXDocument({
        variables: {
          id: parseInt(props.studentXDocument_id),
          pic: text64,
          studentId: parseInt(props.studentId),
          documentId: parseInt(props.documentId),
        },
      });
      // console.log(props.sxd_id);
    }
  }, [text64]);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
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

  const handleClick = (e) => {
    updateStudentXDocument({
      variables: {
        id: parseInt(props.studentXDocument_id),
        pic: '',
        studentId: parseInt(props.studentId),
        documentId: parseInt(props.documentId),
      },
    });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // console.log(props.studentId);
  // console.log(text64);

  const monthNames = [
    'janv.',
    'févr.',
    'mars',
    'avr.',
    'mai',
    'juin',
    'juill.',
    'août',
    'sept.',
    'oct.',
    'nov.',
    'déc.',
  ];

  const dateOfCreation = new Date(props.sxdUpdate.replace(/-/g, ' '));
  const day = dateOfCreation.getDate();
  const month = monthNames[dateOfCreation.getMonth()];
  const year = dateOfCreation.getFullYear();
  // const hour = dateOfCreation.getHours();
  // const minutes = dateOfCreation.getMinutes();

  //   console.log(dateOfCreation);
  //   console.log(`${day} ${month} ${year} a ${hour}:${minutes}`);
  const dateDMY = `${day} ${month} ${year}`;

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden shadow-sm hover:shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            // src="https://picsum.photos/600/400/?random"
            src={props.image}
          />
        </a>

        <header className="flex -mt-14 bg-gray-200 z-999 items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a
              className="no-underline hover:underline text-gray-500 font-bold"
              href="#"
            >
              {props.documentTitle}
            </a>
          </h1>
          <p className="text-gray-500 font-bold text-sm">{dateDMY}</p>
        </header>
      </article>
      <div className="flex flex-row">
        <div className="bg-gray-300 w-1/2 h-8 flex align-center justify-center">
          <label className="cursor-pointer pt-1">
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleChange(e)}
            />
            <p className="text-center">
              <FaPen className="inline" /> Modifier
            </p>
          </label>
        </div>
        <div className="bg-red-400 w-1/2 h-8 flex align-center justify-center">
          <label className="cursor-pointer pt-1">
            <input
              type="button"
              className="hidden"
              onClick={(e) => handleClick(e)}
            />
            <p className="text-center">
              <FaTrashAlt className="inline" /> Supprimer
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShowDocument;
