import { gql } from '@apollo/client';

const ALL_CODE_VOTES = gql`
    query{
        allCodeVotes{
            id
            code{
                languages
                description
                content
                privacy
            }
            student{
                id
                name
                nickname
                image
                email
            }
        }
    }
`
const PAGINATE_CODE_VOTES = (page, perPAge) => {
    return gql`
        query{
            codeVotes(page: ${page}, perPage: ${perPAge}){
                id
                code{
                    languages
                    description
                    content
                    privacy
                }
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
            }
        }
    `
}

const SHOW_CODE_VOTE = (id) => {
    return gql`
        query{
            codeVote(id:${id}){
                id
                code{
                    languages
                    description
                    content
                    privacy
                }
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
            }
        }
    `
}

export {ALL_CODE_VOTES, PAGINATE_CODE_VOTES, SHOW_CODE_VOTE}