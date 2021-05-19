import {gql} from '@apollo/client';

export const CREATE_PAYMENT_TICKET = gql`
    mutation CreatePaymentTicket(
        $sliceType: String!,
        $deadline: String!,
        $isPaid: Boolean!,
        $paymentType: String!,
        $paymentMethod: String!,
        $amount: Float!,
        $productId: Int!,
        $paymentId: Int!
    ){
      createPaymentTicket(
            input: {
              sliceType: $sliceType,
              deadline: $deadline,
              isPaid: $isPaid,
              paymentType: $paymentType,
              paymentMethod: $paymentMethod,
              amount: $amount,
              productId: $productId,
              paymentId: $paymentId
            }
        ){
            paymentTicket{
              id
              payment{
                id
              }
            }
        }
    }
`


export const UPDATE_PAYMENT_TICKET = gql`
    mutation UpdatePaymentTicket(
        $id: ID!
        $sliceType: String!,
        $deadline: String!,
        $isPaid: Boolean!,
        $paymentType: String!,
        $paymentMethod: String!,
        $amount: Float!,
        $productId: Int!,
        $paymentId: Int!
    ){
      updatePaymentTicket(
            input: {
              id: $id,
              sliceType: $sliceType,
              deadline: $deadline,
              isPaid: $isPaid,
              paymentType: $paymentType,
              paymentMethod: $paymentMethod,
              amount: $amount,
              productId: $productId,
              paymentId: $paymentId
            }
        ){
            paymentTicket{
              id
              payment{
                id
              }
            }
        }
    }
`


export const DESTROY_PAYMENT_TICKET = gql`
    mutation DestroyPaymentTicket(
        $id: ID!,
    ){
      destroyPaymentTicket(
            input: {
              id: $id,
            }
        ){
            paymentTickets{
              id
              payment{
                id
              }
            }
        }
    }
`