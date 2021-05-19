import {gql} from '@apollo/client';

const CREATE_COMMENT_RESPONSE = gql`
    mutation CreateCommentResponse(
        $content: String!,
        $commentId: Int!,
        $studentId: Int!
    ){
        createCommentResponse(
            input: {
                content: $content,
                commentId: $commentId,
                studentId: $studentId
            }
        ){
            commentResponse{
                id
                content
                comment{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const UPDATE_COMMENT_RESPONSE = gql`
    mutation UpdateCommentResponse(
        $id: Int!,
        $content: String!,
        $commentId: Int!,
        $studentId: Int!
    ){
        updateCommentResponse(
            input: {
                id: $id,
                content: $content,
                commentId: $commentId,
                studentId: $studentId
            }
        ){
            commentResponse{
                id
                content
                comment{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const DESTROY_COMMENT_RESPONSE = gql`
    mutation DestroyCommentResponse($id: Int!){
        destroyCommentResponse(input: {
            id: $id
        }) {
            commentResponses{
                id
                content
            }
        }
    }
`

export { CREATE_COMMENT_RESPONSE, UPDATE_COMMENT_RESPONSE, DESTROY_COMMENT_RESPONSE}