import {gql} from '@apollo/client';

const CREATE_TEST_SKILL = gql`
    mutation CreateTestSkill(
        $ask: String!,
        $answer: String!,
        $courseId: Int!
    ){
        createTestSkill(
            input: {
                ask: $ask,
                answer: $answer,
                courseId: $courseId
            }
        ){
            testSkill{
                id
                ask
                answer
                course{
                    id
                }
            }
        }
    }
`

const UPDATE_TEST_SKILL = gql`
    mutation UpdateTestSkill(
        $id: Int!,
        $ask: String!,
        $answer: String!,
        $courseId: Int!
    ){
        updateTestSkill(
            input: {
                id: $id,
                ask: $ask,
                answer: $answer,
                courseId: $courseId
            }
        ){
            testSkill{
                id
                ask
                answer
                course{
                    id
                }
            }
        }
    }
`

const DESTROY_TEST_SKILL = gql`
    mutation DestroyTestSkill($id: Int!){
        destroyTestSkill(input: {
            id: $id
        }){
            testSkills{
                id
            }
        }
    }
`

export {
    CREATE_TEST_SKILL,
    UPDATE_TEST_SKILL, 
    DESTROY_TEST_SKILL
}