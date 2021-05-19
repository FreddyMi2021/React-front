import { gql } from '@apollo/client';

const ALL_SHEET_CODE = gql`
    query{
        allSheetCodes{
            id
            content
            language
            vote
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
const PAGINATE_SHEET_CODE = (page, perPage) => {
    return gql`
        query{
            sheetCodes(page=${page}, perPage=${perPage}){
                id
                content
                language
                vote
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

const SHOW_SHEET_CODE = (id) => {
    return gql`
        query{
            sheetCode(id: ${id}){
                id
                content
                language
                vote
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

export {ALL_SHEET_CODE, PAGINATE_SHEET_CODE, SHOW_SHEET_CODE}