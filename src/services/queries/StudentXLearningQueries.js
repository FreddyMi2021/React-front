import { gql } from '@apollo/client';

const ALL_STUDENT_X_LEARNING = gql`
  query {
    allStudentXLearnings {
      id
      isAchieved
      student {
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
      learning {
        id
        title
        description
        pic
        price
        discount
        stage {
          id
          title
          path {
            id
            isAchieved
            student {
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
            learning {
              id
              title
              description
              pic
              price
              discount
              stage {
                id
                title
                path {
                  id
                  title
                  pic
                  description
                }
                description
                rank
              }
            }
          }
        }
      }
    }
  }
`;

const PAGINATE_STUDENT_X_LEARNING = (page, perPage) => {
  return gql`
        query{
            studentXLearnings(page: ${page}, perPage: ${perPage}){
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
                        path{
                            id
                            title
                            pic
                            description
                        }
                        description
                        rank
                    }
                }
            }
        }
    `;
};

const STUDENT_X_LEARNINGS_BY_STUDENT_ID = (student_id) => {
  return gql`
        query{
            studentXLearningsByStudentId(studentId: ${student_id}){
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
                learning{
                    id
                    title
                    description
                    pic
                    learningXCourses{
                      id
                      rang
                      course{
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
                      }
                  }
                }
                isAchieved
            }
        }
    `;
};

const STUDENT_X_LEARNING_BY_STUDENT_ID_AND_LEARNING_ID = (
  student_id,
  learning_id
) => {
  return gql`
        query{
            studentXLearningByStudentIdAndLearningId(studentId: ${student_id}, learningId: ${learning_id}){
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                learning{
                    id
                    title
                    description
                    pic
                }
                isAchieved
            }
        }
    `;
};

const COUNT_STUDENT_X_LEARNING = (pathId, studentId, isAchieved) => {
  return gql`
      query{
        countStudentXLearning(pathId: ${pathId}, studentId: ${studentId}, isAchieved: ${isAchieved})     
      }
    `;
};

const STUDENT_X_LEARNING_BY_ID_AND_STUDENT_ID = (id, studentId) => {
  return gql`
        query{
            studentXLearningByStudentIdAndLearningId(learningId: ${id}, studentId: ${studentId}){
                learning{
                    id
                    title
                }
            }
        }
    `;
};

const RECENT_STUDENT_X_LEARNINGS = (student_id) => {
  return gql`
        query{
            recentStudentXLearnings(studentId: ${student_id}){
              createdAt
                learning{
                    id
                    title
                }
            }
        }
        `;
};

const RECENT_STUDENT_X_LEARNINGS_IS_ACHIEVED = (
  student_id,
  is_achieved = true
) => {
  return gql`
      query{
          recentStudentXLearningsIsAchieved(studentId: ${student_id}, isAchieved: ${is_achieved}){
            createdAt
            updatedAt
              learning{
                  id
                  title
              }
          }
      }
      `;
};

export {
  ALL_STUDENT_X_LEARNING,
  STUDENT_X_LEARNING_BY_ID_AND_STUDENT_ID,
  COUNT_STUDENT_X_LEARNING,
  PAGINATE_STUDENT_X_LEARNING,
  STUDENT_X_LEARNINGS_BY_STUDENT_ID,
  STUDENT_X_LEARNING_BY_STUDENT_ID_AND_LEARNING_ID,
  RECENT_STUDENT_X_LEARNINGS,
  RECENT_STUDENT_X_LEARNINGS_IS_ACHIEVED,
};
