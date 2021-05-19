import { gql } from '@apollo/client';

const ALL_COURSE_DETAILS = gql`
    query{
        allCourseDetails{
            id
            detail
            course{
                id
                title
                pic
                price
                discount
            }
        }
    }
`

const PAGINATE_COURSE_DETAILS = (page, perPage) => {
    return gql`
        query{
            courseDetails(page: ${page}, perPage: ${perPage}){
                id
                detail
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
            }
        }
    `
}

const SHOW_COURSE_DETAIL = (id) => {
    return gql`
        query{
            courseDetail(id: ${id}){
                id
                detail
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
            }
        }
    `
}

 export {ALL_COURSE_DETAILS, PAGINATE_COURSE_DETAILS, SHOW_COURSE_DETAIL };