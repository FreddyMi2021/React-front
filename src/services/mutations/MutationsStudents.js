import { gql } from '@apollo/client';

const CREATE_STUDENTS = gql`
  mutation CreateStudent(
    $name: String!
    $nickname: String!
    $image: String!
    $email: String!
    $password: String!
    $totalXp: Int!
    $totalBadge: Int!
    $totalTimePassed: Int!
    $totalCodeLine: Int!
  ) {
    createStudent(
      input: {
        name: $name
        nickname: $nicknamem
        image: $image
        email: $email
        password: $password
        totalXp: $totalXp
        totalBadge: $totalBadge
        totalTimePassed: $totalTimePassed
        totalCodeLine: $totalCodeLine
      }
    ) {
      student {
        id
        name
        nickname
        image
        email
        password
        totalXp
        totalBadge
        totalTimePassed
        totalCodeLine
      }
    }
  }
`;

const UPDATE_STAGES = gql`
  mutation UpdateStudent(
    $id: Int!
    $name: String!
    $nickname: String!
    $image: String!
    $email: String!
    $password: String!
    $totalXp: Int!
    $totalBadge: Int!
    $totalTimePassed: Int!
    $totalCodeLine: Int!
  ) {
    updateStudent(
      input: {
        id: $id
        name: $name
        nickname: $nicknamem
        image: $image
        email: $email
        password: $password
        totalXp: $totalXp
        totalBadge: $totalBadge
        totalTimePassed: $totalTimePassed
        totalCodeLine: $totalCodeLine
      }
    ) {
      student {
        id
        name
        nickname
        image
        email
        password
        totalXp
        totalBadge
        totalTimePassed
        totalCodeLine
      }
    }
  }
`;

const UPDATE_STUDENT_INFOS = gql`
  mutation UpdateStudentInfos(
    $id: Int!
    $firstName: String!
    $lastName: String!
    $birthday: String!
    $email: String!
    $image: String!
  ) {
    updateStudentInfos(
      input: {
        id: $id
        firstName: $firstName
        lastName: $lastName
        birthday: $birthday
        email: $email
        image: $image
      }
    ) {
      student {
        id
        name
        email
      }
    }
  }
`;

const DELETE_STUDENTS = gql`
  mutation DestroyStudent($id: int!) {
    destroyStudent(input: { id: $id }) {
      students {
        id
      }
    }
  }
`;

export const CREATE_HEX_ID = gql`
  mutation CreateHexId($id: Int!, $hexId: Int!) {
    createHexId(input: { id: $id, hexId: $hexId }) {
      student {
        id
        hexId
      }
    }
  }
`;

const UPDATE_STUDENT_NATIONALITY = gql`
  mutation UpdateStudentNationality($id: Int!, $nationality: String!) {
    updateStudentNationality(input: { id: $id, nationality: $nationality }) {
      student {
        id
        name
        email
        nationality
      }
    }
  }
`;

export {
  CREATE_STUDENTS,
  UPDATE_STAGES,
  DELETE_STUDENTS,
  UPDATE_STUDENT_INFOS,
  UPDATE_STUDENT_NATIONALITY,
};
