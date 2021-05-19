import React from 'react';
// import { BsCloudUpload } from 'react-icons/bs';
import ShowDocument from './Components/ShowDocument/ShowDocument';
import UploadDocument from './Components/UploadDocument/UploadDocument';
import { SXD_BY_STUDENT_AND_DOCUMENT } from '../../../../../services/queries/StudentXDocumentQueries';
import { useQuery } from '@apollo/client';
import { ALL_DOCUMENTS } from '../../../../../services/queries/DocumentQueries';
import { decryptUser } from '../../../../../services/BaseUrl';
// import { CREATE_STUDENT_X_DOCUMENT } from '../../../../../services/mutations/StudentXDocumentMutation';

export default function ListDoc() {
  const currentUser = JSON.parse(decryptUser(localStorage.getItem('currentUser')));

  const { loading: docLoading, error: docError, data: docData } = useQuery(
    ALL_DOCUMENTS
  );

  const { loading: SXDLoading, error: SXDError, data: SXDData } = useQuery(
    SXD_BY_STUDENT_AND_DOCUMENT(currentUser.data.data.id)
  );

  if (SXDLoading) return <p>loading</p>;

  if (SXDError){
    localStorage.removeItem('currentUser');
    window.location.href = '/login_page';
  }

  if (docLoading) return <p>loading</p>;
  if (docError) {
    localStorage.removeItem('currentUser');
    window.location.href = '/login_page';
  }
  
  const uploadArray = [];
  // let countArray = [];
  if (docData.allDocuments.length > 0) {
    docData.allDocuments.map((document) => {
      if (document.studentXDocuments.length === 0) {
        uploadArray.push(
          <UploadDocument
            key={document.id}
            documentTitle={document.title}
            documentId={document.id}
            studentId={parseInt(currentUser.data.data.id)}
          />
        );
      } else if (document.studentXDocuments.length > 0) {
        document.studentXDocuments.map((obj) => {
          if (obj.pic === '') {
            uploadArray.push(
              <UploadDocument
                key={document.id}
                documentTitle={document.title}
                documentId={document.id}
                studentId={parseInt(currentUser.data.data.id)}
                studentXDocument_id={document.studentXDocuments.map((obj) =>
                  parseInt(obj.id)
                )}
              />
            );
          }
        });
      }
    });
  }

  const sxdArray = [];
  if (SXDData.sxdByStudentAndDocument.length > 0) {
    const sxdPic = [];
    SXDData.sxdByStudentAndDocument.map((sxd) => {
      if (sxd.pic !== '') {
        sxdPic.push(sxd);
      }
    });
    sxdPic.map((sxd) => {
      sxdArray.push(
        <ShowDocument
          key={sxd.id}
          studentXDocument_id={sxd.id}
          image={sxd.pic}
          documentId={sxd.document.id}
          documentTitle={sxd.document.title}
          sxdUpdate={sxd.updatedAt}
          studentId={parseInt(currentUser.data.data.id)}
        />
      );
    });
  }

  // console.log(sxdArray);

  return (
    <>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {/* SHOW DOCUMENT */}
        {/* <ShowDocument image={text64} /> */}
        {sxdArray}
        {/* SHOW UPLOAD */}
        {/* <UploadDocument /> */}
        {uploadArray}
      </div>
    </>
  );
}
