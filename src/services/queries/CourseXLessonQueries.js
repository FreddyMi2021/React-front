import { gql } from '@apollo/client';

const ALL_COURSE_X_LESSONS = gql`
    query{
        allCourseXLessons{
            id
            rang
            course{
                id
                title
                pic
                price
                discount
            }
            lesson{
                id
                title
                pic
                content
                duration
                price
                ressources{
                    id
                    link
                }
            }
        }
    }
`

const PAGINATE_COURSE_X_LESSON = (page, perPage) => {
    return gql`
        query{
            courseXLessons(page: ${page}, perPage: ${perPage}){
                id
                rang
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    price
                    ressources{
                        id
                        link
                    }
                }
            }
        }
    `
}

const SHOW_COURSE_X_LESSON = (id)=>{
    return gql`
        query{
            courseXLesson(id:${id}){
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    price
                    ressources{
                        id
                        link
                    }
                }
            }
        }
    `
}

const SHOW_COURSE_X_LESSON_BY_COURSE_ID = (courseId) =>{
    return gql`
        query{
            courseXLessonsByCourseId(courseId:${courseId}){
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    price
                    ressources{
                        id
                        link
                    }
                }
            }
        }
    `
}


export {ALL_COURSE_X_LESSONS, PAGINATE_COURSE_X_LESSON, SHOW_COURSE_X_LESSON, SHOW_COURSE_X_LESSON_BY_COURSE_ID};