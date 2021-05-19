import {gql} from '@apollo/client';

const CREATE_INSTRUCTION = gql`
    mutation CreateInstruction(
        $title: String!,
        $paragraph: String!,
        $indicationId: int!
    ){
        createInstruction(
            input: {
                title: $title,
                paragraph: $paragraph,
                indicationId: $indicationId
            }
        ){
            instruction{
                title
                paragraph
                indication{
                    id
                }
            }
        }
    }
`
const UPDATE_INSTRUCTION = gql`
    mutation UpdateInstruction(
        $id: Int!,
        $title: String!,
        $paragraph: String!,
        $indicationId: int!
    ){
        updateInstruction(
            input: {
                id: $id,
                title: $title,
                paragraph: $paragraph,
                indicationId: $indicationId
            }
        ){
            instruction{
                title
                paragraph
                indication{
                    id
                }
            }
        }
    }
`

const DESTROY_INSTRUCTION = gql`
    mutation DestroyInstruction($id: Int!){
        destroyInstruction(input: {
            id: $id
        }){
            instructions{
                id
                title
                paragraph
            }
        }
    }
`

export {CREATE_INSTRUCTION, UPDATE_INSTRUCTION, DESTROY_INSTRUCTION}