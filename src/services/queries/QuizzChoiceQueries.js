import { gql } from '@apollo/client';
const ALL_QUIZZ_CHOICES = gql`
    query{
        allQuizzChoices{
            id
            choice
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
                    price
                }
                studentXQuizzs{
                    id
                    duration
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                }
            }
        }
    }
`

const PAGINATE_QUIZZS_CHOICES = (page, perPage) => {
    return gql`
        query{
            quizzChoices(page: ${page}, perPage: ${perPage}){
                id
                choice
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
                        price
                    }
                    studentXQuizzs{
                        id
                        duration
                        student{
                            id
                            name
                            nickname
                            image
                            email
                        }
                    }
                }
            }
        }
    `
}

const QUIZZ_CHOICE_BY_QUIZZ_ID = (quizzId) => {
    return gql`
        query{
            quizzChoiceByQuizzId(quizzId: ${quizzId}){
                id
                choice
            }
        }
    `
}

export { ALL_QUIZZ_CHOICES, PAGINATE_QUIZZS_CHOICES, QUIZZ_CHOICE_BY_QUIZZ_ID }