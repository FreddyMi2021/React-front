
import { gql } from '@apollo/client';

const ALLSTAGES = gql`
    query{
        allStages{
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
            learnings{
                id
                title
                description
                pic
                price
                discount
            }
            studentXStages{
                id
                isAchieved
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                stage{
                    id
                    title
                    description
                    rank
                    learnings{
                        id
                        title
                        description
                        pic
                        price
                        discount
                    }
                }
            }
        }
    }
`

const PAGINATE_STAGES = (page, perPage) => {
    return gql`
        query {
            stages(page: ${page}, perPage: ${perPage}){
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
                learnings{
                    id
                    title
                    description
                    pic
                    price
                    discount
                }
                studentXStages{
                    id
                    isAchieved
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                    stage{
                        id
                        title
                        description
                        rank
                        learnings{
                            id
                            title
                            description
                            pic
                            price
                            discount
                        }
                    }
                }
            }
        }
    `
}

const SHOW_STAGE = (id) =>{
    return gql`
        query{
            stage(id: ${id}){
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
                learnings{
                    id
                    title
                    description
                    pic
                    price
                    discount
                }
                studentXStages{
                    id
                    isAchieved
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                    stage{
                        id
                        title
                        description
                        rank
                        learnings{
                            id
                            title
                            description
                            pic
                            price
                            discount
                        }
                    }
                }
            }
        }
    `
}

// const ALLSTAGES = gql`
//     query{
//         allStages{
//             title
//             learnings{
//                 title
//             }
//         }
//     }
// `

const COUNT_LEARNING_BY_STAGE = (stageId) => {
    return gql`
        query{
            countLearnings(stageId: ${stageId})
        }
    `
}

const LEARNINGS_BY_STAGE_ID = (stageId) =>
{
    return gql`
        query{
            learningsByStage(stageId: ${stageId}){
                id
                title
            }
        }
    `
}


export { ALLSTAGES, PAGINATE_STAGES, SHOW_STAGE, COUNT_LEARNING_BY_STAGE, LEARNINGS_BY_STAGE_ID }