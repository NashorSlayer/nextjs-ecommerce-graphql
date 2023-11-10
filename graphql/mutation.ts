import { gql } from "@apollo/client";


export const login = gql`
  mutation login($input:LoginData!){
  login(input:$input){
    access_token
    user{
      email
      Cart{
        id
      }
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