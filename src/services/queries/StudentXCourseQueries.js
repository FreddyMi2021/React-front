import { gql } from '@apollo/client';

const ALL_STUDENT_X_COURSE = gql`
  query {
    allStudentXCourses {
      id
      isAchieved
      student {
        id
        name
        nickname
        image
        email
      }
      course {
        id
        title
        pic
        price
        discount
      }
    }
  }
`;

const PAGINATE_STUDENT_X_COURSE = (page, perPage) => {
  return gql`
        query{
            studentXCourses(page: ${page}, perPage: ${perPage}){
                id
                isAchieved
                student{
                    id
                    name
                    nickname
                    image
                    email
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

const STUDENT_X_COURSES_BY_STUDENT_ID = (student_id) => {
  return gql`
        query{
            studentXCoursesByStudentId(studentId: ${student_id}){
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
                course{
                    id
                    title
                    pic
                    learningXCourses{
                      learning{
                          id
                      }
                  }
                }
                isAchieved
            }
        }
    `;
};

const STUDENT_X_COURSE_BY_STUDENT_ID_AND_COURSE_ID = (
  student_id,
  course_id
) => {
  return gql`
        query{
            studentXCourseByStudentIdAndCourseId(studentId: ${student_id}, courseId: ${course_id}){
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                course{
                    id
                    title
                }
                isAchieved
            }
        }
    `;
};

const COUNT_STUDENT_X_COURSE = (pathId, studentId, isAchieved) => {
  return gql`
      query{
        countStudentXCourse(pathId: ${pathId}, studentId: ${studentId}, isAchieved: ${isAchieved})     
      }
    `;
};

const STUDENT_X_COURSE_BY_ID_AND_STUDENT_ID = (id, studentId) => {
  return gql`
        query{
            studentXCourseByIdAndStudent(id: ${id}, studentId: ${studentId}){
                course{
                    id
                    title
                }
            }
        }
    `;
};

const RECENT_STUDENT_X_COURSES = (student_id) => {
  return gql`
        query{
            recentStudentXCourses(studentId: ${student_id}){
              createdAt
                course{
                    id
                    title
                }
            }
        }
        `;
};

// recentStudentXLessonsIsAchieved(studentId: 1, isAchieved: true)

const RECENT_STUDENT_X_COURSES_IS_ACHIEVED = (
  student_id,
  is_achieved = true
) => {
  return gql`
        query{
            recentStudentXCoursesIsAchieved(studentId: ${student_id}, isAchieved: ${is_achieved}){
              createdAt
              updatedAt
                course{
                    id
                    title
                }
            }
        }
        `;
};

export {
  ALL_STUDENT_X_COURSE,
  STUDENT_X_COURSE_BY_ID_AND_STUDENT_ID,
  COUNT_STUDENT_X_COURSE,
  PAGINATE_STUDENT_X_COURSE,
  STUDENT_X_COURSES_BY_STUDENT_ID,
  STUDENT_X_COURSE_BY_STUDENT_ID_AND_COURSE_ID,
  RECENT_STUDENT_X_COURSES,
  RECENT_STUDENT_X_COURSES_IS_ACHIEVED,
};
