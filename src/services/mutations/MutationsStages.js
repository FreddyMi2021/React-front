import { gql } from '@apollo/client';


const CREATE_STAGES = gql`
    mutation CreateStage(
        $title: String!,
        $pathId: Int!, 
        $description: String!,
        $rank: Int!
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
                description
                rank
                path{
                    id
                    title
                }
            }
        }
    }
`

const UPDATE_STAGES =  gql`
    mutation UpdateStage(
        $id:Int!,
        $title: String!,
        $pathId: Int!, 
        $description: String!,
        $rank: Int!
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
                description
                rank
                path{
                    id
                    title
                }
            }
        }
    }
`


const DELETE_STAGES = gql`
    mutation DestroyStage($id: int!){
        destroyStage(
            input:{
               id: $id
            }
        ){
            stages{
                id
                title
            }
        }
    }
`

export {CREATE_STAGES, UPDATE_STAGES, DELETE_STAGES}