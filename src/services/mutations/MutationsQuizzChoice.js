import {gql} from '@apollo/client';

const CREATE_QUIZZ_CHOICE = gql`
    mutation CreateQuizzChoice(
        $choice: String!,
        $quizzId: Int!
    ){
        createQuizzChoice(
            input: {
                choice: $choice,
                quizzId: $quizzId
            }
        ){
            quizzChoice{
                id
                choice
                quizz{
                    id
                }
            }
        }
    }
`

const UPDATE_QUIZZ_CHOICE = gql`
    mutation UpdateQuizzChoice(
        $id: Int!,
        $choice: String!,
        $quizzId: Int!
    ){
        UpdateQuizzChoice(
            input: {
                id: $id,
                choice: $choice,
                quizzId: $quizzId
            }
        ){
            quizzChoice{
                id
                choice
                quizz{
                    id
                }
            }
        }
    }
`

const DESTROY_QUIZZ_CHOICE = gql`
    mutation DestroyQuizzChoice($id: Int!){
        destroyQuizzChoice(input: {
            id: $id
        }){
            quizzChoices{
                id
            }
        }
    }
`

export {CREATE_QUIZZ_CHOICE, UPDATE_QUIZZ_CHOICE, DESTROY_QUIZZ_CHOICE}