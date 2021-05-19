import { gql } from '@apollo/client';

const ALL_COURSES = gql`
    query{
        allCourses{
            id
            title
            pic
            price
            discount
            courseXLessons{
                id
                rang
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                }
            }
            learningXCourses{
                id
                rang
                learning{
                    id
                    title
                    description
                    pic
                    price
                    discount
                    stage{
                        id
                        title
                    }
                }
            }
            courseDetails{
                id
                detail
            }
            courseWaitings{
                id
                waiting
            }
            testSkills{
                id
                ask
                answer
            }
            studentXCourses{
                id
                isAchieved
                student{
                    id
                    name
                    nickname
                    image
                    email
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                }
            }
        }
    }
`

const PAGINATE_COURSES = (page, perPage) => {
    return gql`
        query{
            courses(page: ${page}, perPage: ${perPage}){
                id
                title
                pic
                price
                discount
                courseXLessons{
                    id
                    rang
                    lesson{
                        id
                        title
                        pic
                        content
                        duration
                        helpXp
                        price
                    }
                }
                learningXCourses{
                    id
                    rang
                    learning{
                        id
                        title
                        description
                        pic
                        price
                        discount
                        stage{
                            id
                            title
                        }
                    }
                }
                courseDetails{
                    id
                    detail
                }
                courseWaitings{
                    id
                    waiting
                }
                testSkills{
                    id
                    ask
                    answer
                }
                studentXCourses{
                    id
                    isAchieved
                    student{
                        id
                        name
                        nickname
                        image
                        email
                        totalXp
                        totalBadge
                        totalTimePassed
                        totalCodeLine
                    }
                }
            }
        }
    `
}

const SHOW_COURSE = (id) =>{
    return gql`
        query{
            course(id: ${id}){
                id
                title
                pic
                price
                discount
                courseXLessons{
                    id
                    rang
                    lesson{
                        id
                        title
                        pic
                        content
                        duration
                        helpXp
                        price
                    }
                }
                learningXCourses{
                    id
                    rang
                    learning{
                        id
                        title
                        description
                        pic
                        price
                        discount
                        stage{
                            id
                            title
                        }
                    }
                }
            }
        }
    `
}


export { ALL_COURSES, PAGINATE_COURSES, SHOW_COURSE }