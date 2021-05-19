import {gql} from '@apollo/client';

const CREATE_STUDENT_X_PATH = gql`
    mutation CreateStudentXPath(
        $isAchieved: Boolean!,
        $studentId: Int!,
        $pathId: Int!
    ){
        createStudentXPath(
            input: {
                isAchieved: $isAchieved,
                studentId: $studentId,
                pathId: $pathId
            }
        ){
            studentXPath{
                student{
                    id
                    name
                }
                path{
                    id
                    title
                    pic
                    description
                }
            }
        }
    }
`
const UPDATE_STUDENT_X_PATH = gql`
    mutation UpdateStudentXPath(
        $id: Int!,
        $isAchieved: Boolean!,
        $studentId: Int!,
        $pathId: Int!
    ){
        updateStudentXPath(
            input: {
                id: $id,
                isAchieved: $isAchieved,
                studentId: $studentId,
                pathId: $pathId
            }
        ){
            studentXPath{
                student{
                    id
                    name
                }
                path{
                    id
                    title
                    pic
                    description
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_PATH = gql`
    mutation DestroyStudentXPath($id: Int!){
        destroyStudentXPath(input: {
            id: $id
        }){
            studentXPaths{
                id
            }
        }
    }
`

export {
    CREATE_STUDENT_X_PATH,
    UPDATE_STUDENT_X_PATH,
    DESTROY_STUDENT_X_PATH
}