import {gql} from '@apollo/client';

const CREATE_CODE_VOTE = gql`
    mutation CreateCodeVote(
        $codeId: Int!,
        $studentId: Int!
    ){
        createCodeVote(
            input: {
                codeId: $codeId,
                studentId: $studentId
            }
        ){
            codeVote{
                id
                code{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const UPDATE_CODE_VOTE = gql`
    mutation UpdateCodeVote(
        $id: Int!,
        $codeId: Int!,
        $studentId: Int!
    ){
        updateCodeVote(
            input: {
                id: $id,
                codeId: $codeId,
                studentId: $studentId
            }
        ){
            codeVote{
                id
                code{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const DESTROY_CODE_VOTE = gql`
    mutation DestroyCodeVote($id: Int!){
        destroyCodeVote(
            input: {
                id: $id
            }{
                codeVotes{
                    id
                    code{
                        id
                    }
                    student{
                        id
                    }
                }
            }
        )
    }
`

export { CREATE_CODE_VOTE, UPDATE_CODE_VOTE, DESTROY_CODE_VOTE }