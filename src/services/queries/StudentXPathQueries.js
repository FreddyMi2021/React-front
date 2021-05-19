import { gql } from '@apollo/client';

const ALL_STUDENT_X_PATHS = gql`
  query {
    allStudentXPaths {
      id
      isAchieved
      student {
        id
        name
        nickname
        image
        email
      }
      path {
        id
        title
        pic
        description
      }
    }
  }
`;

const PAGINATE_STUDENT_X_PATH = (page, perPage) => {
  return gql`
        query{
            studentXPaths(page: ${page}, perPage: ${perPage}){
                id
                isAchieved
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                path{
                    id
                    title
                    pic
                    description
                }
            }
        }
    `;
};

const STUDENT_X_PATHS_BY_STUDENT_ID = (student_id) => {
  return gql`
        query{
            studentXPathsByStudentId(studentId: ${student_id}){
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
                path{
                    id
                    title
                    description
                }
                isAchieved
            }
        }
    `;
};

const STUDENT_X_PATH_BY_STUDENT_ID_AND_PATH_ID = (student_id, path_id) => {
  return gql`
        query{
            studentXPathByStudentIdAndPathId(studentId: ${student_id}, pathId: ${path_id}){
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                path{
                    id
                    title
                    description
                }
                isAchieved
                createdAt
                updatedAt
            }
        }
    `;
};

const RECENT_STUDENT_X_PATHS = (student_id) => {
  return gql`
      query{
          recentStudentXPaths(studentId: ${student_id}){
              createdAt
              path{
                  id
                  title
              }
          }
      }
      `;
};

const RECENT_STUDENT_X_PATHS_IS_ACHIEVED = (student_id, is_achieved = true) => {
  return gql`
        query{
            recentStudentXPathsIsAchieved(studentId: ${student_id}, isAchieved: ${is_achieved}){
            createdAt
            updatedAt
                path{
                    id
                    title
                }
            }
        }
          `;
};

export {
  ALL_STUDENT_X_PATHS,
  PAGINATE_STUDENT_X_PATH,
  STUDENT_X_PATHS_BY_STUDENT_ID,
  STUDENT_X_PATH_BY_STUDENT_ID_AND_PATH_ID,
  RECENT_STUDENT_X_PATHS,
  RECENT_STUDENT_X_PATHS_IS_ACHIEVED,
};
