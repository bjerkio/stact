import gql from 'graphql-tag';

export const LIST_COUNTRIES_QUERY = gql`
  query listCountries {
    countries {
      code
      name
      native
      phone
      continent {
        code
        name
      }
      currency
      languages {
        code
        name
        native
        rtl
      }
      emoji
    }
  }
`;

export const GET_COUNTRY_QUERY = gql`
  query getCountry($code: String!) {
    country(code: $code) {
      code
      name
      native
      phone
      continent {
        code
        name
      }
      currency
      languages {
        code
        name
        native
        rtl
      }
      emoji
    }
  }
`;
