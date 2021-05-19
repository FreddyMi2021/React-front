import { gql } from '@apollo/client';

const PAGINATE_COURSE_WAITING = (page, perPage) => {
    return gql`
        query{
            courseWaitings(page: ${page}, perPage: ${perPage}){
                id
                waiting
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

const SHOW_COURSE_WAITING = (id) =>{
    return gql`
        query{
            courseWaiting(id: ${id} ){
                id
                waiting
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

 export {PAGINATE_COURSE_WAITING, SHOW_COURSE_WAITING};