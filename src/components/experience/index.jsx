import * as S from './style';

const Experience = () => {
  return (
    <S.Container>
      <div>
        <h2>Experience</h2>
        <h3>
          Front-end Developer at{' '}
          <span>
            <a href='https://trifork.com/' target='_blank' rel='noreferrer'>
              Trifork
            </a>
          </span>
        </h3>
        <S.Date>April 2021 - present</S.Date>
        <ul>
          <S.ListItem>
            Developing modern and responsive front-end solutions for web
            applications using the latest technologies
          </S.ListItem>
          <S.ListItem>
            Working with a variety of different languages, frameworks, and
            content management systems such as JavaScript, TypeScript, React,
            Next.js, GraphQL, SCSS, and DatoCMS
          </S.ListItem>
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <h3>B.A. in Computer Animation/VFX at Netherlands Film Academy</h3>
        <S.Date>2015 - 2019</S.Date>
        <ul>
          <S.ListItem>
            Specialized in creating high-end 3D models for realtime applications
            such as games and virtual reality
          </S.ListItem>
          <S.ListItem>
            For my graduation project, a 3D VR experience set in the trenches of
            WW1, I was responsible for creating the digital world.
            <br />
            Tasks: level design (Unity - HTC Vive), 3D modeling, texturing,
            animation, lighting
          </S.ListItem>
        </ul>
      </div>
    </S.Container>
  );
};

export default Experience;
