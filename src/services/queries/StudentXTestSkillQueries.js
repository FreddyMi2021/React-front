
import { gql } from '@apollo/client';

const ALL_STUDENT_X_TEST_SKILL = gql`
    query{
        allStudentXTestSkills{
            id
            duration
            isAchieved
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
            testSkill{
                id
                ask
                answer
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
                testChoices{
                    id
                    choice
                }
            }
        }
    }
`

const PAGINATE_STUDENT_X_TEST_SKILL = (page, perPage) => {
    return gql`
        query{
            studentXTestSkills(page: ${page}, perPage: ${perPage}){
                id
                duration
                isAchieved
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
                testSkill{
                    id
                    ask
                    answer
                    course{
                        id
                        title
                        pic
                        price
                        discount
                    }
                    testChoices{
                        id
                        choice
                    }
                }
            }
        }
    `
}

const STUDENT_X_TEST_SKILLS_BY_STUDENT_ID = (student_id) => {
    return gql`
        query{
            studentXTestSkillsByStudentId(studentId: ${student_id}){
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


const STUDENT_X_TEST_SKILL_BY_STUDENT_ID_AND_TEST_SKILL_ID = (student_id, test_skill_id) => {
    return gql`
        query{
            studentXTestSkillByStudentIdAndTestSkillId(studentId: ${student_id}, pathId: ${test_skill_id}){
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

export { ALL_STUDENT_X_TEST_SKILL, PAGINATE_STUDENT_X_TEST_SKILL, STUDENT_X_TEST_SKILLS_BY_STUDENT_ID, STUDENT_X_TEST_SKILL_BY_STUDENT_ID_AND_TEST_SKILL_ID }