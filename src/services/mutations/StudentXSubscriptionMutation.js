import {gql} from '@apollo/client';

const CREATE_STUDENT_X_SUBSCRIPTION =gql`
    mutation CreateStudentXSubscription(
        $expiryDate: String!,
        $studentId: Int!,
        $subscriptionId: Int
    ){
        createStudentXSubscription(input: {
            expiryDate: $expiryDate,
            studentId: $studentId,
            subscriptionId: $subscriptionId
        }){
            studentXSubscription{
                id
                expiryDate
                student{
                    id
                }
                subscription{
                    id
                }
            }
        }
    }
`
const UPDATE_STUDENT_X_SUBSCRIPTION =gql`
    mutation UpdateStudentXSubscription(
        $id: Int!,
        $expiryDate: String!,
        $studentId: Int!,
        $subscriptionId: Int
    ){
        updateStudentXSubscription(input: {
            id: $id,
            expiryDate: $expiryDate,
            studentId: $studentId,
            subscriptionId: $subscriptionId
        }){
            studentXSubscription{
                id
                expiryDate
                student{
                    id
                }
                subscription{
                    id
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_SUBSCRIPTION = gql`
    mutation DestroyStudentXSubscription(
        $id: Int!
    ){
        destroyStudentXSubscription(input: {
            id: $id
        }){
            studentXSubscriptions{
                id
            }
        }
    }
`

export {CREATE_STUDENT_X_SUBSCRIPTION,
    UPDATE_STUDENT_X_SUBSCRIPTION,
    DESTROY_STUDENT_X_SUBSCRIPTION
}