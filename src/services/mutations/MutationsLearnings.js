import { gql } from '@apollo/client';


const CREATE_LEARNINGS = gql`
    mutation CreateLearning(
        $title: String!, 
        $description: String!, 
        $pic: String!, 
        $price: Int!, 
        $discount: Int!, 
        $stageId: Int!
    ){
        createLearning(input: {
            title: $title, 
            description: $description, 
            pic: $pic, 
            price: $price, 
            discount: $discount, 
            stageId: $stageId
        }){
            learning{
                id
                title
                description
                pic
                price
                discount
                stage{
                    id
                }
            }
            
        }
    }

`

const UPDATE_LEARNINGS =  gql`
    mutation UpdateLearning(
        $id: Int!,
        $title: String!, 
        $description: String!, 
        $pic: String!, 
        $price: Int!, 
        $discount: Int!, 
        $stageId: Int!
    ){
        updateLearning( input: {
            id: $id,
            title: $title, 
            description: $description, 
            pic: $pic, 
            price: $price, 
            discount: $discount, 
            stageId: $stageId
        }){
            learning{
                id
                title
                description
                pic
                price
                discount
                stage{
                    id
                }
            }
            
        }
    }
`


const DELETE_LEARNINGS = gql`
    mutation DestroyLearning($id: int!){
        destroyLearning(input: {
            id: $id
        }){
            learnings{
                id
                title
                description
                pic
                price
                discount
            }
        }
    }
`

export {CREATE_LEARNINGS, UPDATE_LEARNINGS, DELETE_LEARNINGS}