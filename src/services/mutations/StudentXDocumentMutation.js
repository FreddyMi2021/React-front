import { gql } from '@apollo/client';

const CREATE_STUDENT_X_DOCUMENT = gql`
  mutation CreateStudentXDocument(
    $pic: String!
    $studentId: Int!
    $documentId: Int!
  ) {
    createStudentXDocument(
      input: { pic: $pic, studentId: $studentId, documentId: $documentId }
    ) {
      studentXDocument {
        id
        pic
        student {
          id
        }
        document {
          id
        }
      }
    }
  }
`;
const UPDATE_STUDENT_X_DOCUMENT = gql`
  mutation UpdateStudentXDocument(
    $id: Int!
    $pic: String!
    $studentId: Int!
    $documentId: Int!
  ) {
    updateStudentXDocument(
      input: {
        id: $id
        pic: $pic
        studentId: $studentId
        documentId: $documentId
      }
    ) {
      studentXDocument {
        id
        pic
        student {
          id
        }
        document {
          id
        }
      }
    }
  }
`;

const DESTROY_STUDENT_X_DOCUMENT = gql`
  mutation DestroyStudentXDocument($id: Int!) {
    destroyStudentXDocument(input: { id: $id }) {
      studentXDocuments {
        id
      }
    }
  }
`;

export {
  CREATE_STUDENT_X_DOCUMENT,
  UPDATE_STUDENT_X_DOCUMENT,
  DESTROY_STUDENT_X_DOCUMENT,
};
