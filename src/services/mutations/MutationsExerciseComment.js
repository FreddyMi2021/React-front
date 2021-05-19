import { gql } from '@apollo/client';

const CREATE_EXERCISE_COMMENT = gql`
    mutation CreateExerciseComment(
        $message: String!,
        $vote: Int!,
        $refComment: int1,
        $exerciseId: Int!,
        $studentId: Int!
    ){
        createExerciseComment(
            input: {
                message: $message,
                vote: $vote,
                refComment: $refComment,
                exerciseId: $exerciseId,
                studentId: $studentId
            }
        ){
            exerciseComment{
                id
                message
                refComment
                exercise{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const UPDATE_EXERCISE_COMMENT = gql`
    mutation UpdateExerciseComment(
        $id: Int!,
        $message: String!,
        $vote: Int!,
        $refComment: int1,
        $exerciseId: Int!,
        $studentId: Int!
    ){
        updateExerciseComment(
            input: {
                id: $id,
                message: $message,
                vote: $vote,
                refComment: $refComment,
                exerciseId: $exerciseId,
                studentId: $studentId
            }
        ){
            exerciseComment{
                id
                message
                refComment
                exercise{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const DESTROY_EXERCISE_COMMENT = gql`
    mutation DestroyExerciseComment($id: Int!){
        destroyExerciseComment(input: {
            id: $id
        }){
            exerciseComments{
                id
                message
                vote
            }
        }
    }
`

export { CREATE_EXERCISE_COMMENT, UPDATE_EXERCISE_COMMENT, DESTROY_EXERCISE_COMMENT}