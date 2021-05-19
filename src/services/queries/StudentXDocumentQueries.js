import { gql } from '@apollo/client';

const ALL_STUDENT_X_DOCUMENTS = gql`
  query {
    allStudentXDocuments {
      id
      pic
      student {
        id
        name
        nickname
        image
        email
      }
      document {
        id
        title
        description
        isNotified
      }
    }
  }
`;

const PAGINATE_STUDENT_X_DOCUMENTS = (page, perPage) => {
  return gql`
        query{
            studentXDocuments(page: ${page}, perPage: ${perPage}){
                id
                pic
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                document{
                    id
                    title
                    description
                    isNotified
                }
            }
        }
    `;
};

const SHOW_STUDENT_X_DOCUMENTS = (id) => {
  return gql`
        query{
            studentXDocument(id: ${id}}){
                id
                pic
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                document{
                    id
                    title
                    description
                    isNotified
                }
            }
        }
    `;
};

const STUDENT_X_DOCUMENTS_EMPTY_PIC = (studentId, documentId = null) => {
  return gql`
        query{
            studentXDocumentsEmptyPic(studentId: ${studentId}, documentId: ${documentId}){
                id
                pic
                createdAt
                updatedAt
                document{
                    id
                    title
                }
            }
        }
    `;
};

const SXD_BY_STUDENT_AND_DOCUMENT = (studentId, documentId = null) => {
  return gql`
        query{
            sxdByStudentAndDocument(studentId: ${studentId}, documentId: ${documentId}){
                id
                pic
                createdAt
                updatedAt
                document{
                    id
                    title
                }
            }
        }
    `;
};

export {
  ALL_STUDENT_X_DOCUMENTS,
  PAGINATE_STUDENT_X_DOCUMENTS,
  SHOW_STUDENT_X_DOCUMENTS,
  STUDENT_X_DOCUMENTS_EMPTY_PIC,
  SXD_BY_STUDENT_AND_DOCUMENT,
};
