import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $workspaceInviteHash: String
    $captchaToken: String
  ) {
    signUp(
      email: $email
      password: $password
      workspaceInviteHash: $workspaceInviteHash
      captchaToken: $captchaToken
    ) {
      loginToken {
        ...AuthTokenFragment
      }
    }
  }
`;
