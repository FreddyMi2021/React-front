import { gql } from '@apollo/client';

const ALL_COMMENT_RESPONSE_VOTE = gql`
  query {
    allCommentResponseVote {
      id

      commentResponse {
        id
        types
        content
        comment {
          id
          types
          content
          commentVotes {
            id
            student {
              id
              name
              nickname
              image
              email
            }
            typeVote
          }
        }
      }
      student {
        id
        name
        nickname
        image
        email
      }
      typeVote
    }
  }
`;
const PAGINATE_COMMENT_RESPONSE_VOTES = (page, perPage) => {
  return gql`
        query{
            commentResponseVotes(page: ${page}, perPage: ${perPage}){
                id
                
                commentResponse{
                    id
                    types
                    content
                    comment{
                        id
                        types
                        content
                        commentVotes{
                            id
                            student{
                                id
                                name
                                nickname
                                image
                                email
                            }
                            typeVote
                        }
                    }
                }
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                typeVote
            }
        }
    `;
};

const SHOW_COMMENT_RESPONSE_VOTE = (id) => {
  return gql`
        query{
            commentResponseVote(id: ${id}){
                id
                commentResponse{
                    id
                    types
                    content
                    comment{
                        id
                        types
                        content
                        commentVotes{
                            id
                            student{
                                id
                                name
                                nickname
                                image
                                email
                            }
                            typeVote
                        }
                    }
                }
                student{
                    id
                    name
                    nickname
                    image
                    email
                }
                typeVote
            }
        }
    `;
};

const CRV_BY_CR = (commentResponseId) => {
  return gql`
        query{
            crvByCrId(commentResponseId: ${commentResponseId}){
                id
                commentResponse{
                    id
                }
                student{
                    id
                }
            }
        }
    `;
};

// const CRV_BY_CR = gql`
//   query crvByCrId($commentResponseId: ID!) {
//     crvByCrId(commentResponseId: $commentResponseId) {
//       id
//       commentResponse {
//         id
//       }
//       student {
//         id
//       }
//     }
//   }
// `;

const CRV_BY_CR_AND_STUDENT = (commentResponseId, studentId) => {
  return gql`
        query{
            crvByCrIdAndStudentId(commentResponseId: ${commentResponseId}, studentId: ${studentId}){
                id
                commentResponse{
                    id
                }
                student{
                    id
                }
            }
        }
    `;
};

// const CRV_BY_CR_AND_STUDENT = gql`
//   query crvByCrIdAndStudentId($studentId: ID!, $commentResponseId: ID!) {
//     crvByCrIdAndStudentId(
//       studentId: $studentId
//       commentResponseId: $commentResponseId
//     ) {
//       id
//       commentResponse {
//         id
//       }
//       student {
//         id
//       }
//     }
//   }
// `;

export {
  ALL_COMMENT_RESPONSE_VOTE,
  PAGINATE_COMMENT_RESPONSE_VOTES,
  SHOW_COMMENT_RESPONSE_VOTE,
  CRV_BY_CR,
  CRV_BY_CR_AND_STUDENT,
};
