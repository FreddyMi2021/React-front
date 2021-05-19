import {gql} from '@apollo/client';

const CREATE_LESSON_DETAIL = gql`
    mutation CreateLessonDetail(
        $detail: String!,
        $lessonid: Int!
    ){
        createLessonDetail(
            input: {
                detail: $detail,
                lessonId: $lessonId
            }
        ){
            lessonDetail{
                id
                detail
                lesson{
                    id
                }
            }
        }
    }
`

const UPDATE_LESSON_DETAIL = gql`
    mutation UpdateLessonDetail(
        $id: Int!,
        $detail: String!,
        $lessonid: Int!
    ){
        updateLessonDetail(
            input: {
                id: $id,
                detail: $detail,
                lessonId: $lessonId
            }
        ){
            lessonDetail{
                id
                detail
                lesson{
                    id
                }
            }
        }
    }
`

const DESTROY_LESSON_COMMENT = gql`
    mutation DestroyLessonDetail($id:Int!){
        destroyLessonDetail(input: {
            id: $id
        }){
            lessonDetails{
                id
            }
        }
    }
`

export {CREATE_LESSON_DETAIL, UPDATE_LESSON_DETAIL, DESTROY_LESSON_COMMENT}