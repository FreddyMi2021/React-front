import {gql} from '@apollo/client';


const ALL_STUDENT_X_CODES = gql`
    query{
        allStudentXCodes{
            id
            createdAt
            updatedAt
            student{
                id
                name
                nickname
                image
                email
            }
            code{
                id
                languages
                description
                content
                privacy
                codeVotes{
                    id
                }
            }
        }
    }
`

const PAGINATE_STUDENT_X_CODES = (page, perPage) => {
    return gql`
        query{
            studentXcodes(page:${page}, perPage:${perPage}){
                id
                createdAt
                updatedAt
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                code{
                    id
                    languages
                    description
                    content
                    privacy
                    codeVotes{
                        id
                    }
                }
            }
        }
    `
}

const STUDENT_X_CODE_BY_STUDENT_ID = (studentId)=>{
    return gql`
        query{
            studentXCodesByStudentId(studentId:${studentId}){
                id
                createdAt
                updatedAt
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                code{
                    id
                    languages
                    description
                    content
                    privacy
                    codeVotes{
                        id
                    }
                }
            }
            
        }
    `
}

export{ALL_STUDENT_X_CODES, PAGINATE_STUDENT_X_CODES, STUDENT_X_CODE_BY_STUDENT_ID}