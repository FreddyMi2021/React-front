import { gql } from '@apollo/client'

const CREATE_BADGE = gql`
    mutation CreateBadge(
        $title: String!,
        $nbrXp: Int!
    ){
        createBadge(input:{
            title: $title,
            nbrXp: $nbrXp
        }){
            badge{
                id
                title
                nbrXp
            }
        }
    }
`

const UPDATE_BADGE = gql`
    mutation UpdateBadge(
        $id: Int!,
        $title: String!,
        $nbrXp: Int!
    ){
        updateBadge(input:{
            id: $id,
            title: $title,
            nbrXp: $nbrXp
        }){
            badge{
                id
                title
                nbrXp
            }
        }
    }
`

const DESTROY_BADGE = gql`
    mutation DestroyBadge($id: Int!){
        destroyBadge(input: {
            id: $id
        }){
            badges{
                id
                title
                nbrXp
            }
        }
    }
`

export {CREATE_BADGE, UPDATE_BADGE, DESTROY_BADGE}