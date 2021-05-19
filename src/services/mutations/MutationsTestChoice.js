import {gql} from '@apollo/client';

const CREATE_TEST_CHOICE = gql`
    mutation CreateTestChoice(
        $choice: String!,
        $testSkillId: Int!
    ){
        createTestChoice(
            input: {
                choice: $choice,
                testSkillId: $testSkillId
            }
        ){
            testChoice{
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
    }
`

const UPDATE_TEST_CHOICE = gql`
    mutation updateTestChoice(
        $id: Int!,
        $choice: String!,
        $testSkillId: Int!
    ){
        updateTestChoice(
            input: {
                id: $id,
                choice: $choice,
                testSkillId: $testSkillId
            }
        ){
            testChoice{
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
    }
`

const DESTROY_TEST_CHOICE = gql`
    mutation DestroyTestChoice($id: Int!){
        destroyTestChoice(input: {
            id: $id
        }){
            testChoices{
                id
            }
        }
    }
`

export {
    CREATE_TEST_CHOICE,
    UPDATE_TEST_CHOICE,
    DESTROY_TEST_CHOICE
}