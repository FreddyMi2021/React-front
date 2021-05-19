import {gql} from '@apollo/client'

const CREATE_PATH = gql`
    mutation CreatePath(
        $title: String!,
        $pic: String!,
        $description: String!
    ){
        createPath(input: {
            title: $title
            pic: $title,
            description: $description
        }){
            path{
                id
                title
            }
        }
    }
`

const UPDATE_PATH = gql`
    mutation CreatePath(
        $id: Int!,
        $title: String!,
        $description: String!
    ){
        createPath(input: {
            id: $id,
            title: $title,
            description: $description
        }){
            path{
                id
                title
                description
            }
        }
    }
`

const DESTROY_PATH = gql`
    mutation DestroyPath($id: Int!){
        destroyPath(input: {
            id: $id
        }){
            paths{
                id
                title
            }
        }
    }
`

export {CREATE_PATH, UPDATE_PATH, DESTROY_PATH}