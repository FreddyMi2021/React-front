import {gql} from '@apollo/client';

const ALL_SUBSCRIPTION = gql`
    query{
        allSubscriptions{
            id
            price
            contents
            name
            duration
        }
    }
`
const PAGINATE_SUBSCRIPTION = (page, perPage)=>{
    return gql`
        query{
            subscriptions(page: ${page}, perPage: ${perPage}){
                id
                price
                contents
                name
                duration
                studentXSubscriptions{
                    id
                    expiryDate
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                    createdAt
                }
            }
        }
    `
}

const SHOW_SUBSCRIPTION = (id)=>{
    return gql`
        query{
            subscription(id: ${id}){
                id
                price
                contents
                name
                duration
                studentXSubscriptions{
                    id
                    expiryDate
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                    createdAt
                }
            }
        }
    `
}

export {ALL_SUBSCRIPTION, PAGINATE_SUBSCRIPTION, SHOW_SUBSCRIPTION}