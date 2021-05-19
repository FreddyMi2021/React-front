import {gql} from '@apollo/client';

const CREATE_LESSON_VIDEO = gql`
    mutation CreateLessonVideo(
        $path: String,
        $lessonId: Int!
    ){
        createLessonVideo(
            input: {
                path: $path,
                lessonId: $lessonId
            }
        ){
            lessonVideo{
                id
                path
                lesson{
                    id
                }
            }
        }
    }
`

const UPDATE_LESSON_VIDEO = gql`
    mutation UpdateLessonVideo(
        $id: Int,
        $lessonId: Int!
    ){
        updateLessonVideo(
            input: {
                id: $id,
                lessonId: $lessonId
            }
        ){
            lessonVideo{
                id
                path
                lesson{
                    id
                }
            }
        }
    }
`

const DESTROY_LESSON_VIDEO = gql`
    mutation DestroyLessonVideo($id: Int!){
        destroyLessonVideo(input: {
            id: $id
        }){
            lessonVideos{
                id
                path
            }
        }
    }
`

export {CREATE_LESSON_VIDEO, UPDATE_LESSON_VIDEO, DESTROY_LESSON_VIDEO}