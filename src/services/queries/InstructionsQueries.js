import { gql } from '@apollo/client';

const ALL_INSTRUCTIONS = gql`
    query{
        allInstructions {
            id
            title
            paragraph
            indication {
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
            }
        }
    }
`
const PAGINATE_INSTRUCTION = (page, perPage) => {
    return gql`
        query{
            instructions(page: ${page}, perPage: ${perPage}) {
                id
                title
                paragraph
                indication {
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
                }
            }
        }
    `
}

const SHOW_INSTRUCTION = (id) => {
    return gql`
        query{
            instruction(id: ${id}) {
                id
                title
                paragraph
                indication {
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
                }
            }
        }
    `
}

export {ALL_INSTRUCTIONS, PAGINATE_INSTRUCTION, SHOW_INSTRUCTION}