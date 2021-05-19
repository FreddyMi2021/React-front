import { gql } from '@apollo/client';

const ALL_EXERCISE_COMMENTS = gql`
    query{
        allExerciseComments {
            id
            message
            vote
            refComment
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
const PAGINATE_EXERCISE_COMMENTS = (page, perPage) => {
    return gql`
        query{
            exerciseComments(page: ${page}, perPage: ${perPage}) {
                id
                message
                vote
                refComment
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

const SHOW_EXERCISE_COMMENT = (id) => {
    return gql`
        query{
            exerciseComment(id: ${id}){
                id
                message
                vote
                refComment
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

export { ALL_EXERCISE_COMMENTS, PAGINATE_EXERCISE_COMMENTS, SHOW_EXERCISE_COMMENT }