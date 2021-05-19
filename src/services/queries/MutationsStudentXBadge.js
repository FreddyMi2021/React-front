import {gql} from '@apollo/client';

const CREATE_STUDENT_X_BADGE = gql`
    mutation CreateStudentXBadge(
        $studentId: Int!,
        $badgeId: Int!
    ){
        createStudentXBadge(
            input: {
                studentId: $studentId,
                badgeId: $badgeId
            }
        ){
            studentXBadge{
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                badge{
                    id
                    title
                    nbrXp
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_BADGE = gql`
    mutation UpdateStudentXBadge(
        $id: Int!,
        $studentId: Int!,
        $badgeId: Int!
    ){
        updateStudentXBadge(
            input: {
                id: $id,
                studentId: $studentId,
                badgeId: $badgeId
            }
        ){
            studentXBadge{
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
                badge{
                    id
                    title
                    nbrXp
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_BADGE = gql`
    mutation DestroyStudentXBadge($id: Int!){
        destroyStudentXBadge(input: {
            id: $id
        }){
            studentXBadges{
                id
            }
        }
    }
`

export {CREATE_STUDENT_X_BADGE, UPDATE_STUDENT_X_BADGE, DESTROY_STUDENT_X_BADGE}