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

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media only screen and (min-width: ${breakpoints.size.l}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  &:before {
    content: attr(data-header);
    font-size: 110%;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textColor};
  }
`;

const ListItem = styled.li`
  list-style: none;
  padding: 3px 0;
  &:first-child {
    padding-top: 10px;
  }
`;

export { Container, Text, ListContainer, List, ListItem };
