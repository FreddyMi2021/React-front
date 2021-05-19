import { gql } from '@apollo/client';

export const PAYMENT = (id) => {
  return gql`
    query{
      payment(id: ${id}){
        id
        student{
          id
          hexId
        }
        mode
        paymentTickets{
          id
          isPaid
          sliceType
          amount
          deadline
          productId
          paymentType
          paymentMethod
          payment{
            id
          }
        }
      }
    }
  `
}

export const PAYMENT_BY_STUDENT = (student_id) => {
  return gql`
    query{
      paymentByStudent(studentId: ${student_id}){
        id
        student{
          id
          hexId
        }
        mode
        paymentTickets{
          id
          isPaid
          sliceType
          amount
          deadline
          productId
          paymentType
          paymentMethod
          payment{
            id
          }
        }
      }
    }
  `
}