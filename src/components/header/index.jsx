import Link from 'next/link';

import Logo from 'public/static/images/logo.svg';
import Avatar from 'public/static/images/richard.jpg';

import ThemeToggle from 'src/components/theme-toggle';

import * as S from './style';

const Navigation = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Nav>
          <Link href='/'>
            <a>
              <Logo fill='#119d73' />
            </a>
          </Link>
          <div>
            <Link href={'/blog'} passHref>
              <a>Blog</a>
            </Link>
            <ThemeToggle />
          </div>
        </S.Nav>
        <S.ContentWrapper>
          <S.Image src={Avatar.src} alt='Richard Avatar' />
          <S.Heading>Hey, I&apos;m Richard!</S.Heading>
          <S.Text>
            I&apos;m a front-end developer focused on building modern and
            responsive web applications
          </S.Text>
        </S.ContentWrapper>
      </S.Wrapper>
    </S.Header>
  );
};

export default Navigation;
