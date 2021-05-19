import { gql } from '@apollo/client';

const ALL_TEST_CHOICES = gql`
    query {
        allTestChoices{
            id
            choice
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
            }
        }
    }
`

const PAGINATE_TEST_CHOISE = (page, perPage) =>{
    return gql`
        query {
            testChoices(page:${page}, perPage:${perPage}){
                id
                choice
                testSkill{
                    ask
                    answer
                    course{
                        id
                        title
                        pic
                        price
                        discount
                    }
                }
            }
        }
    `
}

const SHOW_TEST_CHOISE = (testSkillId) =>{
    return gql`
        query {
            testChoices(testSkillId: ${testSkillId}){
                id
                choice
                testSkill{
                    ask
                    answer
                    course{
                        id
                        title
                        pic
                        price
                        discount
                    }
                }
            }
        }
    `
}

export { ALL_TEST_CHOICES, PAGINATE_TEST_CHOISE, SHOW_TEST_CHOISE }