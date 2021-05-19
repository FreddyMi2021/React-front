import { gql } from '@apollo/client';

export const STUDENT_X_HEX = (sxh) => {
  return gql`
  {
    studentXHexe(id: ${sxh}){
        id
        hexProductId
        student{
            hexId
        }
    }
  }
 `
}


export const STUDENT_X_HEX_BY_STUDENT = (studentId) => {
  return gql`
  {
    studentXHexByStudent(id: ${studentId}){
        id
        hexProductId
        student{
            hexId
        }
    }
  }
 `
}