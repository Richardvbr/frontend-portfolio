import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

export const Container = styled.section`
  max-width: 80vw;
  margin: 2rem auto 0;

  @media only screen and (min-width: ${breakpoints.size.l}) {
    max-width: 45vw;
  }

  .back-link {
    svg {
      vertical-align: middle;
      margin-bottom: 2px;
      margin-right: 10px;
    }
    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.accent};
      }
    }
  }

  h1 {
    font-size: 2.5rem;
    margin: 2rem 0;
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
      position: relative;
      padding: 5px 0 5px 25px;
      list-style: none;
      &:before {
        content: '▹';
        position: absolute;
        left: 0px;
        color: ${({ theme }) => theme.accent};
      }
    }
  }
`;
