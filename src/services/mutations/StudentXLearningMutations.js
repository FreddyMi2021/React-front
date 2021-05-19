import { gql } from '@apollo/client';

const INIT_STUDENT_X_LEARNING = gql`
  mutation CreateStudentXLearning(
    $isAchieved: Boolean!,
    $studentId: Int!,
    $learningId: Int!
  ){
    createStudentXLearning(
      input: {
        isAchieved: $isAchieved,
        studentId: $studentId,
        learningId: $learningId
      }
    ){
      studentXLearning{
        id
        student{
          id
        }
        learning{
          id
          title
        }
      }
    }
  }
`;

const UPDATE_STUDENT_X_LEARNING = gql`
  mutation UpdateStudentXLearning(
    $id:Int!,
    $isAchieved: Boolean!,
    $studentId: Int!,
    $learningId: Int!
  ){
    updateStudentXLearning(
      input: {
        id: $id,
        isAchieved: $isAchieved,
        studentId: $studentId,
        learningId: $learningId
      }
    ){
      studentXLearning{
        id
        student{
          id
        }
        learning{
          id
          title
        }
      }
    }
  }
`;

const DESTROY_STUDENT_X_LEARNING = gql`
  mutation DestroyStudentXLearning($id: Int!){
    destroyStudentXLearning(input: {
      id: $id
    })
    {
      studentXLearnings{
        id
      }
    }
  }
`

export {
  INIT_STUDENT_X_LEARNING,
  UPDATE_STUDENT_X_LEARNING,
  DESTROY_STUDENT_X_LEARNING
}