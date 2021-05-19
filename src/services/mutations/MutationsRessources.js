import {gql} from '@apollo/client';

const CREATE_RESSOURCE = gql`
    mutation CreateRessource(
        $link: String!,
        $lessonId: Int!
    ){
        createRessource(
            input: {
                link: $link,
                lessonId: $lessonId
            }
        ){
            ressource{
                id
                link
                lesson{
                    id
                }
            }
        }
    }
`

const UPDATE_RESSOURCE = gql`
    mutation UpdateRessource(
        $id: Int!,
        $link: String!,
        $lessonId: Int!
    ){
        updateRessource(
            input: {
                id: $id,
                link: $link,
                lessonId: $lessonId
            }
        ){
            ressource{
                id
                link
                lesson{
                    id
                }
            }
        }
    }
`

const DESTROY_RESSOURCE = gql`
    mutation DestroyRessource($id: Int!){
        destroyRessource(input: {
            id: $id
        }){
            ressources{
                id
            }
        }
    }
`

export {CREATE_RESSOURCE, UPDATE_RESSOURCE, DESTROY_RESSOURCE}