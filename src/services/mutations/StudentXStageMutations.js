import {gql} from '@apollo/client';

const CREATE_STUDENT_X_STAGE = gql`
    mutation CreateStudentXStage(
        $isAchieved: Boolean!,
        $studentId: Int!,
        $stageId: Int!
    ){
        createStudentXStage(
            input: {
                isAchieved: $isAchieved,
                studentId: $studentId,
                stageId: $stageId
            }
        ){
            studentXStage{
                id
                isAchieved
                student{
                    id
                    name
                }
                stage{
                    id
                    title
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_STAGE = gql`
    mutation UpdateStudentXStage(
        $id: Int!,
        $isAchieved: Boolean!,
        $studentId: Int!,
        $stageId: Int!
    ){
        updateStudentXStage(
            input: {
                id: $id,
                isAchieved: $isAchieved,
                studentId: $studentId,
                stageId: $stageId
            }
        ){
            studentXStage{
                id
                student{
                    id
                    name
                }
                stage{
                    id
                    title
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_STAGE = gql`
    mutation DestroyStudentXStage($id: Int!){
        destroyStudentXStage(input: {
            id: $id
        }){
            studentXStages{
                id
            }
        }
    }
`

export {
    CREATE_STUDENT_X_STAGE,
    UPDATE_STUDENT_X_STAGE,
    DESTROY_STUDENT_X_STAGE
}