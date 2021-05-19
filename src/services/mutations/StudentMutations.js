import {gql} from '@apollo/client';


const UPDATE_STUDENT_XP = gql`
    mutation UpdateStudentXp(
        $id: Int!,
        $totalXp: Int!
    ){
        updateStudentXp(
            input: {
                id: $id,
                totalXp: $totalXp
            }
        ){
            student{
              id
              totalXp
            }
        }
    }
`


export { UPDATE_STUDENT_XP }