import { gql } from '@apollo/client';
const ALL_STUDENT_2 = gql`
  query {
    allStudents {
      id
      name
      email
      totalXp
    }
  }
`;
const ALL_STUDENTS = gql`
  query {
    allStudents {
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
        course {
          id
          title
          pic
          price
          discount
        }
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
          }
          exerciseCriteriums {
            id
            criteria
            xp
          }
        }
      }
      studentXLearnings {
        id
        learning {
          id
          title
          description
          pic
          price
          discount
        }
      }
      studentXLessons {
        id
        duration
        isHepedXp
        lesson {
          id
          title
          pic
          content
          duration
          helpXp
          price
          adminId
        }
      }
      studentXQuizzs {
        id
        duration
        quizz {
          id
          ask
          answer
          xp
          lesson {
            id
            title
            pic
            content
            duration
            price
          }
        }
      }
      studentXTestSkills {
        id
        duration
        testSkill {
          id
          ask
          answer
          course {
            id
            title
            pic
            price
            discount
          }
        }
      }
      studentXPaths {
        id
        path {
          id
          title
        }
      }
    }
  }
`;

const PAGINATE_STUDENTS = (page, perPage) => {
  return gql`
        query{
            students(page: ${page}, perPage: ${perPage} ){
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
                course{
                    id
                    title
                    pic
                    price
                    discount
                }
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
            studentXLearnings{
                id
                learning{
                    id
                    title
                    description
                    pic
                    price
                    discount
                }
            }
            studentXLessons{
                id
                duration
                isHepedXp
                lesson{
                    id
                    title
                    pic
                    content
                    duration
                    helpXp
                    price
                    adminId
                }
            }
            studentXQuizzs{
                id
                duration
                quizz{
                    id
                    ask
                    answer
                    xp
                    lesson{
                        id
                        title
                        pic
                        content
                        duration
                        price
                    }
                }
            }
            studentXTestSkills{
                id
                duration
                testSkill{
                    id
                    ask
                    answer
                    course{
                        id
                        title
                        pic
                        price
                        discount
                    }
                }
            }
            studentXPaths{
                id
                path{
                    id
                    title
                }
            }
        }
    `
}
const SHOW_STUDENT_2 = (id) =>{
    return gql`
        query{
            student(id:${id} ){
                id
                name
                nickname
                image
                email
                totalXp
                totalBadge
                totalTimePassed
                totalCodeLine
                hexId
            }
        }
    `
}

const SHOW_STUDENT = (id) => {
  return gql`
        query{
            student(id:${id} ){
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
                    course{
                        id
                        title
                        pic
                        price
                        discount
                    }
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
                studentXLearnings{
                    id
                    learning{
                        id
                        title
                        description
                        pic
                        price
                        discount
                    }
                }
                studentXLessons{
                    id
                    duration
                    isHepedXp
                    lesson{
                        id
                        title
                        pic
                        content
                        duration
                        helpXp
                        price
                        adminId
                    }
                }
                studentXQuizzs{
                    id
                    duration
                    quizz{
                        id
                        ask
                        answer
                        xp
                        lesson{
                            id
                            title
                            pic
                            content
                            duration
                            price
                        }
                    }
                }
                studentXTestSkills{
                    id
                    duration
                    testSkill{
                        id
                        ask
                        answer
                        course{
                            id
                            title
                            pic
                            price
                            discount
                        }
                    }
                }
                studentXPaths{
                    id
                    path{
                        id
                        title
                    }
                }
            }
        }
    `;
};

const STUDENT_NAME = (id) => {
  return gql`
    query{
        student(id:${id} ){
            id
            name
            image
            email
        }
    }
    `;
};

const BEST_STUDENT_XP = (page, perPage) => {
  return gql`
        query{
            bestStudentsXp(page: ${page}, perPage: ${perPage}){
                id
                name
                nickname
                image
                email
                totalXp
            }
        }
    `;
};

const BEST_STUDENT_BADGE = (page, perPage) => {
  return gql`
        query{
            bestStudentsBadge(page: ${page}, perPage: ${perPage}){
                id
                name
                nickname
                image
                email
                totalBadge
                
            }
        }
    `;
};

const BEST_STUDENT_TIME_PASSED = (page, perPage) => {
  return gql`
        query{
            bestStudentsTimePassed(page: ${page}, perPage: ${perPage}){
                id
                name
                nickname
                image
                email
                totalTimePassed
            }
        }
    `;
};

const BEST_STUDENT_CODE_LINE = (page, perPage) => {
  return gql`
        query{
            bestStudentsCodeLine(page: ${page}, perPage: ${perPage}){
                id
                name
                nickname
                image
                email
                totalCodeLine
            }
        }
    `;
};

const COUNT_STUDENT = gql`
  query {
    countStudents
  }
`;

const SEARCH_STUDENT = gql`
  query {
    searchStudents(name: string) {
      id
      name
    }
  }
`;

export {
  ALL_STUDENT_2, 
  ALL_STUDENTS, 
  PAGINATE_STUDENTS,
  SHOW_STUDENT, 
  SHOW_STUDENT_2, 
  BEST_STUDENT_BADGE, 
  BEST_STUDENT_TIME_PASSED,
  BEST_STUDENT_XP, 
  BEST_STUDENT_CODE_LINE, 
  COUNT_STUDENT, 
  SEARCH_STUDENT,
  STUDENT_NAME
}
