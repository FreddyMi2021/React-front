import {gql} from '@apollo/client';

const CREATE_LESSON_COMMENT = gql`
    mutation CreateLessonComment(
        $message: String!,
        $vote: int!,
        $refComment: Int!,
        $lessonId: int!,
        $studentid: int!
    ){
        createLessonComment(
            input: {
                message: $message,
                vote: $vote,
                refComment: $refComment,
                lessonId: $lessonId,
                studentId: $studentId
            }
        ){
            lessonComment{
                id
                message
                vote
                refComment
                lesson{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const UPDATE_LESSON_COMMENT = gql`
    mutation UpdateLessonComment(
        $id: Int!,
        $message: String!,
        $vote: int!,
        $refComment: Int!,
        $lessonId: int!,
        $studentid: int!
    ){
        updateLessonComment(
            input: {
                id: $id,
                message: $message,
                vote: $vote,
                refComment: $refComment,
                lessonId: $lessonId,
                studentId: $studentId
            }
        ){
            lessonComment{
                id
                message
                vote
                refComment
                lesson{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const DESTROY_LESSON_COMMENT = gql`
    mutation DestroyLessonComment($id: Int!){
        destroyLessonComment(input: {
            id: $id
        }){
            lessonComments{
                id
                message
                vote
                refComment
            }
        }
    }
`

export {CREATE_LESSON_COMMENT, UPDATE_LESSON_COMMENT, DESTROY_LESSON_COMMENT}