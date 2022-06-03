import Link from 'next/link';

import Logo from 'public/static/images/logo.png';

import ThemeToggle from 'src/components/theme-toggle';

import * as S from './style';

const Navbar = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Nav>
          <Link href='/'>
            <a>
              <img src='/static/images/logo.png' />
            </a>
          </Link>
          <div>
            <Link href={'/blog'} passHref>
              <a>Blog</a>
            </Link>
            <ThemeToggle />
          </div>
        </S.Nav>
      </S.Wrapper>
    </S.Header>
  );
};

export default Navbar;
