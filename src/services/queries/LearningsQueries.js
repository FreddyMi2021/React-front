import { gql } from '@apollo/client';


const ALL_LEARNINGS = gql`
    query{
        allLearnings{
            id
            title
            description
            pic
            price
            discount
            stage{
                id
                title
                path{
                    id
                    title
                    pic
                    description
                }
                description
                rank
            }
            learningXCourses{
                id
                rang
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
            }
            studentXLearnings{
                id
                isAchieved
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
            }
        }
    }
`

const PAGINATE_LEARNINGS = (page, perPage) => {
    return gql`
        query{
            learnings(page: ${page}, perPage: ${perPage}){
                id
                title
                description
                pic
                price
                discount
                stage{
                    id
                    title
                    path{
                        id
                        title
                        pic
                        description
                    }
                    description
                    rank
                }
                learningXCourses{
                    id
                    rang
                    course{
                        id
                        title
                        pic
                        price
                        discount
                    }
                }
                studentXLearnings{
                    id
                    isAchieved
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
                }
            }
        }
    `
}

const SHOW_LEARNING = (id) =>{
    return gql`
        query{
            learning(id: ${id}){
                id
                title
                description
                pic
                price
                discount
                stage{
                    id
                    title
                    path{
                        id
                        title
                        pic
                        description
                    }
                    description
                    rank
                }
                learningXCourses{
                    id
                    rang
                    course{
                        id
                        title
                        pic
                        price
                        discount
                    }
                }
                studentXLearnings{
                    id
                    isAchieved
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
                }
            }
        }
    `
}

const SEARCH_LEARNING = gql`
    query{
        searchLearnings(title: string){
            id
            title
        }
    }
`

const COUNT_COURSE_BY_LEARNING_ID = (learningId) => {
    return gql`
        query{
            countCourses(learningId: ${learningId})
        }
    `
}



export { ALL_LEARNINGS, PAGINATE_LEARNINGS, SHOW_LEARNING, SEARCH_LEARNING, COUNT_COURSE_BY_LEARNING_ID };