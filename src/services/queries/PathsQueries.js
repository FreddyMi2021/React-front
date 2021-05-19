import { gql } from '@apollo/client';

const ALL_PATHS = gql`
  query {
    allPaths {
      id
      title
      pic
      description
      stages {
        id
        title
        description
        rank
        learnings {
          id
          title
          description
          pic
          price
          discount
          learningXCourses {
            id
            rang
            course {
              id
              title
              pic
              price
              discount
              courseXLessons {
                id
                rang
                lesson {
                  id
                  title
                  pic
                  content
                  duration
                  helpXp
                  price
                }
              }
            }
          }
          studentXLearnings {
            id
            isAchieved
            student {
              id
              name
              nickname
              image
              email
              totalXp
              totalBadge
              totalTimePassed
              totalCodeLine
              studentXCourses {
                id
              }
              studentXExercises {
                id
                duration
                attemptNb
                xpExercise
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
                  lesson {
                    id
                    title
                    pic
                    content
                    duration
                    price
                    discount
                    learningXCourses{
                        id
                        rang
                        course{
                            id
                            title
                            pic
                            price
                            discount
                            courseXLessons{
                                id
                                rang
                                lesson{
                                    id
                                    title
                                    pic
                                    content
                                    duration
                                    helpXp
                                    price
                                }
                            }
                        }
                    }
                    studentXLearnings{
                        id
                        isAchieved
                        student{
                            id
                            name
                            nickname
                            image
                            email
                            totalXp
                            totalBadge
                            totalTimePassed
                            totalCodeLine
                            studentXCourses{
                                id
                            }
                            studentXExercises{
                                id
                                duration
                                attemptNb
                                xpExercise
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
                                    lesson{
                                        id
                                        title
                                        pic
                                        content
                                        duration
                                        price
                                    }
                                    exerciseCriteriums{
                                        id
                                        criteria
                                        xp
                                    }
                                }
                            }
                        }
                    }
                }
              }
            }
          }
        }
      }
      studentXPaths {
        id
        isAchieved
        student {
          id
          name
          nickname
          image
          email
          totalXp
          totalBadge
          totalTimePassed
          totalCodeLine
          studentXCourses {
            id
          }
          studentXExercises {
            id
            duration
            attemptNb
            xpExercise
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
              lesson {
                id
                isAchieved
                student{
                    id
                    name
                    nickname
                    image
                    email
                    totalXp
                    totalBadge
                    totalTimePassed
                    totalCodeLine
                    studentXCourses{
                        id
                    }
                    studentXExercises{
                        id
                        duration
                        attemptNb
                        xpExercise
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
                            lesson{
                                id
                                title
                                pic
                                content
                                duration
                                price
                            }
                            exerciseCriteriums{
                                id
                                criteria
                                xp
                            }
                        }
                    }
                }
            }
          }
        }
      }
    }
  }
}
}
`;

const PAGINATE_PATHS = (page, perPage) => {
  return gql`
        query{
            paths(page: ${page}, perPage: ${perPage}){
                id
                title
                pic
                description
            }
        }
    `;
};

const SHOW_PATH = (id) => {
  return gql`
        query{
            path(id: ${id}){
                id
                title
                pic
                description
                stages{
                    id
                    title
                    description
                    rank
                    learnings{
                        id
                        title
                        description
                        pic
                        price
                        discount
                        learningXCourses{
                            id
                            rang
                            course{
                                id
                                title
                                pic
                                price
                                discount
                                courseXLessons{
                                    id
                                    rang
                                    lesson{
                                        id
                                        title
                                        pic
                                        content
                                        duration
                                        helpXp
                                        price
                                    }
                                }
                            }
                        }
                    }
                }
                
            }
        }
    `;
};


export { ALL_PATHS, PAGINATE_PATHS, SHOW_PATH };
