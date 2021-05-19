import {gql} from '@apollo/client';

const CREATE_STUDENT_X_CODES = gql`
    mutation CreateStudentXCode(
        $studentId: Int!,
        $codeId: Int!
    ){
        createStudentXCode(
            input: {
                studentId: $stidentId,
                codeId: $codeId
            }
        ){
            studentXCode{
                id
                createdAt
                updatedAt
                student{
                    id
                    name
                    nickname
                    image
                    email
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                code{
                    id
                    languages
                    description
                    content
                    privacy
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_CODE = gql`
    mutation UpdateStudentXCode(
        $id: Int!,
        $studentId: Int!,
        $codeId: Int!
    ){
        updateStudentXCode(
            input: {
                id: $id,
                studentId: $stidentId,
                codeId: $codeId
            }
        ){
            studentXCode{
                id
                createdAt
                updatedAt
                student{
                    id
                    name
                    nickname
                    image
                    email
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                code{
                    id
                    languages
                    description
                    content
                    privacy
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_CODE = gql`
    mutation DestroyStudentXCode(
        $id: Int!
    ){
        destroyStudentXCode(
            input: {
                id: $id
            }
        ){
            studentXCodes{
                id
                student{
                    id
                }
                code{
                    id
                }
            }
        }
    }
`

export {CREATE_STUDENT_X_CODES, UPDATE_STUDENT_X_CODE, DESTROY_STUDENT_X_CODE};