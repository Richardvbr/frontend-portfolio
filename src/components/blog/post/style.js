import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

export const Container = styled.section`
  max-width: 80vw;
  margin: 4rem auto 0;

  @media only screen and (min-width: ${breakpoints.size.l}) {
    margin-top: 6rem;
    max-width: 45vw;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    margin-top: 2.25rem;
  }

  p > a {
    color: ${({ theme }) => theme.accent};
    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  ul {
    list-style: none;

    li {
      padding: 5px 0;
      &:before {
        content: '▹';
        position: absolute;
        margin-left: -1.1em;
        color: ${({ theme }) => theme.accent};
      }
    }
  }
`;
