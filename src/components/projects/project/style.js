import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.headerBackground};
  width: 375px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
  min-height: 335px;
  &:hover {
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.4);
  }
  @media only screen and (min-width: ${breakpoints.size.l}) {
    width: unset;
    max-width: 45vw;
    &:nth-of-type(odd) {
      flex-direction: row;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  @media only screen and (min-width: ${breakpoints.size.l}) {
    height: auto;
    max-width: 50%;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  padding: 35px;
`;

const Languages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -1.25rem;

  p {
    margin: 0.5rem 0.5rem 0.25rem 0;
    padding: 0.3rem 0.4rem;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.white};
  }
`;

const List = styled.ul`
  margin-top: 2rem;
  font-size: 15px;
  list-style: none;
  padding-left: 15px;
`;

const ListItem = styled.li`
  &:before {
    content: '–';
    position: absolute;
    margin-left: -1.1em;
  }

  &:not(last-of-type) {
    margin-bottom: 10px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  a:hover {
    svg {
      fill: ${({ theme }) => theme.accent};
    }
  }
`;

export {
  StyledProject,
  Image,
  ContentWrapper,
  Languages,
  List,
  ListItem,
  Icons,
};
