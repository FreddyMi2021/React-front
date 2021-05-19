import {gql} from '@apollo/client';

const CREATE_DOCUMENT = gql`
    mutation CreateDocument(
        $title: String!,
        $description: String!,
        $isNotified: Boolean!
    ){
        createDocument(
            input: {
                title: $title,
                description: $description,
                isNotified: $isNotified
            }
        ){
            document{
                id
                title
                description
                isNotified
            }
        }
    }
`

const UPDATE_DOCUMENT = gql`
    mutation UpdateDocument(
        $id: Int!,
        $title: String!,
        $description: String!,
        $isNotified: Boolean!
    ){
        updateDocument(
            input: {
                id: $id,
                title: $title,
                description: $description,
                isNotified: $isNotified
            }
        ){
            document{
                id
                title
                description
                isNotified
            }
        }
    }
`
const DESTROY_DOCUMENT = gql`
    mutation DestroyDocument($id: Int!){
        destroyDocument(input: {
            id: $id
        }){
            documents{
                id
            }
        }
    }
`

export {
    CREATE_DOCUMENT,
    UPDATE_DOCUMENT,
    DESTROY_DOCUMENT
}