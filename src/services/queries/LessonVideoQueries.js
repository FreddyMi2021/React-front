import { gql } from '@apollo/client';


const ALL_LESSON_VIDEOS = gql`
    query{
        allLessonVideos{
            id
            path
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

const PAGINATE_LESSON_VIDEO = (page, perPage) => {
    return gql`
        query{
            lessonVideos(page: ${page}, perPage: ${perPage}){
                id
                path
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

const SHOW_LESSON_VIDEO = (id) =>{
    return gql`
        query{
            lessonVideo(id: ${id} ){
                id
                path
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


export {ALL_LESSON_VIDEOS, PAGINATE_LESSON_VIDEO, SHOW_LESSON_VIDEO }