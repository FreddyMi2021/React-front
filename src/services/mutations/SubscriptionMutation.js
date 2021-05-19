import {gql} from '@apollo/client';

const CREATE_SUBSCRIPTION = gql`
    mutation CreateSubscription(
        $price: Int!,
        $name: String!,
        $contents: String!,
        $duration: Int!
    ){
        createSubscription(
            input: {
                price: $price,
                name: $name,
                contents: $contents,
                duration: $duration
            }
        ){
            subscription{
                id
                price
                name
                contents
                duration
            }
        }
    }
`

const UPDATE_SUBSCRIPTION = gql`
    mutation UpdateSubscription(
        $id: Int!,
        $price: Int!,
        $name: String!,
        $contents: String!,
        $duration: Int!
    ){
        updateSubscription(
            input: {
                id: $id,
                price: $price,
                name: $name,
                contents: $contents,
                duration: $duration
            }
        ){
            subscription{
                id
                price
                name
                contents
                duration
            }
        }
    }
`;

const DESTROY_SUBSCRIPTION = gql`
    mutation DestroySubscription(
        $id: Int!
    ){
        destroySubscription(input: {
            id: $id
        }){
            subscriptions{
                id
            }
        }
    }
`
    
export {CREATE_SUBSCRIPTION, UPDATE_SUBSCRIPTION, DESTROY_SUBSCRIPTION}