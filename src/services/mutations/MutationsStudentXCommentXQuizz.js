import {gql} from '@apollo/client';

const CREATE_STUDENT_X_COMMENT_X_QUIZZ = gql`
    mutation CreateStudentXCommentXQuizz(
        $studentId: Int!,
        $quizzId: Int
    ){
        createStudentXCommentXQuizz(
            input: {
                studentId: $studentId,
                quizzId: $quizzId
            }
        ){
            studentXCommentXQuizz{
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                quizz{
                    id
                    ask
                    answer
                    xp
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_COMMENT_X_QUIZZ = gql`
    mutation UpdateStudentXCommentXQuizz(
        $id: Int!,
        $studentId: Int!,
        $quizzId: Int
    ){
        updateStudentXCommentXQuizz(
            input: {
                id: $id,
                studentId: $studentId,
                quizzId: $quizzId
            }
        ){
            studentXCommentXQuizz{
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                quizz{
                    id
                    ask
                    answer
                    xp
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_COMMENT_X_QUIZZ = gql`
    mutation DestroyStudentXCommentXQuizz($id: Int!){
        destroyStudentXCommentXQuizz(input: {
            id: $id
        }){
            studentXCommentXQuizzs{
                id
            }
        }
    }
`

export {CREATE_STUDENT_X_COMMENT_X_QUIZZ, UPDATE_STUDENT_X_COMMENT_X_QUIZZ, DESTROY_STUDENT_X_COMMENT_X_QUIZZ}