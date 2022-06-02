import * as S from './style';

const About = () => {
  return (
    <S.Container>
      <div>
        <h2>Background</h2>
        <S.Text>
          Hi, I&apos;m Richard van Brunschot. Originally from Eindhoven, NL, but
          I recently moved to Lommel, BE. While studying Computer Animation/VFX
          at the Netherlands Film Academy, I specialized in creating high-end 3D
          models for games and virtual reality.
        </S.Text>
        <S.Text>
          During my graduation year, I realized that I wanted to focus more on
          coding and software development. This led me to pursue front-end
          development, which turned out to be the perfect fit for me.
        </S.Text>
        <S.Text>
          I&apos;m currently working as a front-end developer at {''}
          <a href='https://trifork.com/' target='_blank' rel='noreferrer'>
            Trifork
          </a>
          , where I develop responsive user interfaces using modern technologies
          such as React, Next.js, TypeScript, GraphQL and SCSS.
        </S.Text>
      </div>
      <div>
        <h2>Languages & tools</h2>
        <h3>Languages</h3>
        <S.Item>JavaScript, TypeScript, SCSS/CSS, HTML5</S.Item>
        <h3>Frameworks/libraries</h3>
        <S.Item>React, Next.js, Gatsby</S.Item>
        <h3>Other</h3>
        <S.Item>
          GraphQL, DatoCMS, Yarn/npm, styled-components, Supabase, Scrum
        </S.Item>
        <h3>Tools</h3>
        <S.Item>VS Code, Git, Azure DevOps, Postman, Adobe XD</S.Item>
      </div>
    </S.Container>
  );
};

export default About;
