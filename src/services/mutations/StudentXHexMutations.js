import { gql } from '@apollo/client';

export const CREATE_STUDENT_X_HEX = gql`
  mutation CreateStudentXHex(
    $studentId: Int!,
    $hexProductId: Int!
  ){
    createStudentXHex(
      input: {
        studentId: $studentId,
        hexProductId: $hexProductId
      }
    ){
      studentXHex{
        id
        student{
          id
        }
        hexProductId
      }
    }
  }
`;