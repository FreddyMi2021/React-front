import {gql} from '@apollo/client';

const CREATE_STUDENT_X_COMMENT_X_LESSON_VIDEO = gql`
    mutation CreateStudentXCommentXLessonVideo(
        $studentId: Int!,
        $lessonVideoId: Int
    ){
        createStudentXCommentXLessonVideo(
            input: {
                studentId: $studentId,
                lessonVideoId: $lessonVideoId
            }
        ){
            studentXCommentXLessonVideo{
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                lessonVideo{
                    id
                    path
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_COMMENT_X_LESSON_VIDEO = gql`
    mutation UpdateStudentXCommentXLessonVideo(
        $id: Int!,
        $studentId: Int!,
        $lessonVideoId: Int
    ){
        updateStudentXCommentXLessonVideo(
            input: {
                id: $id,
                studentId: $studentId,
                lessonVideoId: $lessonVideoId
            }
        ){
            studentXCommentXLessonVideo{
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                lessonVideo{
                    id
                    path
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_COMMENT_X_LESSON_VIDEO = gql`
    mutation DestroyStudentXCommentXLessonVideo($id: Int!){
        destroyStudentXCommentXLessonVideo(input: {
            id: $id
        }){
            studentXCommentXLessonVideos{
                id
            }
        }
    }
`

export {CREATE_STUDENT_X_COMMENT_X_LESSON_VIDEO, UPDATE_STUDENT_X_COMMENT_X_LESSON_VIDEO, DESTROY_STUDENT_X_COMMENT_X_LESSON_VIDEO}