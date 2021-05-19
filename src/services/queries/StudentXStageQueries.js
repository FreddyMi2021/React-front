import { gql } from '@apollo/client';

const ALL_STUDENT_X_STAGES = gql`
  query {
    allStudentXStages {
      id
      isAchieved
      student {
        id
        name
        nickname
        image
        email
      }
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
        learnings {
          id
          title
          description
          pic
          price
          discount
        }
      }
    }
  }
`;

const PAGINATE_STUDENT_X_STAGES = (page, perPage) => {
  return gql`
    query{
      studentXStages(page: ${page}, perPage: ${perPage}){
        id
        isAchieved
        student{
          id
          name
          nickname
          image
          email
        }
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
          learnings{
            id
            title
            description
            pic
            price
            discount
          }
        }
      }
    }
  `;
};

const STUDENT_X_STAGES_BY_STUDENT_ID = (student_id) => {
  return gql`
    query{
      studentXStagesByStudentId(studentId: ${student_id}){
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
          learnings{
            id
            title
            description
            pic
            price
            discount
          }
        }
        isAchieved
        createdAt
        updatedAt
      }
    }
  `;
};

const STUDENT_X_STAGE_BY_STUDENT_ID_AND_STAGE_ID = (student_id, stage_id) => {
  return gql`
    query{
      studentXStageByStudentIdAndStageId(studentId: ${student_id}, stageId: ${stage_id}){
        createdAt
        updatedAt
        student{
          id
          name
          nickname
          image
          email
        }
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
          learnings{
            id
            title
            description
            pic
            price
            discount
          }
        }
      }
    }
  `;
};

const COUNT_STUDENT_X_STAGE = (pathId, studentId, isAchieved) => {
  return gql`
      query{
        countStudentXStage(pathId: ${pathId}, studentId: ${studentId}, isAchieved: ${isAchieved})     
      }
    `;
};

const RECENT_STUDENT_X_STAGES = (student_id) => {
  return gql`
    query{
        recentStudentXStages(studentId: ${student_id}){
          createdAt
            stage{
                id
                title
            }
        }
    }
    `;
};

const RECENT_STUDENT_X_STAGES_IS_ACHIEVED = (
  student_id,
  is_achieved = true
) => {
  return gql`
          query{
              recentStudentXStagesIsAchieved(studentId: ${student_id}, isAchieved: ${is_achieved}){
                createdAt
                updatedAt
                  stage{
                      id
                      title
                  }
              }
          }
          `;
};

export {
  ALL_STUDENT_X_STAGES,
  PAGINATE_STUDENT_X_STAGES,
  STUDENT_X_STAGES_BY_STUDENT_ID,
  STUDENT_X_STAGE_BY_STUDENT_ID_AND_STAGE_ID,
  COUNT_STUDENT_X_STAGE,
  RECENT_STUDENT_X_STAGES,
  RECENT_STUDENT_X_STAGES_IS_ACHIEVED,
};
