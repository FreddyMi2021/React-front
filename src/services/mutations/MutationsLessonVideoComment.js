import {gql} from '@apollo/client';

const CREATE_LESSON_VIDEO_COMMENT = gql`
    mutation CreateLessonVideoComment(
        $message: String!,
        $vote: Int!,
        $refComment: Int!,
        $lessonVideoId: int!,
        $studentId: Int!
    ){
        createLessonVideoComment(
            input: {
                message: $message,
                vote: $vote,
                refComment: $refComment,
                lessonVideoId: $lessonVideoId,
                studentId: $studentId
            }
        ){
            lessonComment{
                id
                message
                refComment
                lessonVideo{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const UPDATE_LESSON_VIDEO_COMMENT = gql`
    mutation updateLessonVideoComment(
        $id: Int!,
        $message: String!,
        $vote: Int!,
        $refComment: Int!,
        $lessonVideoId: int!,
        $studentId: Int!
    ){
        updateLessonVideoComment(
            input: {
                id: $id,
                message: $message,
                vote: $vote,
                refComment: $refComment,
                lessonVideoId: $lessonVideoId,
                studentId: $studentId
            }
        ){
            lessonComment{
                id
                message
                refComment
                lessonVideo{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const DESTROY_LESSON_VIDEO_COMMENT = gql`
    mutation DestroyLessonVideoComment($id: Int!){
        destroyLessonVideoComment(input: {
            id: $id
        }){
            lessonVideoComments{
                id
            }
        }
    }
`

export {CREATE_LESSON_VIDEO_COMMENT, UPDATE_LESSON_VIDEO_COMMENT, DESTROY_LESSON_VIDEO_COMMENT}