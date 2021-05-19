import {gql} from '@apollo/client';

const CREATE_STUDENT_X_TEST_SKILL = gql`
    mutation CreateStudentXTestSkill(
        duration: Int!,
        $isAchieved:  Boolean!,
        $studentId: Int!,
        $testSkillId: Int!
    ){
        createStudentXTestSkill(
            input: {
                duration: null,
                isAchieved: $isAchieved,
                studentId: $studentId,
                testSkillId: $testSkillId
            }
        ){
            studentXTestSkill{
                id
                duration
                isAchieved
                student{
                    id
                    name
                }
                testSkill{
                    id
                }
            }
        }
    }
`

const UPDATE_STUDENT_X_TEST_SKILL = gql`
    mutation UpdateStudentXTestSkill(
        $id: Int!,
        $duration: Int!,
        $isAchieved:  Boolean!,
        $studentId: Int!,
        $testSkillId: Int!
    ){
        updateStudentXTestSkill(
            input: {
                id: $id,
                duration: null,
                isAchieved: $isAchieved,
                studentId: $studentId,
                testSkillId: $testSkillId
            }
        ){
            studentXTestSkill{
                id
                duration
                isAchieved
                student{
                    id
                    name
                }
                testSkill{
                    id
                }
            }
        }
    }
`

const DESTROY_STUDENT_X_TEST_SKILL = gql`
    mutation DestroyStudentXTestSkill($id: Int!){
        destroyStudentXTestSkill(input: {
            id: $id
        }){
            studentXTestSkills{
                id
            }
        }
    }
`


export {
    CREATE_STUDENT_X_TEST_SKILL,
    UPDATE_STUDENT_X_TEST_SKILL,
    DESTROY_STUDENT_X_TEST_SKILL
}