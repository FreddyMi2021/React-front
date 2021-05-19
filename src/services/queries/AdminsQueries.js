import { gql } from '@apollo/client';

const ALL_ADMINS = gql`
    query a{
        allAdmins{
            id 
            name
            nickname
            email
        }
    }
`

const PAGINATE_ADMINS = (page, perPage) => {
    return gql`
        query{
            admins(page: ${page}, perPage: ${perPage}){
                id
                name
                nickname
                image
                email
            }
        }
    `
}

const SHOW_ADMIN = (id) =>{
    return gql`
        query{
            admin(id: ${id} ){
                id
                name
                nickname
                image
                email
            }
        }
    `
} 

export { ALL_ADMINS, PAGINATE_ADMINS, SHOW_ADMIN }