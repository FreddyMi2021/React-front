import {gql} from '@apollo/client';

const CREATE_LESSON = gql`
    mutation CreateLesson(
        $title: String!,
        $pic: String!,
        $content: String!,
        $duration: int!,
        $helpXp: Int!,
        $price: Int!,
        $adminId: Int!
    ){
        createLesson(
            input: {
                title: $title,
                pic: $pic,
                content: $content,
                duration: $duration,
                helpXp: $heloXp,
                price: $price,
                adminId: $adminId
            }
        ){
            lesson{
                id
                title
                pic
                content
                duration
                helpXp
                price
                admin{
                    id
                }
            }
        }
    }
`

const UPDATE_LESSON = gql`
    mutation UpdateLesson(
        $id: Int!,
        $title: String!,
        $pic: String!,
        $content: String!,
        $duration: int!,
        $helpXp: Int!,
        $price: Int!,
        $adminId: Int!
    ){
        updateLesson(
            input: {
                id: $id,
                title: $title,
                pic: $pic,
                content: $content,
                duration: $duration,
                helpXp: $heloXp,
                price: $price,
                adminId: $adminId
            }
        ){
            lesson{
                id
                title
                pic
                content
                duration
                helpXp
                price
                admin{
                    id
                }
            }
        }
    }
`

const DESTROY_LESSON = gql`
    mutation DestroyLesson($id: int!){
        destroyLesson(input: {
            id: $id
        }){
            lessons{
                id
                title
                pic
                content
                duration
                helpXp
                price
            }
        }
    }
`

export {CREATE_LESSON, UPDATE_LESSON, DESTROY_LESSON}