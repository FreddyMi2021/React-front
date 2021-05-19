import {gql} from '@apollo/client';

const CREATE_STUDENT_X_COURSE = gql`
    mutation CreateStudentXCourse(
        $isAchieved:  Boolean!,
        $studentId: Int!,
        $courseId: Int!
    ){
        createStudentXCourse(input: {
            isAchieved: $isAchieved,
            studentId: $studentId,
            courseId: $courseId
        }){
            studentXCourse{
                id
                student{
                    id
                }
                course{
                    id
                    title
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_COURSE = gql`
    mutation UpdateStudentXCourse(
        $id: Int!,
        $isAchieved:  Boolean!,
        $studentId: Int!,
        $courseId: Int!
    ){
        updateStudentXCourse(input: {
            id: $id,
            isAchieved: $isAchieved,
            studentId: $studentId,
            courseId: $courseId
        }){
            studentXCourse{
                id
                student{
                    id
                }
                course{
                    id
                    title
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_COURSE = gql`
    mutation DestroyStudentXCourse($id: Int!){
        destroyStudentXCourse(input: {
            id: $id
        }){
            studentXCourses{
                id
            }
        }
    }
`

export {CREATE_STUDENT_X_COURSE, UPDATE_STUDENT_X_COURSE, DESTROY_STUDENT_X_COURSE}