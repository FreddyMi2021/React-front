import { gql } from '@apollo/client';

const ALL_LESSON_COMMENTS = gql`
    query{
        allLessonComments{
            id
            message
            vote
            refComment
            lesson{
                id
                title
                pic
                content
                duration
                helpXp
                price
                adminId
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

const PAGINATE_LESSON_COMMENTS = (page, perPage) => {
    return gql`
        query{
            lessonComments(page: ${page}, perPage: ${perPage}) {
                id
                message
                vote
                refComment
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
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

const SHOW_LESSON_COMMENT = (id) => {
    return gql`
        query{
            lessonComment(id: ${id}){
                id
                message
                vote
                refComment
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
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

export { ALL_LESSON_COMMENTS, PAGINATE_LESSON_COMMENTS, SHOW_LESSON_COMMENT }