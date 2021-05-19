import { gql } from '@apollo/client';

const COMMENT_VOTE_BY_STUDENT_ID_AND_COMMENT_ID = gql`
  query CommentVoteByStudentIdAndCommentId($studentId: ID!, $commentId: ID!){
    commentVoteByStudentIdAndCommentId( studentId: $studentId, commentId: $commentId ) {
      id
      comment{
        id
      }
      student{
        id
      }
    }
  }
`


const COMMENT_VOTE_BY_COMMENT_ID = gql`
  query CommentVoteByCommentId($commentId: ID!){
    commentVoteByCommentId( commentId: $commentId ) {
      id
      comment{
        id
      }
      student{
        id
      }
    }
  }
`

 export { COMMENT_VOTE_BY_STUDENT_ID_AND_COMMENT_ID, COMMENT_VOTE_BY_COMMENT_ID };