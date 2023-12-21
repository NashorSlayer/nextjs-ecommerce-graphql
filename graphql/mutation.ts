import { gql } from "@apollo/client";

export const login = gql`
  mutation login($input:LoginData!){
    login(input:$input){
      access_token
      user {
        Cart{
          id
          isEmpty
        }
        Historical{
          id
        }
        id
        email
        firstName
        lastName
      }
    }
  }
`;

export const register = gql`
  mutation register($input:RegisterData!){
register(input:$input){
  email
  password
  Cart{
    id
  }
}
}
`;

export const updateUser = gql`
  mutation updateUser($input:UpdateUser!){
    updateUser(input:$input){
      address
      image
    }
  }
`;