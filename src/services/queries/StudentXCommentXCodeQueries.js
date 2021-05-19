import {gql} from '@apollo/client';

const ALL_STUDENT_X_COMMENT_X_CODE = gql`
    query{
        allStudentXCommentXCodes{
            id
            student{
                id
                name
                nickname
                image
                email
                totalXp
                totalBadge
                totalTimePassed
                totalCodeLine
            }
            code{
                id
                languages
                description
                content
                privacy
                codeVotes{
                    id
                }
            }
            comments{
                id
                types
                content
                commentVotes{
                    id
                    typeVote
                }
                commentResponses{
                    id
                    content
                }
            }
        }
    }
`

const PAGINATE_STUDENT_X_COMMENT_X_CODES = (page, perPage) => {
    return gql`
        query{
            studentXCommentXCodes(page: ${page}, perPage: ${perPage}){
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                code{
                    id
                    languages
                    description
                    content
                    privacy
                    codeVotes{
                        id
                    }
                }
                comments{
                    id
                    types
                    content
                    commentVotes{
                        id
                        typeVote
                    }
                    commentResponses{
                        id
                        content
                    }
                }   
            }
        }
    `
}

const SHOW_STUDENT_X_COMMENT_X_CODE = (id) => {
    return gql`
        query{
            studentXCommentXCode(id: ${id}){
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                code{
                    id
                    languages
                    description
                    content
                    privacy
                    codeVotes{
                        id
                    }
                }
                comments{
                    id
                    types
                    content
                    commentVotes{
                        id
                        typeVote
                    }
                    commentResponses{
                        id
                        content
                    }
                } 
            }
        }
    `
}

export {ALL_STUDENT_X_COMMENT_X_CODE, PAGINATE_STUDENT_X_COMMENT_X_CODES, SHOW_STUDENT_X_COMMENT_X_CODE}