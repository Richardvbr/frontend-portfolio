import { useContext } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import { ThemePreferenceContext } from 'src/pages/_app';

import { Icons } from 'src/components/projects/project/style';

import * as S from './style';

const Footer = () => {
  const { currentTheme } = useContext(ThemePreferenceContext);

  return (
    <S.Footer>
      <S.Container>
        <Icons>
          <a href='mailto:richardvanbrunschot@gmail.com'>
            <AiOutlineMail
              color={currentTheme === 'dark' ? '#d1d5e8' : '#222'}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/rbrunschot/'
            target='_blank'
            rel='noreferrer'
          >
            <BsLinkedin color={currentTheme === 'dark' ? '#d1d5e8' : '#222'} />
          </a>
          <a
            href='https://github.com/Richardvbr'
            target='_blank'
            rel='noreferrer'
          >
            <BsGithub color={currentTheme === 'dark' ? '#d1d5e8' : '#222'} />
          </a>
        </Icons>
        <div>
          <p>© 2022 Richard van Brunschot</p>
        </div>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
