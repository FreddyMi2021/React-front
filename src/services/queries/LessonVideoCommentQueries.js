import { gql } from '@apollo/client';

const ALL_LESSON_VIDEO_COMMENTS = gql`
    query{
        allLessonVideoComments {
            id
            message
            vote
            refComment
            lessonVideo{
                id
                path
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
const PAGINATE_LESSON_VIDEO_COMMENTS = (page, perPage) => {
    return gql`
        query{
            lessonVideoComments(page: ${page}, perPage: ${perPage}) {
                id
                message
                vote
                refComment
                lessonVideo{
                    id
                    path
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

const SHOW_LESSON_VIDEO_COMMENT = (id) => {
    return gql`
        query{
            lessonVideoComment(id: ${id}) {
                id
                message
                vote
                refComment
                lessonVideo{
                    id
                    path
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

export { ALL_LESSON_VIDEO_COMMENTS, PAGINATE_LESSON_VIDEO_COMMENTS, SHOW_LESSON_VIDEO_COMMENT }