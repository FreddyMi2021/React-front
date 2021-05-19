import { gql } from '@apollo/client';

const ALL_STUDENT_X_LESSONS= gql`
    query{
        allStudentXLessons{
            id
            isAchieved
            duration
            isHepedXp
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
            lesson{
                id
                title
                pic
                content
                duration
                helpXp
                price
                adminId
                ressources{
                    id
                    link
                }
            }
        }
    }
`;

const PAGINATE_STUDENT_X_LESSON = (page, perPage) => {
  return gql`
        query{
            studentXLessons(page: ${page}, perPage: ${perPage}){
                id
                isAchieved
                duration
                isHepedXp
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
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
                    ressources{
                        id
                        link
                    }
                }
            }
        }
    `;
};

const STUDENT_X_LESSONS_BY_STUDENT_ID = (student_id) => {
  return gql`
        query{
            studentXLessonsByStudentId(studentId: ${student_id}){
                id
                duration
                createdAt
                updatedAt
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
                    ressources{
                        id
                        link
                    }
                    lessonVideo{
                        id
                    }
                    courseXLessons{
                        id
                        course{
                            id
                            title
                        }
                    }
                }
                isAchieved
            }
        }
    `;
};

const STUDENT_X_LESSON_BY_STUDENT_ID_AND_LESSON_ID = (
  student_id,
  lesson_id
) => {
  return gql`
        query{
            studentXLessonByStudentIdAndLessonId(studentId: ${student_id}, lessonId: ${lesson_id}){
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
                    ressources{
                        id
                        link
                    }
                }
                isAchieved
                id
            }
        }
    `;
};

const STUDENT_X_LESSON_BY_ID_AND_STUDENT_ID = (id, studentId) => {
  return gql`
        query{
            studentXLessonByStudentIdAndLessonId(lessonId: ${id}, studentId: ${studentId}){
                isAchieved
                lesson{
                    id
                    title
                }
            }
        }
    `;
};

const COUNT_LESSON = (courseId) => {
    return gql`
        query{
            countLessons(courseId: ${courseId})
        }
    `
}


const COUNT_IS_ACHIEVED_LESSON = (courseId, studentId, isAchieved) => {
    return gql`
      {
        countIsAchievedLessons(courseId: ${courseId}, studentId: ${studentId} ,isAchieved: ${isAchieved})
      } 
      `;
};



const RECENT_STUDENT_X_LESSONS = (student_id) => {
    return gql`
        query{
            recentStudentXLessons(studentId: ${student_id}){
            createdAt
                lesson{
                    id
                    title
                }
            }
        }
    `;
};

const RECENT_STUDENT_X_LESSONS_IS_ACHIEVED = (
  student_id,
  is_achieved = true
) => {
    return gql`
        query{
            recentStudentXLessonsIsAchieved(studentId: ${student_id}, isAchieved: ${is_achieved}){
                createdAt
                updatedAt
                lesson{
                    id
                    title
                }
            }
        }
    `;
};

const STUDENT_X_LESSON_BY_LEARNING_ID = (learning_id, student_id, is_achieved)=>{
    return gql`
        query{
            studentXLessonsByLearningId(learningId: ${learning_id}, studentId: ${student_id} isAchieved: ${is_achieved}){
                id
                lesson{
                    id
                }
            }
        }
    `
}

export {
  ALL_STUDENT_X_LESSONS,
  STUDENT_X_LESSON_BY_ID_AND_STUDENT_ID,
  PAGINATE_STUDENT_X_LESSON,
  STUDENT_X_LESSONS_BY_STUDENT_ID,
  STUDENT_X_LESSON_BY_STUDENT_ID_AND_LESSON_ID,
  RECENT_STUDENT_X_LESSONS,
  RECENT_STUDENT_X_LESSONS_IS_ACHIEVED,
  COUNT_LESSON, 
  COUNT_IS_ACHIEVED_LESSON,
  STUDENT_X_LESSON_BY_LEARNING_ID
};

