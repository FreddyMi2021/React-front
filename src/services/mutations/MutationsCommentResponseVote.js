import { gql } from '@apollo/client';

const CREATE_COMMENT_RESPONSE_VOTE = gql`
  mutation CreateCommentResponseVote(
      $commentResponseId: Int!,
      $studentId: Int!,
      $typeVote: String!
  )
  {
    createCommentResponseVote(
      input: {
        commentResponseId: $commentResponseId,
        studentId:  $studentId,
        typeVote: $typeVote
      }
    )
    {
      commentResponseVote{
        id
        student{
            id
        }
        typeVote
      }
    }
  }
`;

const UPDATE_COMMENT_RESPONSE_VOTE = gql`
  mutation UpdateCommentResponseVote(
    $id: Int!
    $commentResponseId: Int!
    $studentId: Int!
    $typeVote: String!
  ) {
    updateCommentResponseVote(
      input: {
        id: $id
        commentResponseId: $commentResponseId
        studentId: $studentId
        typeVote: $typeVote
      }
    ) {
      commentResponseVote {
        id
        content
        student {
          id
        }
        typeVote
      }
    }
  }
`;

const DESTROY_COMMENT_RESPONSE_VOTE = gql`
  mutation DestroyCommentResponseVote(
    $studentId: ID!
    $commentResponseId: ID!
  ) {
    destroyCommentResponseVote(
      input: { studentId: $studentId, commentResponseId: $commentResponseId }
    ) {
      commentResponseVotes {
        id

        student {
          id
        }
      }
    }
  }
`;

export {
  CREATE_COMMENT_RESPONSE_VOTE,
  UPDATE_COMMENT_RESPONSE_VOTE,
  DESTROY_COMMENT_RESPONSE_VOTE,
};
