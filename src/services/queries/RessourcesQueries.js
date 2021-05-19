import { gql } from '@apollo/client';

const ALL_RESSOURCES = gql`
    query{
        allRessources{
            id
            link
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

const PAGINATE_RESSOURCES = (page, perPage) => {
    return gql`
        query{
            ressources(page: ${page}, perPage: ${perPage}){
                id
                link
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

const SHOW_RESSOURCE = (id) =>{
    return gql`
        query{
            ressource(id: ${id} ){
                id
                link
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

export{ ALL_RESSOURCES, PAGINATE_RESSOURCES, SHOW_RESSOURCE }