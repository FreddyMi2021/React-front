import { gql } from '@apollo/client';

const ALL_LESSONS = gql`
  query {
    allLessons {
      id
      title
      pic
      content
      duration
      helpXp
      price
      exercise {
        id
        instruction
        solution
        hint
        attemptMax
        durationMax
        failXp
        timeXp
        language
        category
      }
      quizzs {
        id
        ask
        answer
        xp
        quizzChoices {
          id
          choice
          quizz {
            id
          }
        }
      }
      lessonVideo {
        id
      }
      ressources{
        id
        link
      }
    }
  }
`;

const PAGINATE_LESSONS = (page, perPage) => {
  return gql`
        query{
            lessons(page: ${page}, perPage: ${perPage}){
                id
                title
                pic
                content
                duration
                helpXp
                price
                exercise{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
                    category
                }
                quizzs{
                    id
                    ask
                    answer
                    xp
                    quizzChoices {
                        id
                        choice
                        quizz{
                            id
                        }
                    }
                }
                lessonVideo{
                    id
                }
                ressources{
                  id
                  link
                }
            }
        }
    `;
};

const SHOW_LESSON = (id) => {
  return gql`
        query{
            lesson(id: ${id} ){
                id
                title
                pic
                content
                duration
                helpXp
                price
                exercise{
                    id
                    instruction
                    solution
                    hint
                    attemptMax
                    durationMax
                    failXp
                    timeXp
                    language
                    category
                    indications{
                        id
                        content
                    }
                    exerciseCriteriums{
                        id
                        criteria
                        xp
                    }
                }
                quizzs{
                    id
                    ask
                    answer
                    xp
                    quizzChoices {
                        id
                        choice
                        quizz{
                            id
                        }
                    }
                    studentXQuizzs{
                        id
                    }
                }
                lessonVideo{
                    id
                }
                ressources{
                  id
                  link
                }
            }
        }
    `;
};


const COUNT_LESSON = (courseId) => {
  return gql`
        query{
            countLessons(courseId: ${courseId})
        }
    `;
};

const SEARCH_LESSON = gql`
  query {
    searchLessons(title: string) {
      id
      name
    }
  }
`;

export {
  ALL_LESSONS,
  PAGINATE_LESSONS,
  SHOW_LESSON,
  COUNT_LESSON,
  SEARCH_LESSON,
};
