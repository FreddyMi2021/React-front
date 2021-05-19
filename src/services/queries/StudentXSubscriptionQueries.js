import {gql} from '@apollo/client';

const ALL_STUDENT_X_SUBSCRIPTIONS = gql`
    query{
        allStudentXSubscriptions{
            id
            pic
            student{
                id
                name
                nickname
                image
                email
            }
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

const PAGINATE_STUDENT_X_SUBSCRIPTIONS = (page, perPage)=>{
    return gql`
        query{
            studentXSubscriptions(page: ${page}, perPage: ${perPage}){
                id
                pic
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
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
}

const SHOW_STUDENT_X_SUBSCRIPTION = (id)=>{
    return gql`
        query{
            studentXSubscription(id: ${id}}){
                id
                pic
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
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
}


const STUDENT_X_SUBSCRIPTION_BY_STUDENT_ID = (studentId)=>{
    return gql`
        query{
            studentXSubscriptionByStudentId(studentId: ${studentId}){
                id
            }
        }
    `
}
export {ALL_STUDENT_X_SUBSCRIPTIONS, 
    PAGINATE_STUDENT_X_SUBSCRIPTIONS, 
    SHOW_STUDENT_X_SUBSCRIPTION,
    STUDENT_X_SUBSCRIPTION_BY_STUDENT_ID
}