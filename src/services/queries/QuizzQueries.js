import { gql } from '@apollo/client';

const ALL_QUIZZS = gql`
    query{
        allQuizzs{
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
            quizzChoices{
                id
                choice
            }
            studentXQuizzs{
                id
                duration
                isAchieved
                isTrue
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
`

const PAGINATE_QUIZZS = (page, perPage) => {
    return gql`
        query{
            quizzs(page: ${page}, perPage: ${perPage}){
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
                quizzChoices{
                    id
                    choice
                }
                studentXQuizzs{
                    id
                    duration
                    isAchieved
                    isTrue
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
    `
}

const SHOW_QUIZZ = (id) =>{
    return gql`
        query{
            quizz(id: ${id} ){
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
                quizzChoices{
                    id
                    choice
                }
                studentXQuizzs{
                    id
                    duration
                    isAchieved
                    isTrue
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
    `
}

 export{ ALL_QUIZZS, PAGINATE_QUIZZS, SHOW_QUIZZ }