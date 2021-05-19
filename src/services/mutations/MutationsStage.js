import {gql} from '@apollo/client';

const CREATE_STAGE = gql`
    mutation CreateStage(
        $title: String!,
        $pathId: Int!,
        $description: String!,
        $rank:Int!
    ){
        createStage(
            input: {
                title: $title,
                pathId: $pathId,
                description: $description,
                rank: $rank
            }
        ){
            stage{
                id
                title
                path{
                    id
                }
                description
                rank
            }
        }
    }
`

const UPDATE_STAGE = gql`
    mutation UpdateStage(
        $id: Int!,
        $title: String!,
        $pathId: Int!,
        $description: String!,
        $rank:Int!
    ){
        updateStage(
            input: {
                id: $id,
                title: $title,
                pathId: $pathId,
                description: $description,
                rank: $rank
            }
        ){
            stage{
                id
                title
                path{
                    id
                }
                description
                rank
            }
        }
    }
`

const DESTROY_STAGE = gql`
    mutation DestroyStage($id: Int!){
        destroyStage(input: {
            id: $id
        }){
            stages{
                id
            }
        }
    }
`

export {CREATE_STAGE, UPDATE_STAGE, DESTROY_STAGE}