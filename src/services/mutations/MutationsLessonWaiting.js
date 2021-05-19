import {gql} from '@apollo/client';

const CREATE_LESSON_WAITING = gql`
    mutation CreateLessonWaiting(
        $waiting: String!
        $lessonid: Int!
    ){
        createLessonWaiting(
            input: {
                waiting: $waiting,
                lessonId: $lessonId
            }
        ){
            lessonWaiting{
                id
                waiting
                lesson{
                    id
                }
            }
        }
    }
`

const UPDATE_LESSON_WAITING = gql`
    mutation UpdateLessonWaiting(
        $id: Int!,
        $waiting: String!
        $lessonid: Int!
    ){
        updateLessonWaiting(
            input: {
                id: $id,
                waiting: $waiting,
                lessonId: $lessonId
            }
        ){
            lessonWaiting{
                id
                waiting
                lesson{
                    id
                }
            }
        }
    }
`

const DESTROY_LESSON_WAITING = gql`
    mutation DestroyLessonWaiting($id: Int!){
        destroyLessonWaiting(input: {
            id: $id
        }){
            lessonWaitings{
                id
            }
        }
    }
`

export { CREATE_LESSON_WAITING, UPDATE_LESSON_WAITING,DESTROY_LESSON_WAITING}