import Avatar from 'public/static/images/richard.jpg';

import * as S from './style';

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
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

export default Header;
