import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

export const Header = styled.header`
  width: 100vw;
  background: ${({ theme }) => theme.headerBackground};
`;

export const Wrapper = styled.section`
  max-width: 80vw;
  margin: 0 auto;
  padding: 1rem 0;
  @media only screen and (min-width: ${breakpoints.size.l}) {
    max-width: 45vw;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    &:first-of-type a {
      margin-right: 20px;
      margin-bottom: 3px;
    }
  }
`;
