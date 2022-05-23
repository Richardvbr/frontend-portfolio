import Link from 'next/link';
import { useContext } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { ThemePreferenceContext } from 'src/pages/_app';

import ThemeToggle from '../theme-toggle';

import {
  Header,
  Wrapper,
  Nav,
  ContentWrapper,
  Image,
  Heading,
  Text,
} from './style';
import Logo from 'public/static/images/logo.svg';
import Avatar from 'public/static/images/richard.jpg';
import { Icons } from '../projects/project/style';

const Navigation = () => {
  const { currentTheme } = useContext(ThemePreferenceContext);

  return (
    <Header>
      <Wrapper>
        <Nav>
          <Link href='/'>
            <a>
              <Logo fill='#119d73' />
            </a>
          </Link>
          <Icons>
            <ThemeToggle />
            <a
              href='https://www.linkedin.com/in/rbrunschot/'
              target='_blank'
              rel='noreferrer'
            >
              <BsLinkedin
                color={currentTheme === 'dark' ? '#d1d5e8' : '#222'}
              />
            </a>
            <a
              href='https://github.com/Richardvbr'
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub color={currentTheme === 'dark' ? '#d1d5e8' : '#222'} />
            </a>
          </Icons>
        </Nav>
        <ContentWrapper>
          <Image src={Avatar.src} alt='Richard Avatar' />
          <Heading>Hey, I&apos;m Richard!</Heading>
          <Text>
            I&apos;m a front-end engineer focused on building modern and
            responsive web applications
          </Text>
        </ContentWrapper>
      </Wrapper>
    </Header>
  );
};

export default Navigation;
