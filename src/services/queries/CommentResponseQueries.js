import { gql } from '@apollo/client';

const ALL_COMMENT_RESPONSES = gql`
    query{
        allCommentResponses{
            id
            content
            comment{
                id
                types
                content
                commentVotes{
                    id
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                    typeVote
                }
            }
            student{
                id
                name
                nickname
                image
                email
            }
            commentResponseVotes{
                id
                content
            }
        }
    }
`

const PAGINATE_COMMENT_RESPONSES = (page, perPage) => {
    return gql`
        query{
            commentResponses(page: ${page}, perPage: ${perPage}){
                id
                content
                comment{
                    id
                    types
                    content
                    commentVotes{
                        id
                        student{
                            id
                            name
                            nickname
                            image
                            email
                        }
                        typeVote
                    }
                }
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                commentResponseVotes{
                    id
                    content
                }
            }
        }
    `
}

const SHOW_COMMENT_RESPONSE = (id) => {
    return gql`
        query{
            commentResponse(id: ${id}){
                id
                comment{
                    id
                    types
                    content
                    commentVotes{
                        id
                        student{
                            id
                            name
                            nickname
                            image
                            email
                        }
                        typeVote
                    }
                }
            }
        }
    `
}

export { ALL_COMMENT_RESPONSES, PAGINATE_COMMENT_RESPONSES, SHOW_COMMENT_RESPONSE}