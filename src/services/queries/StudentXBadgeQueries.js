import { gql } from '@apollo/client';

const ALL_STUDENT_X_BADGE = gql`
    query{
        allStudentXBadges{
            id
            student{
                id
                name
                nickname
                image
                email
            }
            badge{
                id
                title
                nbrXp
            }
        }
    }
`
const PAGINATE_STUDENT_X_BADGE = (page, perPage) => {
    return gql`
        query{
            studentXBadges(page: ${page}, perPage: ${perPage}){
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                badge{
                    id
                    title
                    nbrXp
                }
            }
        }
    `
}


export {ALL_STUDENT_X_BADGE, PAGINATE_STUDENT_X_BADGE}