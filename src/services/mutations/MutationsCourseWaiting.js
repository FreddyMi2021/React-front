import { gql } from '@apollo/client';

const CREATE_COURSE_WAITING = gql`
    mutation CreateCourseWaiting(
        $waiting: String!,
        $courseId: Int!
    ){
        createCourseWaiting(
            input: {
                waiting: $waiting,
                courseId: $courseId
            }
        ){
            courseWaiting{
                id
                wating
                course{
                    id
                }
            }
        }
    }
`

const UPDATE_COURSE_WAITING = gql`
    mutation UpdateCourseWaiting(
        $id: Int!,
        $waiting: String!,
        $courseId: Int!
    ){
        updateCourseWaiting(
            input: {
                id: $id,
                waiting: $waiting,
                courseId: $courseId
            }
        ){
            courseWaiting{
                id
                wating
                course{
                    id
                }
            }
        }
    }
`

const DESTROY_COURSE_WAITING = gql`
    mutation DestroyCourseWaiting(
        $id: Int!
    ){
        destroyCourseWaiting(input: {
            id: $id
        }){
            courseWaitings{
                id
                waiting
            }
        }
    }
`


export { CREATE_COURSE_WAITING, UPDATE_COURSE_WAITING, DESTROY_COURSE_WAITING }