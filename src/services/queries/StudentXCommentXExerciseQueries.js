import { gql } from '@apollo/client';

const ALL_STUDENT_X_COMMENT_X_EXERCISE = gql`
    query{
        allStudentXCommentXExercises{
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
            exercise{
                id
                instruction
                solution
                hint
                attemptMax
                durationMax
                failXp
                timeXp
                language
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

const PAGINATE_STUDENT_X_COMMENT_X_EXERCISE = (page, perPage) => {
    return gql`
        query{
            studentXCommentXExercises(page: ${page}, perPage: ${perPage}){
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
                exercise{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
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

const SHOW_STUDENT_X_COMMENT_X_EXERCISE = (id) => {
    return gql`
        query{
            studentXCommentXExercise(id: ${id}){
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
                exercise{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
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

export { ALL_STUDENT_X_COMMENT_X_EXERCISE, PAGINATE_STUDENT_X_COMMENT_X_EXERCISE, SHOW_STUDENT_X_COMMENT_X_EXERCISE}