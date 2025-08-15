import { gql } from '@apollo/client';

// Query to fetch characters
export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
      }
    }
  }
`;

// Query to fetch episodes
export const GET_EPISODES = gql`
  query GetEpisodes($page: Int!) {
    episodes(page: $page) {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;
