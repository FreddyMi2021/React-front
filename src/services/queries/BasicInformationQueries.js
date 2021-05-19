import { gql } from '@apollo/client';

const ALL_BASIC_INFORMATIONS = gql`
  query {
    allBasicInformations {
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
`;

const BASIC_INFORMATION = (id) => {
  return gql`
        query{
            basicInformation(id: ${id}){
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
    `;
};

const BASIC_INFORMATION_BY_STUDENT_ID = (student_id) => {
  return gql`
        query {
            basicInformationByStudentId(studentId: ${student_id}){
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
    `;
};

const BASIC_INFORMATION_FULLNAME = (student_id) => {
  return gql`
      query {
        basicInformationByStudentId(studentId: ${student_id}){
          id
          fullName
        }
      }
    `;
};

export {
  ALL_BASIC_INFORMATIONS,
  BASIC_INFORMATION,
  BASIC_INFORMATION_BY_STUDENT_ID,
  BASIC_INFORMATION_FULLNAME,
};
