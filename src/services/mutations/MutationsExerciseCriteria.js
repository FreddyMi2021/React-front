import {gql} from '@apollo/client';

const CREATE_EXERCISE_CRITERIA = gql`
    mutation CreateExerciseCriteria(
        $criteria: String!,
        $xp: Int!,
        $exerciseId: Int!
    ){
        createExerciseCriteria(
            input: {
                criteria: $criteria,
                xp: $xp,
                exerciseId: $exerciseId
            }
        ){
            exerciseCriteria{
                id
                criteria
                xp
                exercise{
                    id
                }
            }
        }
    }
`

const UPDATE_EXERCISE_CRITERIA = gql`
    mutation UpdateExerciseCriteria(
        $id: Int!,
        $criteria: String!,
        $xp: Int!,
        $exerciseId: Int!
    ){
        updateExerciseCriteria(
            input: {
                id: $id,
                criteria: $criteria,
                xp: $xp,
                exerciseId: $exerciseId
            }
        ){
            exerciseCriteria{
                id
                criteria
                xp
                exercise{
                    id
                }
            }
        }
    }
`

const DESTROY_EXERCISE_CRITERIA = gql`
    mutation DestroyExerciseCriteria($id: int!){
        destroyExerciseCriteria(input: {
            id:$id
        }){
            exerciseCriterias{
                id
                criteria
                xp
            }
        }
    }
`

export {CREATE_EXERCISE_CRITERIA, UPDATE_EXERCISE_CRITERIA, DESTROY_EXERCISE_CRITERIA}