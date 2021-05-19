import { gql } from '@apollo/client';

const ALL_EXERCISE_CRITERIA = gql`
    query{
        allExerciseCriterias{
            id
            criteria
            xp
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
`

const PAGINATE_EXERCICE_CRITERIA = (page, perPage) => {
    return gql`
        query{
            exerciseCriterias(page: ${page}, perPage: ${perPage}){
                id
                criteria
                xp
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
    `
}


export { ALL_EXERCISE_CRITERIA, PAGINATE_EXERCICE_CRITERIA }