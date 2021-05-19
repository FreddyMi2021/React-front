import {gql} from '@apollo/client';

const CREATE_STUDENT_X_COMMENT_X_CODE = gql`
    mutation CreateStudentXCommentXCode(
        $studentId:Int!,
        $codeId: Int!
    ){
        createStudentXCommentXCode(
            input: {
                studentId: $studentId,
                codeId: $codeId
            }
        ){
            studentXCommentXCode{
                id
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
                    codeVotes{
                        id
                    }
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_COMMENT_X_CODE = gql`
    mutation UpdateStudentXCommentXCode(
        $id: Int!,
        $studentId:Int!,
        $codeId: Int!
    ){
        updateStudentXCommentXCode(
            input: {
                id:$id,
                studentId: $studentId,
                codeId: $codeId
            }
        ){
            studentXCommentXCode{
                id
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
                    codeVotes{
                        id
                    }
                }
            }
        }
    }
`

const DESTROY_X_COMMENT_X_CODE = gql`
    mutation DestroyStudentXCommentXCode($id: Int!){
        destroyStudentXCommentXCode(input: {
            id: $id
        }){
            studentXCommentXCodes{
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

export {CREATE_STUDENT_X_COMMENT_X_CODE, UPDATE_STUDENT_X_COMMENT_X_CODE, DESTROY_X_COMMENT_X_CODE}