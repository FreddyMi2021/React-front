import {gql} from '@apollo/client';

const CREATE_STUDENT_X_COMMENT_X_LESSON = gql`
    mutation CreateStudentXCommentXLesson(
        $studentId: Int!,
        $lessonId: Int!
    ){
        createStudentXCommentXLesson(
            input: {
                studentId: $studentId,
                lessonId: $lessonId
            }
        ){
            studentXCommentXLesson{
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                    password
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_COMMENT_X_LESSON = gql`
    mutation UpdateStudentXCommentXLesson(
        $id: Int!,
        $studentId: Int!,
        $lessonId: Int!
    ){
        updateStudentXCommentXLesson(
            input: {
                id: $id,
                studentId: $studentId,
                lessonId: $lessonId
            }
        ){
            studentXCommentXLesson{
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                    password
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_COMMENT_X_LESSON = gql`
    mutation DestroyStudentXCommentXLesson($id: Int!){
        destroyStudentXCommentXLesson(input: {
            id: $id
        }){
            studentXCommentXLessons{
                id
                student{
                    id
                }
                lesson{
                    id
                }
            }
        }
    }
`

export {CREATE_STUDENT_X_COMMENT_X_LESSON, UPDATE_STUDENT_X_COMMENT_X_LESSON, DESTROY_STUDENT_X_COMMENT_X_LESSON}