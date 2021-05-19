import { gql } from '@apollo/client';

const ALL_LESSON_DETAILS = gql`
    query{
        allLessonDetails{
            id
            detail
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


const PAGINATE_LESSON_DETAILS = (page, perPage) => {
    return gql`
        query{
            lessonDetails(page: ${page}, perPage: ${perPage}){
                id
                detail
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

const SHOW_LESSON_DETAIL = (id) =>{
    return gql`
        query{
            lessonDetail(id: ${id} ){
                id
                detail
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


 export {ALL_LESSON_DETAILS, PAGINATE_LESSON_DETAILS, SHOW_LESSON_DETAIL};