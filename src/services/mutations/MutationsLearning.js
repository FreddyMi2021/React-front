import {gql} from '@apollo/client';

const CREATE_LEARNING = gql`
    mutation CreateLearning(
        $title: String!,
        $description: String!,
        $price: Int!,
        $discount: Int!,
        $pic: String!,
        $stageId: Int!
    ){
        createLearning(
            input: {
                title: $title,
                description: $desrciption,
                price: $price,
                discount: $discount,
                pic: $pic,
                stageId: $stageId
            }
        ){
            learning{
                id
                title
                description
                price
                discount
                pic
                stage{
                    id
                }
            }
        }
    }
`

const UPDATE_LEARNING = gql`
    mutation UpdateLearning(
        $id: Int!,
        $title: String!,
        $description: String!,
        $price: Int!,
        $discount: Int!,
        $pic: String!,
        $stageId: Int!
    ){
        updateLearning(
            input: {
                id: $id,
                title: $title,
                description: $desrciption,
                price: $price,
                discount: $discount,
                pic: $pic,
                stageId: $stageId
            }
        ){
            learning{
                id
                title
                description
                price
                discount
                pic
                stage{
                    id
                }
            }
        }
    }
`

const DESTROY_LEARNING = gql`
    mutation DestroyLearning($id: Int!){
        destroyLearning(input: {
            id: $id
        }){
            learnings{
                id
            }
        }
    }
`

export {CREATE_LEARNING, UPDATE_LEARNING, DESTROY_LEARNING}