import {gql} from '@apollo/client';

const CREATE_LEARNING_X_COURSE = gql`
    mutation CreateLearningXCourse(
        $rang: String!,
        $learningId: Int!,
        $courseId: Int!
    ){
        createLearningXCourse(
            input: {
                rang: $rang,
                leargingId: $learningId,
                courseId: $courseId
            }
        ){
            learningXCourse{
                id
                rang
                learning{
                    id
                }
                course{
                    id
                }
            }
        }
    }
`

const UPDATE_LEARNING_X_COURSE = gql`
    mutation UpdateLearningXCourse(
        $id: Int!,
        $rang: String!,
        $learningId: Int!,
        $courseId: Int!
    ){
        updateLearningXCourse(
            input: {
                id: $id,
                rang: $rang,
                leargingId: $learningId,
                courseId: $courseId
            }
        ){
            learningXCourse{
                id
                rang
                learning{
                    id
                }
                course{
                    id
                }
            }
        }
    }
`

const DESTROY_LEARNING_X_COURSE = gql`
    mutation DestroyLearningXCourse($id: Int!){
        destroyLearningXCourse(input: {
            id: $id
        })[
            learningXCourses{
                id
                rang
                learning{
                    id
                    title
                    description
                    pic
                    price
                    discount
                }
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
            }
        ]
    }
`

export {CREATE_LEARNING_X_COURSE, UPDATE_LEARNING_X_COURSE, DESTROY_LEARNING_X_COURSE}