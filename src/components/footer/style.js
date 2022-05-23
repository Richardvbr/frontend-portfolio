import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

const StyledFooter = styled.footer`
  width: 100vw;
  margin-top: 8rem;
  box-shadow: rgb(0 0 0 / 10%) 0px -2px 4px 0px;
`;

const Container = styled.div`
  max-width: 80vw;
  margin: 8rem auto 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 20px;
    margin-bottom: 10px;
    svg {
      vertical-align: middle;
    }
  }

  p {
    font-size: 14px;
    margin: 0;
  }

  @media only screen and (min-width: ${breakpoints.size.m}) {
    max-width: 45vw;
    flex-direction: row-reverse;
    a {
      margin-bottom: unset;
    }
  }
`;

export { StyledFooter, Container };
