import { gql } from '@apollo/client';

const ALL_INDICATIONS = gql`
    query{
        allIndications {
            id 
            content
            exercise{
                id
                instruction
                solution
                hint
                attemptMax
                durationMax
                failXp
                timeXp
                language
            }
            instructions{
                id
                title
                paragraph
            }
        }
    }
`
const PAGINATE_INDICATIONS = (page, perPage) => {
    return gql`
        query{
            indications(page: ${page}, perPage: ${perPage}) {
                id 
                title 
                paragraph
                exercise{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
                }
                instructions{
                    id
                    title
                    paragraph
                }
            }
        }
    `
}

const SHOW_INDOCATION = (id) => {
    return gql`
        query{
            indication(id: ${id}) {
                id 
                title 
                paragraph
                exercise{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
                }
                instructions{
                    id
                    title
                    paragraph
                }
            }
        }
    `
}

export {ALL_INDICATIONS, PAGINATE_INDICATIONS, SHOW_INDOCATION}