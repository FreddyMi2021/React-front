import { gql } from '@apollo/client';

const ALL_QUIZZ_COMMENTS = gql`
    query{
        allQuizzComments{
            id
            message
            vote
            refComment
            quizz{
                id
                ask
                answer
                xp
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
                quizzChoices{
                    id
                    choice
                }
                studentXQuizzs{
                    id
                    duration
                    isAchieved
                    isTrue
                }
            }
            student{
                id
                name
                nickname
                image
                email
            }
        }
    }
`

const PAGINATE_QUIZZ_COMMENTS = (page, perPage) => {
    return gql`
        query{
            quizzComments(page: ${page}, perPage: ${perPage}){
                id
                message
                vote
                refComment
                quizz{
                    id
                    ask
                    answer
                    xp
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
                    quizzChoices{
                        id
                        choice
                    }
                    studentXQuizzs{
                        id
                        duration
                        isAchieved
                        isTrue
                    }
                }
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
            }
        }
    `
}

const SHOW_QUIZZ_COMMENT = (id) => {
    return gql`
        quizzComment(id: ${id}){
            id
            message
            vote
            refComment
            quizz{
                id
                ask
                answer
                xp
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
                quizzChoices{
                    id
                    choice
                }
                studentXQuizzs{
                    id
                    duration
                    isAchieved
                    isTrue
                }
            }
            student{
                id
                name
                nickname
                image
                email
            }
        }
    `
}

export {ALL_QUIZZ_COMMENTS, PAGINATE_QUIZZ_COMMENTS, SHOW_QUIZZ_COMMENT}