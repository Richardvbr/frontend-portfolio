import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

export const Container = styled.section`
  max-width: 80vw;
  margin: 10rem auto 0;
  a,
  span {
    color: ${({ theme }) => theme.accent};
  }

  > div:first-child {
    margin-bottom: 3rem;
  }

  h3 {
    margin: 0;
  }

  @media only screen and (min-width: ${breakpoints.size.l}) {
    max-width: 45vw;
  }
`;

export const Date = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 25px;
  list-style: none;
  max-width: 65ch;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &:before {
    content: '▹';
    position: absolute;
    left: 0px;
    color: ${({ theme }) => theme.accent};
  }
`;
