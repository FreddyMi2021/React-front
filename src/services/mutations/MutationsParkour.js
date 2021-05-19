import {gql} from '@apollo/client';

const CREATE_PARCOUR = gql`
    mutation CreateParkour(
        $name: String!,
        $stageId: Int!
    ){
        createParkour(
            input: {
                name: $name,
                stageId: $stageId
            }
        ){
            parkour{
                id
                name
                stage{
                    id
                }
            }
        }
    }
`

const UPDATE_PARCOUR = gql`
    mutation UpdateParkour(
        $id: Int!,
        $name: String!,
        $stageId: Int!
    ){
        updateParkour(
            input: {
                id: $id,
                name: $name,
                stageId: $stageId
            }
        ){
            parkour{
                id
                name
                stage{
                    id
                }
            }
        }
    }
`

const DESTROY_PARKOUR = gql`
    mutation DestroyParkour($id: Int!){
        destroyParkour(input: {
            id: $id
        }){
            parkours{
                id
            }
        }
    }
`

export {CREATE_PARCOUR, UPDATE_PARCOUR, DESTROY_PARKOUR}