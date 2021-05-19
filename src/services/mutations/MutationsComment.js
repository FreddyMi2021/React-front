import {gql} from '@apollo/client';

const CREATE_COMMENTS = gql`
    mutation CreateComment(
        $types: String!,
        $content: String!,
        $studentXCommentXCodeId: Int!,
        $studentXCommentXLessonId: Int!,
        $studentXCommentXLessonVideoId: Int!,
        $studentXCommentXExerciseId: Int!
    ){
        createComment(
            input: {
                types: $type,
                content: $content,
                studentXCommentXCodeId: $studentXCommentXCodeId,
                studentXCommentXLessonId: $studentXCommentXLessonId,
                studentXCommentXLessonVideoId: $studentXCommentXLessonVideoId,
                studentXCommentXExerciseId: $studentXCommentXExerciseId
            }
        ){
            comment{
                id
                type
                content
                studentXCommentXCode{
                    id
                }
                studentXCommentXLesson{
                    id
                }
                studentXCommentXLessonVideo{
                    id
                }
                studentXCommentXExercise{
                    id
                }
            }
        }
    }
`

const UPDATE_COMMENTS = gql`
    mutation UpdateComment(
        $id: Int!,
        $types: String!,
        $content: String!,
        $studentXCommentXCodeId: Int!,
        $studentXCommentXLessonId: Int!,
        $studentXCommentXLessonVideoId: Int!,
        $studentXCommentXExerciseId: Int!
    ){
        updateComment(
            input: {
                id: $id,
                types: $type,
                content: $content,
                studentXCommentXCodeId: $studentXCommentXCodeId,
                studentXCommentXLessonId: $studentXCommentXLessonId,
                studentXCommentXLessonVideoId: $studentXCommentXLessonVideoId,
                studentXCommentXExerciseId: $studentXCommentXExerciseId
            }
        ){
            comment{
                id
                type
                content
                studentXCommentXCode{
                    id
                }
                studentXCommentXLesson{
                    id
                }
                studentXCommentXLessonVideo{
                    id
                }
                studentXCommentXExercise{
                    id
                }
            }
        }
    }
`

const DESTROY_COMMENT = gql`
    mutation DestroyComment($id: Int!){
        createComment(input: {
            id: $id
        }){
            comments{
                id
                type
                content
            }
        }
    }
`

export { CREATE_COMMENTS, UPDATE_COMMENTS, DESTROY_COMMENT}