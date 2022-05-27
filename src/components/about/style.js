import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

const Container = styled.section`
  max-width: 80vw;
  margin: 4rem auto 0;
  z-index: 2;
  position: relative;

  a,
  span {
    color: ${({ theme }) => theme.accent};
  }

  div:first-child {
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: ${breakpoints.size.l}) {
    margin-top: 8rem;
    max-width: 45vw;
  }
`;

const Text = styled.p`
  @media only screen and (min-width: ${breakpoints.size.l}) {
    max-width: 80ch;
    text-align: justify;
  }
`;

const Heading = styled.h3`
  margin: 0;
`;

const Item = styled.p`
  margin: 3px 0 10px;
`;

export { Container, Text, Heading, Item };
