import { gql } from '@apollo/client';

const CREATE_QUIZZS = gql`
    mutation CreateQuizz(
        $ask: String!,
        $answer: String!,
        $xp: Int!,
        $lessonId: Int!
    ){
        createQuizz(
            input:{
                ask: $ask,
                answer: $answer,
                xp: $xp,
                lessonId: $lessonId
            }){
                quizz{
                    ask
                    answer
                    xp
                    lesson{
                        id
                    }
                }
            }
        }
    }
`

const UPDATE_QUIZZS = gql`
    mutation UpdateQuizz(
        $id: int!,
        $ask: String!,
        $answer: String!,
        $xp: Int!,
        $lessonId: Int!
    ){
        updateQuizz(
            input:{
                id: $id,
                ask: $ask,
                answer: $answer,
                xp: $xp,
                lessonId: $lessonId
            }){
                quizz{
                    ask
                    answer
                    xp
                    lesson{
                        id
                    }
                }
            }
        }
    }
`

const DESTROY_QUIZZ = gql`
    mutation DestroyQuizz($id: int!){
        destroyQuizz(
            input:{
                id: $id
            }
        ){
            quizzs{
                id
            }
        }
    }
`

export {CREATE_QUIZZS, UPDATE_QUIZZS, DESTROY_QUIZZ}