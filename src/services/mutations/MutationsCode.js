import {gql} from '@apollo/client'

const CREATE_CODE = gql`
    mutation CreateCode(
        $languages: String!,
        $description: String!,
        $content: String!,
        $privacy: String!,
        $studentId: Int!
    ){
        createCode(input:{
            languages: $languages,
            description: $description,
            content: $content,
            privacy: $privacy,
            studentId: $studentId
        }){
            code{
                id
                languages
                description
                content
                privacy
                student{
                    id
                }
            }
        }
    }
`

const UPDATE_CODE = gql`
    mutation UpdateCode(
        $id: Int!,
        $languages: String!,
        $description: String!,
        $content: String!,
        $privacy: String!,
        $studentId: Int!
    ){
        updateCode(input:{
            id: $id,
            languages: $languages,
            description: $description,
            content: $content,
            privacy: $privacy,
            studentId: $studentId
        }){
            code{
                id
                languages
                description
                content
                privacy
                student{
                    id
                }
            }
        }
    }
`

const DESTROY_CODE = gql`
    mutation DestroyCode($id: Int!){
        destroyCode(input: {
            id: $id
        }){
            codes{
                id
                languages
                description
                content
                privacy
            }
        }
    }
`

export { CREATE_CODE, UPDATE_CODE, DESTROY_CODE}