import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

export const Container = styled.section`
  max-width: 80vw;
  margin: 4rem auto 0;
  z-index: 2;
  position: relative;

  a,
  span {
    color: ${({ theme }) => theme.accent};
  }

  h3 {
    margin: 0;
  }

  div:first-child {
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: ${breakpoints.size.l}) {
    margin-top: 6rem;
    max-width: 45vw;
  }
`;

export const Text = styled.p`
  @media only screen and (min-width: ${breakpoints.size.l}) {
    max-width: 80ch;
    text-align: justify;
  }
`;

export const Item = styled.p`
  margin: 3px 0 10px;
`;
