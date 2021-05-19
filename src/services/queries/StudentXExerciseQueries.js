
import { gql } from '@apollo/client';

const ALL_STUDENT_X_EXERCISES = gql`
    query{
        allStudentXExercises{
            id
            duration
            attemptNb
            xpExercise
            isAchieved
            student{
                id
                name
                nickname
                image
                email
            }
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
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    price
                }
                exerciseCriteriums{
                    id
                    criteria
                    xp
                }
            }
        }
    }
`

const PAGINATE_STUDENT_X_EXERCICE = (page, perPage) => {
    return gql`
        query{
            studentXExercises(page: ${page}, perPage: ${perPage}){
                id
                duration
                attemptNb
                xpExercise
                isAchieved
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
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
                    lesson{
                        id
                        title
                        pic
                        content
                        duration
                        price
                    }
                    exerciseCriteriums{
                        id
                        criteria
                        xp
                    }
                }
            }
        }
    `
}


const STUDENT_X_EXERCISES_BY_STUDENT_ID = (student_id) => {
    return gql`
        query{
            studentXExercisesByStudentId(studentId: ${student_id}){
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                isAchieved
            }
        }
    `
}


const STUDENT_X_EXERCISE_BY_STUDENT_ID_AND_EXERCISE_ID = (student_id, exercise_id) => {
    return gql`
        query{
            studentXExerciseByStudentIdAndExerciseId(studentId: ${student_id}, exerciseId: ${exercise_id}){
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                id
                isAchieved
            }
        }
    `
}

const STUDENT_X_EXERCISE_BY_ID_AND_STUDENT_ID = (id, studentId) => {
    return gql`
        query{
            studentXExerciseByIdAndStudent(id: ${id}, studentId: ${studentId}){
                exercise{
                    id
                }
            }
        }
    `
}



export { ALL_STUDENT_X_EXERCISES, STUDENT_X_EXERCISE_BY_ID_AND_STUDENT_ID, PAGINATE_STUDENT_X_EXERCICE, STUDENT_X_EXERCISES_BY_STUDENT_ID, STUDENT_X_EXERCISE_BY_STUDENT_ID_AND_EXERCISE_ID }