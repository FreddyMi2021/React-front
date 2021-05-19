import { gql } from '@apollo/client';

const ALL_BADGE = gql`
    query{
        allBadges{
            id
            title
            nbrXp
            studentXBadges{
                id
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

const PAGINATE_BADGE = (page, perPage) => {
    return gql`
        query{
            badges(page: ${page}, perPage:${perPage}){
                id
                title
                nbrXp
                studentXBadges{
                    id
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

const SHOW_BADGE = (id) => {
    return gql`
        query{
            badge(id:${id}){
                id
                title
                nbrXp
                studentXBadges{
                    id
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
export { ALL_BADGE, PAGINATE_BADGE, SHOW_BADGE };