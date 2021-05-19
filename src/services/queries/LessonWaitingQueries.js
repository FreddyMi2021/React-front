import { gql } from '@apollo/client';

const ALL_LESSON_WAITINGS = gql`
    query{
        allLessonWaitings{
            id
            waiting
            lesson{
                id
                title
                pic
                content
                duration
                price
            }
        }
    }
`

const PAGINATE_LESSON_WAITINGS = (page, perPage) => {
    return gql`
        query{
            lessonWaitings(page: ${page}, perPage: ${perPage}){
                id
                waiting
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    price
                }
            }
        }
    `
}

const SHOW_LESSON_WAITING = (id) =>{
    return gql`
        query{
            lessonWaiting(id: ${id} ){
                id
                waiting
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    price
                }
            }
        }
    `
}



export { ALL_LESSON_WAITINGS, PAGINATE_LESSON_WAITINGS, SHOW_LESSON_WAITING }