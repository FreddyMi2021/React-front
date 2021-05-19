import { gql } from '@apollo/client';

const ALL_COMMENT = gql`
  query {
    allComments {
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
      }
      commentResponses {
        id
        content
      }
    }
  }
`;

const PAGINATE_COMMENTS = (page, perPage) => {
  return gql`
        query{
            comments(page: ${page}, perPage: ${perPage}){
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
                }
                commentResponses{
                    id
                    content
                }
            }
        }
    `;
};

const SHOW_COMMENT = (id) => {
  return gql`
        query{
            comment(id: ${id}){
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
                }
                commentResponses{
                    id
                    content
                }
            }
        }
    `;
};

const BEST_COMMENTS_BY_VOTE = (page, perPage) => {
  return gql`
        query{
            bestCommentsByVote(page: ${page}, perPage: ${perPage}){
            id
            types
            content
            createdAt
            commentVotes{
                id
            }
            commentResponses{
                id
            }
            studentXCommentXCode{
                student{
                    id
                    name
                }
            }
            studentXCommentXLesson{
                student{
                    id
                    name
                }
            }
            studentXCommentXLessonVideo {
                student{
                    id
                    name
                }
            }
            studentXCommentXQuizz{
                student{
                    id
                    name
                }
            }
            studentXCommentXExercise{
                student{
                    id
                    name
                }
            }
        }
    }`;
};

const RECENT_COMMENTS = (page, perPage) => {
  return gql`
          query{
              recentComments(page: ${page}, perPage: ${perPage}){
              id
              types
              content
              createdAt
              commentVotes{
                  id
              }
              commentResponses{
                  id
              }
              studentXCommentXCode{
                  student{
                      id
                      name
                  }
              }
              studentXCommentXLesson{
                  student{
                      id
                      name
                  }
              }
              studentXCommentXLessonVideo {
                  student{
                      id
                      name
                  }
              }
              studentXCommentXQuizz{
                  student{
                      id
                      name
                  }
              }
              studentXCommentXExercise{
                  student{
                      id
                      name
                  }
              }
          }
      }`;
};

const COMMENTS_BY_ANSWER = (page, perPage) => {
  return gql`
          query{
              commentsByAnswer(page: ${page}, perPage: ${perPage}){
              id
              types
              content
              createdAt
              commentVotes{
                  id
              }
              commentResponses{
                  id
              }
              studentXCommentXCode{
                  student{
                      id
                      name
                  }
              }
              studentXCommentXLesson{
                  student{
                      id
                      name
                  }
              }
              studentXCommentXLessonVideo {
                  student{
                      id
                      name
                  }
              }
              studentXCommentXQuizz{
                  student{
                      id
                      name
                  }
              }
              studentXCommentXExercise{
                  student{
                      id
                      name
                  }
              }
          }
      }`;
};

const ID_COMMENTS = gql`
  query {
    allComments {
      id
    }
  }
`;

const COUNT_COMMENTS = gql`
  query {
    countComments
  }
`;

export {
  ALL_COMMENT,
  PAGINATE_COMMENTS,
  SHOW_COMMENT,
  BEST_COMMENTS_BY_VOTE,
  ID_COMMENTS,
  RECENT_COMMENTS,
  COMMENTS_BY_ANSWER,
  COUNT_COMMENTS,
};
