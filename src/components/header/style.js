import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

const Header = styled.header`
  width: 100vw;
  background: ${({ theme }) => theme.headerBackground};
`;

const Wrapper = styled.section`
  max-width: 80vw;
  margin: 0 auto;
  padding: 1rem 0 4rem;
  @media only screen and (min-width: ${breakpoints.size.l}) {
    max-width: 45vw;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 20px;
    svg {
      vertical-align: middle;
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-top: 2.5rem;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 145px;
  height: 145px;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.25rem;
  opacity: 0.8;
`;

export { Header, Wrapper, Nav, ContentWrapper, Image, Heading, Text };
