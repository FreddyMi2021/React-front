import { gql } from '@apollo/client';

const INIT_STUDENT_X_QUIZZ = gql`
  mutation CreateStudentXQuizz(
    $isAchieved: Boolean!
    $studentId: Int!
    $quizzId: Int!
  ) {
    createStudentXQuizz(
      input: {
        duration: null
        isAchieved: $isAchieved
        studentId: $studentId
        quizzId: $quizzId
      }
    ) {
      studentXQuizz {
        id
        student {
          id
        }
        quizz {
          id
        }
      }
    }
  }
`;

const UPDATE_STUDENT_X_QUIZZ = gql`
  mutation UpdateStudentXQuizz(
    $id: Int!
    $isAchieved: Boolean!
    $studentId: Int!
    $quizzId: Int!
  ) {
    updateStudentXQuizz(
      input: {
        id: $id
        duration: null
        isAchieved: $isAchieved
        studentId: $studentId
        quizzId: $quizzId
      }
    ) {
      studentXQuizz {
        id
        student {
          id
        }
        quizz {
          id
        }
      }
    }
  }
`;

const DESTROY_STUDENT_X_QUIZZ = gql`
  mutation DestroyStudentXQuizz($id: Int!) {
    destroyStudentXQuizz(input: { id: $id }) {
      studentXQuizzs {
        id
      }
    }
  }
`;

export {
  INIT_STUDENT_X_QUIZZ,
  UPDATE_STUDENT_X_QUIZZ,
  DESTROY_STUDENT_X_QUIZZ,
};
