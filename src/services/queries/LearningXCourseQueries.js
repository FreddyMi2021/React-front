import { gql } from '@apollo/client';

const ALL_LEARNING_X_COURSES = gql`
    query{
        allLearningXCourses{
            id
            rang
            learning{
                id
                title
                description
                pic
                price
                discount
            }
            course{
                id
                title
                pic
                price
                discount
            }
        }
    }
`

const PAGINATE_LEARNINGS_X_COURSE = (page, perPage) => {
  return gql`
        query{
            learningXCourses(page: ${page}, perPage: ${perPage}){
                id
                rang
                learning{
                    id
                    title
                    description
                    pic
                    price
                    discount
                }
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
            }
        }
    `;
};

const SHOW_LEARNING_X_COURSE = (id) => {
  return gql`
        query{
            learningXCourse(id: ${id}){
                id
                rang
                learning{
                    id
                    title
                    description
                    pic
                    price
                    discount
                }
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
            }
        }
    `;
};

const SHOW_LERANING_X_COURSE_BY_LERANING_ID = (leraningId) => {
  return gql`
        query{
            learningXCoursesByLearningId(leraningId:${leraningId}){
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
            }
        }
    `;
};

const SEARCH_LEARNING_COURSES = (learningId) => {
  return gql`
        query{
            learningXCoursesByLearningId(learningId: ${learningId} ){
                learning{
                    id
                    title
                    description
                    pic
                    price
                    discount
                }
                course{
                    id
                    title
                    pic
                    price
                    discount
                    courseXLessons{
                        id
                        lesson{
                            id
                            title
                            lessonVideo{
                                id
                            }
                            ressources{
                                id
                                link
                            }
                        }
                    }
                }
            }
        }
        `;
};

const COUNT_COURSES = (learningId) => {
  return gql`
    {
        countCourses(learningId: ${learningId})
    }
    `;
};

const COUNT_IS_ACHIEVED_COURSES = (learningId, studentId, isAchieved) => {
  return gql`
    {
        countIsAchievedCourses(learningId: ${learningId}, studentId: ${studentId} ,isAchieved: ${isAchieved})
    } 
    `;
};

export {
    ALL_LEARNING_X_COURSES,
  PAGINATE_LEARNINGS_X_COURSE,
  SHOW_LEARNING_X_COURSE,
  SHOW_LERANING_X_COURSE_BY_LERANING_ID,
  SEARCH_LEARNING_COURSES,
  COUNT_COURSES,
  COUNT_IS_ACHIEVED_COURSES,
};
