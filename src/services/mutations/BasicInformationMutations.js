import { gql } from '@apollo/client';

const CREATE_BASIC_INFORMATION = gql`
  mutation CreateBasicInformation(
    $fullName: String!
    $studyLevel: String!
    $phoneNumber: String!
    $adress: String!
    $dateBirth: String!
    $emailAdress: String!
    $gender: String!
    $ambition: String!
    $filiere: String!
    $experience: String!
    $resumPic: String!
    $identityPic: String!
    $webSiteUrl: String!
    $funFact: String!
    $phoneNumber2: String!
    $languages: String!
    $wishPath: String!
    $interest: String!
    $jobType: String!
    $wishSkill: String!
    $payMode: String!
    $studentId: Int!
  ) {
    createBasicInformation(
      input: {
        fullName: $fullName
        studyLevel: $studyLevel
        phoneNumber: $phoneNumber
        adress: $adress
        dateBirth: $dateBirth
        emailAdress: $emailAdress
        gender: $gender
        ambition: $ambition
        filiere: $filiere
        experience: $experience
        resumPic: $resumPic
        identityPic: $identityPic
        webSiteUrl: $webSiteUrl
        funFact: $funFact
        phoneNumber2: $phoneNumber2
        languages: $languages
        wishPath: $wishPath
        interest: $interest
        jobType: $jobType
        wishSkill: $wishSkill
        payMode: $payMode
        studentId: $studentId
      }
    ) {
      basicInformation {
        id
        fullName
        studyLevel
        phoneNumber
        adress
        dateBirth
        emailAdress
        gender
        ambition
        filiere
        experience
        resumPic
        identityPic
        webSiteUrl
        funFact
        phoneNumber2
        languages
        wishPath
        interest
        jobType
        wishSkill
        payMode
        student {
          id
          name
        }
      }
    }
  }
`;

const UPDATE_BASIC_INFORMATION = gql`
  mutation UpdateBasicInformation(
    $id: Int!
    $fullName: String!
    $studyLevel: String!
    $phoneNumber: String!
    $adress: String!
    $dateBirth: String!
    $emailAdress: String!
    $gender: String!
    $ambition: String!
    $filiere: String!
    $experience: String!
    $resumPic: String!
    $identityPic: String!
    $webSiteUrl: String!
    $funFact: String!
    $phoneNumber2: String!
    $languages: String!
    $wishPath: String!
    $interest: String!
    $jobType: String!
    $wishSkill: String!
    $payMode: String!
    $studentId: Int!
  ) {
    updateBasicInformation(
      input: {
        id: $id
        fullName: $fullName
        studyLevel: $studyLevel
        phoneNumber: $phoneNumber
        adress: $adress
        dateBirth: $dateBirth
        emailAdress: $emailAdress
        gender: $gender
        ambition: $ambition
        filiere: $filiere
        experience: $experience
        resumPic: $resumPic
        identityPic: $identityPic
        webSiteUrl: $webSiteUrl
        funFact: $funFact
        phoneNumber2: $phoneNumber2
        languages: $languages
        wishPath: $wishPath
        interest: $interest
        jobType: $jobType
        wishSkill: $wishSkill
        payMode: $payMode
        studentId: $studentId
      }
    ) {
      basicInformation {
        id
        fullName
        studyLevel
        phoneNumber
        adress
        dateBirth
        emailAdress
        gender
        ambition
        filiere
        experience
        resumPic
        identityPic
        webSiteUrl
        funFact
        phoneNumber2
        languages
        wishPath
        interest
        jobType
        wishSkill
        payMode
        student {
          id
          name
        }
      }
    }
  }
`;
const DESTROY_BASIC_INFORMATION = gql`
  mutation DestroyBasicInformation($id: Int!) {
    destroyBasicInformation(input: { id: $id }) {
      basicInformations {
        id
      }
    }
  }
`;

export {
  CREATE_BASIC_INFORMATION,
  UPDATE_BASIC_INFORMATION,
  DESTROY_BASIC_INFORMATION,
};
