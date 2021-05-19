import { gql } from '@apollo/client';

const CREATE_COMMENT_VOTE = gql`
  mutation CreateCommentVote(
    $studentId: ID!,
    $commentId: ID!
  ){
    createCommentVote(
      input: {
        studentId: $studentId,
        commentId: $commentId
      }
    ){
      commentVote{
        id
        student{
          id
        }
        comment{
          id
        }
      }
    }
  }
`;

const DESTROY_COMMENT_VOTE = gql`
mutation DestroyCommentVote(
  $studentId: ID!,
  $commentId: ID!
){
  destroyCommentVote(
    input: {
      studentId: $studentId,
      commentId: $commentId
    }
  ){
    commentVotes{
      id
      student{
        id
      }
      comment{
        id
      }
    }
  }
}
`;

export {
  CREATE_COMMENT_VOTE,
  DESTROY_COMMENT_VOTE
}