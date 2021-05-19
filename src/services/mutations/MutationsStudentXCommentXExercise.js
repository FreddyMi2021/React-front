import {gql} from '@apollo/client';

const CREATE_STUDENT_X_COMMENT_X_EXERCISE = gql`
    mutation CreateStudentXCommentXExercise(
        $studentId: Int!
        $exerciseId: Int
    ){
        createStudentXCommentXExercise(
            input: {
                studentId: $studentId,
                exerciseId: $exerciseId
            }
        ){
            studentXCommentXExercise{
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                    password
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                exercise{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_COMMENT_X_EXERCISE = gql`
    mutation UpdateStudentXCommentXExercise(
        $id: Int!,
        $studentId: Int!
        $exerciseId: Int
    ){
        updateStudentXCommentXExercise(
            input: {
                id: $id,
                studentId: $studentId,
                exerciseId: $exerciseId
            }
        ){
            studentXCommentXExercise{
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                    password
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                exercise{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_COMMENT_X_EXERCISE = gql`
    mutation DestroyStudentXCommentXExercise($id: Int!){
        destroyStudentXCommentXExercise(input: {
            id: $id
        }){
            studentXCommentXExercises{
                id
            }
        }
    }
`

export {CREATE_STUDENT_X_COMMENT_X_EXERCISE, UPDATE_STUDENT_X_COMMENT_X_EXERCISE, DESTROY_STUDENT_X_COMMENT_X_EXERCISE}