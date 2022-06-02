import breakpoints from 'src/styles/breakpoints';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.headerBackground};
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 35px 35px;
  h3 {
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  min-height: 225px;
  width: 100%;
  @media only screen and (min-width: 575px) {
    min-height: 325px;
  }
  @media only screen and (min-width: ${breakpoints.size.m}) {
    min-height: 225px;
  }
`;

export const Date = styled.span`
  display: block;
  margin: 5px 0 10px;
  font-size: 0.8rem;
`;

export const Tags = styled.div`
  margin-top: auto;
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
