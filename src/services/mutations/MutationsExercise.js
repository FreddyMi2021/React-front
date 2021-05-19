import { gql } from '@apollo/client';

const CREATE_EXERCISE = gql`
    mutation CreateExercise(
        $instruction: String!,
        $solution: String!,
        $hint: String!,
        $attemptMax:Int!,
        $durationMax: Int!,
        $failXp: Int!
        $timeXp: Int!,
        $language: String!,
        $category: Int!,
        $lessonId: Int
    ){
        createExercise(
            input: {
                instriction: $instruction,
                solution: $solution,
                hint: $hint,
                attemptMax: $attemptMax,
                durationMax: $durationMax,
                failXp: $failXp,
                timeXp: $timeXp,
                language: $language,
                category: $category,
                lessonId: $lessonId
            }
        ){
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
                category
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
                }
            }
        }
    }
`

const UPDATE_EXERCISE = gql`
    mutation UpdateExercise(
        $id: Int!,
        $instruction: String!,
        $solution: String!,
        $hint: String!,
        $attemptMax:Int!,
        $durationMax: Int!,
        $failXp: Int!
        $timeXp: Int!,
        $language: String!,
        $category: Int!,
        $lessonId: Int
    ){
        updateExercise(
            input: {
                id: $id,
                instriction: $instruction,
                solution: $solution,
                hint: $hint,
                attemptMax: $attemptMax,
                durationMax: $durationMax,
                failXp: $failXp,
                timeXp: $timeXp,
                language: $language,
                category: $category,
                lessonId: $lessonId
            }
        ){
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
                category
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
                }
            }
        }
    }
`

const DESTROY_EXERCISE = gql`
    mutation DestroyExercise(
        $id: Int!
    ){
        destroyExercise(
            input: {
                id: $id
            }
        )
        exercises{
            id
            instruction
            solution
            hint
            attemptMax
            durationMax
            failXp
            timeXp
            language
            category
        }
    }
`
export { CREATE_EXERCISE, UPDATE_EXERCISE, DESTROY_EXERCISE}