import {gql} from '@apollo/client';

const CREATE_STUDENT_X_EXERCISE = gql`
    mutation CreateStudentXExercise(
        $duration: Int!,
        $attemptNb: Int!,
        $xpExercise: Int!,
        $isAchieved: Boolean!,
        $studentId: Int!,
        $exerciseId: Int1
    ){
        createStudentXExercise(
            input: {
                duration: $duration,
                attemptNb: $attemptNb,
                xpExercise: $xpExercise,
                isAchieved: $isAchieved,
                studentId: $studentId,
                exerciseId: $exerciseId
            }
        ){
            studentXExercise{
                id
                student{
                    id
                    name
                }
                exercise{
                    id
                    instruction
                    solution
                    hint
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_EXERCISE = gql`
    mutation UpdateStudentXExercise(
        $id: Int!,
        $duration: Int!,
        $attemptNb: Int!,
        $xpExercise: Int!,
        $isAchieved: Boolean!,
        $studentId: Int!,
        $exerciseId: Int1
    ){
        updateStudentXExercise(
            input: {
                id: $id,
                duration: null,
                attemptNb: null,
                xpExercise: null,
                isAchieved: $isAchieved,
                studentId: $studentId,
                exerciseId: $exerciseId
            }
        ){
            studentXExercise{
                id
                student{
                    id
                    name
                }
                exercise{
                    id
                    instruction
                    solution
                    hint
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_EXERCISE = gql`
    mutation DestroyStudentXExercise($id: Int!){
        destroyStudentXExercise(input: {
            id: $id
        }){
            studentXExercises{
                id
            }
        }
    }
`

export {CREATE_STUDENT_X_EXERCISE, UPDATE_STUDENT_X_EXERCISE, DESTROY_STUDENT_X_EXERCISE}