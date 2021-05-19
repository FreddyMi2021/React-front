import {gql} from '@apollo/client';

const CREATE_COURSE_DETAILS = gql`
    mutation CreateCourseDetail(
        $detail: String!,
        $courseId: Int!
    ){
        createCourseDetail(
            input: {
                detail: $detail,
                courseId: $courseId
            }
        ){
            courseDetail{
                id
                detail
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
            }
        }
    }
`

const UPDATE_COURSE_DETAILS = gql`
    mutation UpdateCourseDetail(
        $id: Int!,
        $detail: String!,
        $courseId: Int!
    ){
        updateCourseDetail(
            input: {
                id: $id,
                detail: $detail,
                courseId: $courseId
            }
        ){
            courseDetail{
                id
                detail
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
            }
        }
    }
`

const DESTROY_COURSE_DETAIL = gql`
    mutation DestroyCourseDetail($id: Int!){
        destroyCourseDetail(
            input: {
                id: $id
            }
        ){
            coursedetails{
                id
            }
        }
    }
`

export {CREATE_COURSE_DETAILS, UPDATE_COURSE_DETAILS, DESTROY_COURSE_DETAIL}