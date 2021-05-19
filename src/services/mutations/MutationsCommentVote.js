import {gql} from '@apollo/client';

const CREATE_COMMENT_VOTE = gql`
    mutation CreateCommentVote(
        $commentId: Int!,
        $studentId: Int!,
        $typeVote: String!
    ){
        createCommentVote(
            input: {
                commentId: $commentId,
                studentId: $studentId,
                typeVote: $typeVote
            }
        ){
            commentVote{
                id
                comment{
                    id
                }
                student{
                    id
                }
                typeVote
            }
        }
    }
`

const UPDATE_COMMENT_VOTE = gql`
    mutation UpdateCommentVote(
        $id: Int!,
        $commentId: Int!,
        $studentId: Int!,
        $typeVote: String!
    ){
        updateCommentVote(
            input: {
                id: $id,
                commentId: $commentId,
                studentId: $studentId,
                typeVote: $typeVote
            }
        ){
            commentVote{
                id
                comment{
                    id
                }
                student{
                    id
                }
                typeVote
            }
        }
    }
`

const DESTROY_COMMENT_VOTE = gql`
    mutation DestroyCommentVote($id: Int!){
        destroyCommentVote(
            input: {
                id: $id
            }
        ){
            commentVotes{
                id
                comment{
                    id
                }
                student{
                    id
                }
                typeVote
            }
        }
    }
`

export { CREATE_COMMENT_VOTE, DESTROY_COMMENT_VOTE, UPDATE_COMMENT_VOTE}