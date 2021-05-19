import {gql} from "@apollo/client";

const CREATE_SHEET_CODE = gql`
    mutation CreateSheetCode(
        $content: String!,
        $language: String!,
        $vote: Int!,
        $studentid: Int,
    ){
        createSheetCode(
            input: {
                content: $content,
                language: $language,
                vote: $vote,
                studentId: $studentId
            }
        ){
            sheetCode{
                content
                language
                vote
                student{
                    id
                }
            }
        }
    }
`

const UPDATE_SHEET_CODE = gql`
    mutation UpdateSheetCode(
        $id: Int!,
        $content: String!,
        $language: String!,
        $vote: Int!,
        $studentid: Int,
    ){
        updateSheetCode(
            input: {
                id: $id,
                content: $content,
                language: $language,
                vote: $vote,
                studentId: $studentId
            }
        ){
            sheetCode{
                content
                language
                vote
                student{
                    id
                }
            }
        }
    }
`

const DESTROY_SHEET_CODE = gql`
    mutation DestroySheetCode($id: Int!){
        destroySheetCode(input: {
            id: $id
        }){
            sheetCodes{
                id
            }
        }
    }
`

export {CREATE_SHEET_CODE, UPDATE_SHEET_CODE, DESTROY_SHEET_CODE}