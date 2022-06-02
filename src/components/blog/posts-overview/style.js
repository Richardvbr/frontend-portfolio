import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

export const Container = styled.section`
  max-width: 80vw;
  margin: 4rem auto 0;
  display: grid;
  gap: 35px;

  @media only screen and (min-width: ${breakpoints.size.m}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (min-width: ${breakpoints.size.l}) {
    margin-top: 6rem;
    max-width: 45vw;
  }
  @media only screen and (min-width: ${breakpoints.size.xl}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Heading = styled.h3`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  opacity: 0.8;
  margin: 0;
`;
