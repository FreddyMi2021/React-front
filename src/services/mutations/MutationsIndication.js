import {gql} from '@apollo/client';

const CREATE_INDICATION = gql`
    mutation CreateIndication(
        $content: String!,
        $exerciseId: Int!
    ){
        createIndication(
            input: {
                content: $content,
                exerciseId: $exerciseId
            }
        ){
            indication{
                id
                content
                exercice{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
                }
            }
        }
    }
`

const UPDATE_INDICATION = gql`
    mutation UpdateIndication(
        $id: Int!,
        $content: String!,
        $exerciseId: Int1
    ){
        updateIndication(
            input: {
                id: $id,
                content: $content,
                exerciseId: $exerciseId
            }
        ){
            indication{
                id
                content
                exercice{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
                }
            }
        }
    }
`

const DESTROY_INDICATION = gql`
    mutation DestroyIndication($id: Int!){
        destroyIndication(input: {
            id: $id
        }){
            indications{
                id
                content
                exercise{
                    id
                }
            }
        }
    }
`

export {CREATE_INDICATION, UPDATE_INDICATION, DESTROY_INDICATION}