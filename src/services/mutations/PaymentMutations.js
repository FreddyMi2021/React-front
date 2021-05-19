import {gql} from '@apollo/client';

export const CREATE_PAYMENT = gql`
    mutation CreatePayment(
        $mode: String!,
        $studentId: Int!,
        $sliceCount: Int
    ){
      createPayment(
            input: {
                mode: $mode,
                studentId: $studentId
                sliceCount: $sliceCount
            }
        ){
            payment{
              id
            }
        }
    }
`

export const DESTROY_PAYMENT = gql`
    mutation DestroyPayment(
        $id: ID!,
    ){
      destroyPayment(
            input: {
              id: $id,
            }
        ){
            payments{
              id
            }
        }
    }
`