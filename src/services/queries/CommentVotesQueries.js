import { gql } from '@apollo/client';

const ALL_COMMENT_VOTES = gql`
    query{
        allCommentVotes{
            id
            comment{
                id
                types
                content
            }
        }
    }
`

const PAGINATE_COMMENT_VOTES = (page, perPage) => {
    return gql`
        query{
            commentVotes(page: ${page}, perPage: ${perPage}){
                id
                comment{
                    id
                    types
                    content
                }
            }
        }
    `
}

const SHOW_COMMENT_VOTE = (id) => {
    return gql`
        query{
            commentVote(id: ${id}){
                id
                comment{
                    id
                    types
                    content
                }
            }
        }
    `
}

export {ALL_COMMENT_VOTES, PAGINATE_COMMENT_VOTES, SHOW_COMMENT_VOTE}