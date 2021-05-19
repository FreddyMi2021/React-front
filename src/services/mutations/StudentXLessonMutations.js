import { gql } from '@apollo/client';

const INIT_STUDENT_X_LESSON = gql`
  mutation CreateStudentXLesson(
    $isAchieved: Boolean!,
    $studentId: Int!,
    $lessonId: Int!
  ){
    createStudentXLesson(
      input: {
        duration: null,
        isHepedXp: null,
        isAchieved: $isAchieved,
        studentId: $studentId,
        lessonId: $lessonId
      }
    ){
      studentXLesson{
        id
        student{
          id
        }
        lesson{
          id
          title
        }
      }
    }
  }
`;

const UPDATE_STUDENT_X_LESSON = gql`
  mutation UpdateStudentXLesson(
    $id: Int!,
    $isAchieved: Boolean!,
    $studentId: Int!,
    $lessonId: Int!
  ){
    updateStudentXLesson(
      input: {
        id: $id,
        duration: null,
        isHepedXp: null,
        isAchieved: $isAchieved,
        studentId: $studentId,
        lessonId: $lessonId
      }
    ){
      studentXLesson{
        id
        student{
          id
        }
        lesson{
          id
          title
        }
      }
    }
  }
`;

const DESTROY_STUDENT_X_LESSON = gql`
mutation DestroyStudentXLesson($id: Int!){
  destroyStudentXLesson(input: {
    id: $id
  }){
    studentXLessons{
      id
    }
  }
}
`
export {
  INIT_STUDENT_X_LESSON,
  UPDATE_STUDENT_X_LESSON,
  DESTROY_STUDENT_X_LESSON
}