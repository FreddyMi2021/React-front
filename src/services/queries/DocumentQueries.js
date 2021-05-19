import { gql } from '@apollo/client';

const ALL_DOCUMENTS = gql`
  query {
    allDocuments {
      id
      title
      description
      isNotified
      studentXDocuments {
        id
        pic
        createdAt
        updatedAt
        student {
          id
          name
          nickname
          image
          email
        }
        document {
          id
          title
        }
      }
    }
  }
`;
const PAGINATE_DOCUMENTS = (page, perPage) => {
  return gql`
        query{
            documents(page: ${page}, perPage: ${perPage}){
                id
                title
                description
                isNotified
                studentXDocuments{
                    id
                    pic
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                }
            }
        }
    `;
};

const SHOW_DOCUMENT = (id) => {
  return gql`
        query{
            document(id: ${id}{
                id
                title
                description
                isNotified
                studentXDocuments{
                    id
                    pic
                    student{
                        id
                        name
                        nickname
                        image
                        email
                    }
                }
            }
        }
    `;
};

export { ALL_DOCUMENTS, PAGINATE_DOCUMENTS, SHOW_DOCUMENT };
