import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.headerBackground};
  min-height: 335px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 35px;
  h3 {
    margin: 0;
  }
`;

export const Tags = styled.div`
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
