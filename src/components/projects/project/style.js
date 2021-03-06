import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

export const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.headerBackground};
  min-height: 335px;
  width: 375px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
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

export const Image = styled.img`
  width: 100%;
  @media only screen and (min-width: ${breakpoints.size.l}) {
    height: auto;
    max-width: 50%;
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px;

  h3 {
    margin: 0 0 10px;
  }

  @media only screen and (min-width: ${breakpoints.size.l}) {
    padding: 35px;
  }
`;

export const Languages = styled.div`
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

export const List = styled.ul`
  margin-top: 2rem;
  font-size: 15px;
  list-style: none;
  padding-left: 15px;
`;

export const ListItem = styled.li`
  &:before {
    content: '▹';
    position: absolute;
    margin-left: -1.1em;
    color: ${({ theme }) => theme.accent};
  }

  &:not(last-of-type) {
    margin-bottom: 10px;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  @media (hover: hover) {
    a:hover svg {
      fill: ${({ theme }) => theme.accent};
    }
  }
`;
