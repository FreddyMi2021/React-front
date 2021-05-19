import { gql } from '@apollo/client';

const ALL_TEST_SKILLS = gql`
    query{
        allTestSkills{
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
            studentXTestSkills{
                id
                duration
                isAchieved
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
            }
        }
    }
`

const PAGINATE_TEST_SKILLS = (page, perPage) =>{
    return gql`
        query {
            testSkills(page:${page}, perPage:${perPage}){
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
                studentXTestSkills{
                    id
                    duration
                    isAchieved
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                }
            }
        }
    `
}

const SHOW_TEST_SKILL = (id) =>{
    return gql`
        query {
            testSkill(id: ${id}){
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
                studentXTestSkills{
                    id
                    duration
                    isAchieved
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                }
            }
        }
    `
}

const SHOW_TEST_SKILL_COURSE_ID = (course_id) =>{
    return gql`
        query {
            testSkills(courseId: ${course_id}){
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
                studentXTestSkills{
                    id
                    duration
                    isAchieved
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                }
            }
        }
    `
}

export {ALL_TEST_SKILLS, PAGINATE_TEST_SKILLS, SHOW_TEST_SKILL, SHOW_TEST_SKILL_COURSE_ID }