import { gql } from '@apollo/client';

const PAGINATE_QUIZZS_CHOISE = (page, perPage) => {
    return gql`
        query{
            quizzChoices(page: ${page}, perPage: ${perPage}){
                choice
                quizz{
                    id
                    ask
                    answer
                    xp
                    lesson{
                        title
                        pic
                        content
                        duration
                        price
                    }
                    studentXQuizzs{
                        duration
                        student{
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


 export{ PAGINATE_QUIZZS_CHOISE }