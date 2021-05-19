import { gql } from '@apollo/client';

const ALL_SHEET_CODE_COMMENT = gql`
    query{
        allSheetCodeComments{
            id
            message
            vote
            refComment
            sheetCode{
                id
                content
                language
                vote
            }
            student{
                id
                name
                nickname
                image
                email
            }
        }
    }

`

const PAGINATE_SHEET_CODE_COMMENT = (page, perPage) =>{
    return gql`
        query{
            sheetCodeComments(page: ${page}, perPage: ${perPage}){
                id
                message
                vote
                refComment
                sheetCode{
                    id
                    content
                    language
                    vote
                }
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
            }
        }
    `
}

const SHOW_SHEET_CODE_COMMENT = (id) =>{
    return gql`
        query{
            sheetCodeComment(id: ${id}){
                id
                message
                vote
                refComment
                sheetCode{
                    id
                    content
                    language
                    vote
                }
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
            }
        }
    `
}
export {ALL_SHEET_CODE_COMMENT, PAGINATE_SHEET_CODE_COMMENT, SHOW_SHEET_CODE_COMMENT};