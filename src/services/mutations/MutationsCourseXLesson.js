import { gql } from '@apollo/client';

const CREATE_COURSE_X_LESSON = gql`
    mutation CreateCourseXLesson(
        $rang: Int!,
        $courseId: Int!,
        $lessonId: Int!
    ){
        createCourseXLesson(
            input: {
                rang: $rang,
                courseId: $courseId,
                lessonId: $lessonId
            }
        ){
            courseXLesson{
                id
                rang
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
                lesson{
                    id
                    title
                    description
                    pic
                    price
                    discount
                }
            }
        }
    }
`

const UPDATE_COURSE_X_LESSON = gql`
    mutation UpdateCourseXLesson(
        $id: Int!,
        $rang: Int!,
        $courseId: Int!,
        $lessonId: Int!
    ){
        updateCourseXLesson(
            input: {
                id: $id,
                rang: $rang,
                courseId: $courseId,
                lessonId: $lessonId
            }
        ){
            courseXLesson{
                id
                rang
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
                lesson{
                    id
                    title
                    description
                    pic
                    price
                    discount
                }
            }
        }
    }
`

const DESTROY_COURSE_X_LESSON = gql`
    mutation DestroyCourseXLesson(
        $id: Int!
    ){
        destroyCourseXLesson(
            input: {
                id: $id
            }
        ){
            courseXLessons{
                id
            }
        }
    }
`

export { CREATE_COURSE_X_LESSON, UPDATE_COURSE_X_LESSON, DESTROY_COURSE_X_LESSON}