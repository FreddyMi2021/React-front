import { gql } from '@apollo/client';


const CREATE_COURSES = gql`
    mutation CreateCourse(
        $title: String!, 
        $pic: String!, 
        $price: Int!, 
        $discount: Int!
    ){
        createCourse(
            input:{
                title: $title,
                pic: $pic,
                price: $price,
                discount: $discount
            }
        ){
            course{
                title
                pic
                price
                discount
            }
        }
    }

`

const UPDATE_COURSES =  gql`
    mutation UpdateCourse(
        $id: Int!,
        $title: String!, 
        $pic: String!, 
        $price: Int!, 
        $discount: Int!
    ){
        updateCourse(
            input: {
                id: $id,
                title: $title, 
                pic: $pic, 
                price: $price, 
                discount: $discount
            }
        ){
            course{
                id
                title
                pic
                price
                discount
            }
        }
    }
`


const DELETE_COURSES = gql`
    mutation DestroyCourse($id: Int!){
        destroyCourse(
            input: {
                id: $id
            }
        ){
            courses{
                id
                title
                pic
                price
                discount
            }
        }
    }

`

export {CREATE_COURSES, UPDATE_COURSES, DELETE_COURSES}