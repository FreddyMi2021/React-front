import { gql } from '@apollo/client';

const ALL_CODES = gql`
    query{
        allCodes{
            id
            languages
            description
            content
            privacy
            student{
                id
                name
                nickname
                image
                email
            }
            codeVotes{
                id
            }
        }
    }
`

const PAGINATE_CODES = (page, perPage) => {
    return gql`
        query{
            codes(page: ${page}, perPage: ${perPage}){
                id
                languages
                description
                content
                privacy
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                codeVotes{
                    id
                }
            }
        }
    `
}

const SHOW_CODE = (id) => {
    return gql`
        query {
            code(id: ${id}){
                id
                languages
                description
                content
                privacy
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                codeVotes{
                    id
                }
            }
        }
    `
}

export {ALL_CODES, PAGINATE_CODES, SHOW_CODE};