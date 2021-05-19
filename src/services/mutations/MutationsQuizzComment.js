import {gql} from '@apollo/client';

const CREATE_QUIZZ_COMMENT = gql`
    mutation CreateQuizzComment(
        $message: String!,
        $vote: Int!,
        $refComment: Int!,
        $quizzid: Int!,
        $studentId: Int!
    ){
        createQuizzComment(
            input: {
                message: $message,
                vote: $vote,
                refComment: $refComment,
                quizzId: $quizzId,
                studentId: $studentId
            }
        ){
            quizzComment{
                id
                message
                vode
                refComment
                quizz{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const UPDATE_QUIZZ_COMMENT = gql`
    mutation UpdateQuizzComment(
        $id: Int!,
        $message: String!,
        $vote: Int!,
        $refComment: Int!,
        $quizzid: Int!,
        $studentId: Int!
    ){
        updateQuizzComment(
            input: {
                id: $id,
                message: $message,
                vote: $vote,
                refComment: $refComment,
                quizzId: $quizzId,
                studentId: $studentId
            }
        ){
            quizzComment{
                id
                message
                vode
                refComment
                quizz{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const DESTROY_QUIZZ_COMMENT = gql`
    mutation DestroyQuizzComment($id: Int!){
        destroyQuizzComment(input: {
            id: $id
        }){
            quizzComments{
                id
            }
        }
    }
`

export {CREATE_QUIZZ_COMMENT, UPDATE_QUIZZ_COMMENT, DESTROY_QUIZZ_COMMENT}