import {gql} from '@apollo/client';

const CREATE_SHEET_CODE_COMMENT = gql`
    mutation CreateSheetCodeComment(
        $message:String!,
        $vote: Int!,
        $refComment: Int!,
        $sheetCodeId: Int!,
        $studentId: Int!
    ){
        createSheetCodeComment(
            input: {
                message:$message,
                vote: $vote,
                refComment: $refComment,
                sheetCodeId: $sheetCodeId,
                studentId: $studentId
            }
        ){
            sheetCodeComment{
                id
                message
                vote
                refComment
                sheetCode{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const UPDATE_SHEET_CODE_COMMENT = gql`
    mutation UpdateSheetCodeComment(
        $id: Int!,
        $message:String!,
        $vote: Int!,
        $refComment: Int!,
        $sheetCodeId: Int!,
        $studentId: Int!
    ){
        updateSheetCodeComment(
            input: {
                id: $id,
                message:$message,
                vote: $vote,
                refComment: $refComment,
                sheetCodeId: $sheetCodeId,
                studentId: $studentId
            }
        ){
            sheetCodeComment{
                id
                message
                vote
                refComment
                sheetCode{
                    id
                }
                student{
                    id
                }
            }
        }
    }
`

const DESTROY_SHEET_CODE_COMMENT = gql`
    mutation DestroySheetCodeComment($id: Int!){
        destroySheetCodeComment (input: {
            id: $id
        }){
            sheetCodeComments{
                id
            }
        }
    }
`

export {CREATE_SHEET_CODE_COMMENT, UPDATE_SHEET_CODE_COMMENT, DESTROY_SHEET_CODE_COMMENT}