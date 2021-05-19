import { gql } from '@apollo/client';

const ALL_STUDENT_X_COMMENTX_LESSONS = gql`
    query{
        allStudentXCommentXLessons{
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
            lesson{
                id
                title
                pic
                content
                duration
                helpXp
                price
                adminId
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

const PAGINATE_STUDENT_X_COMMENT_X_LESSONS = (page, perPage) => {
    return gql`
        query{
            studentXCommentXLessons(page: ${page}, perPage: ${perPage}){
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
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
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

const SHOW_STUDENT_X_COMMENT_X_LESSON = (id) => {
    return gql`
        query{
            studentXCommentXLesson(id: ${id}){
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
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
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

export {ALL_STUDENT_X_COMMENTX_LESSONS, PAGINATE_STUDENT_X_COMMENT_X_LESSONS, SHOW_STUDENT_X_COMMENT_X_LESSON}