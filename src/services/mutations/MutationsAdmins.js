import { gql } from '@apollo/client';

const CREATE_ADMINS = gql`
    mutation CreateAdmin(
        $name: String!,
        $nickname: String!,
        $image: String!,
        $email: String!,
        $password: String
    ){
        createAdmin(
            input: {
                name: $name,
                nickname: $nickname,
                image: $image,
                email: $email,
                password: $password
            }
        ){
            admin{
                name
                nickname
                image
                email
                password
            }
        }
    }

`

const UPDATE_ADMINS = gql`
    mutation UpdateAdmin(
        $id: Int!,
        $name: String!,
        $nickname: String!,
        $image: String!,
        $email: String!,
        $encryptedPassword: String
    ){
        updateAdmin(
            input: {
                id: $id,
                name: $name,
                nickname: $nickname,
                image: $image,
                email: $email,
                encryptedPassword: $password
            }
        ){
            admin{
                id
                name
                nickname
                image
                email
                encryptedPassword
            }
        }
    }

`

const DESTROY_ADMIN = gql`
    mutation DestroyAdmin(
        $id: Int!
    ){
        destroyAdmin(input: {
            id: $id
        }){
            admins{
                id
                name
                nickname
                image
                email
            }
        }
    }
`

export { CREATE_ADMINS, UPDATE_ADMINS, DESTROY_ADMIN}