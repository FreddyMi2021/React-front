import { gql } from '@apollo/client';

const ALL_STUDENT_X_QUIZZ = gql`
    query{
        allStudentXQuizzs{
            id
            duration
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
            quizz{
                id
                ask
                answer
                xp
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    price
                }
            }
        }
    }
`;

const PAGINATE_STUDENT_X_QUIZZ = (page, perPage) => {
  return gql`
        query{
            studentXQuizzs(page: ${page}, perPage: ${perPage}){
                id
                duration
                isAchieved
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                quizz{
                    id
                    ask
                    answer
                    xp
                    lesson{
                        id
                        title
                        pic
                        content
                        duration
                        price
                    }
                }
            }
        }
    `;
};

const STUDENT_X_QUIZZS_BY_STUDENT_ID = (student_id) => {
  return gql`
        query{
            studentXQuizzsByStudentId(studentId: ${student_id}){
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                isAchieved
            }
        }
    `;
};

const STUDENT_X_QUIZZ_BY_STUDENT_ID_AND_QUIZZ_ID = (student_id, quizz_id) => {
  return gql`
        query{
            studentXQuizzByStudentIdAndQuizzId(studentId: ${student_id}, quizzId: ${quizz_id}){
                id
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                isAchieved
            }
        }
    `;
};

const STUDENT_X_QUIZZ_BY_ID_AND_STUDENT_ID = (id, studentId) => {
  return gql`
        query{
            studentXQuizzByIdAndStudent(id: ${id}, studentId: ${studentId}){
                quizz{
                    id
                }
            }
        }
    `;
};

export {
  ALL_STUDENT_X_QUIZZ,
  STUDENT_X_QUIZZ_BY_ID_AND_STUDENT_ID,
  PAGINATE_STUDENT_X_QUIZZ,
  STUDENT_X_QUIZZS_BY_STUDENT_ID,
  STUDENT_X_QUIZZ_BY_STUDENT_ID_AND_QUIZZ_ID,
};
