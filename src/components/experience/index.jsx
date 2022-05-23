import { Container, Heading, Date, ListItem } from './style';

const Experience = () => {
  return (
    <Container>
      <div>
        <h2>Experience</h2>
        <Heading>
          Front-end Engineer at{' '}
          <span>
            <a href='https://trifork.com/' target='_blank' rel='noreferrer'>
              Trifork
            </a>
          </span>
        </Heading>
        <Date>April 2021 - present</Date>
        <ul>
          <ListItem>
            Developing modern and responsive front-end solutions for web
            applications using the latest technologies
          </ListItem>
          <ListItem>
            Working with a variety of different languages, frameworks, and
            content management systems such as JavaScript, TypeScript, React,
            Next.js, GraphQL, SCSS, and DatoCMS
          </ListItem>
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <Heading>
          B.A. in Computer Animation/VFX at Netherlands Film Academy
        </Heading>
        <Date>2015 - 2019</Date>
        <ul>
          <ListItem>
            Specialized in creating high-end 3D models for realtime applications
            such as games and virtual reality
          </ListItem>
          <ListItem>
            For my graduation project, a 3D VR experience set in the trenches of
            WW1, I was responsible for creating the digital world.
            <br />
            Tasks: level design (Unity - HTC Vive), 3D modeling, texturing,
            animation, lighting
          </ListItem>
        </ul>
      </div>
    </Container>
  );
};

export default Experience;
