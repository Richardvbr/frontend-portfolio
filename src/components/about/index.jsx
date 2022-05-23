import { Container, Text, ListContainer, List, ListItem } from './style';

const About = () => {
  return (
    <Container>
      <div>
        <h2>Background</h2>
        <Text>
          Hi, I&apos;m Richard van Brunschot. Originally from Eindhoven, NL, but
          I recently moved to Lommel, BE. While studying Computer Animation/VFX
          at the Netherlands Film Academy, I specialized in creating high-end 3D
          models for games and virtual reality.
        </Text>
        <Text>
          During my graduation year, I realized that I wanted to focus more on
          coding and software development. This led me to pursue front-end
          development, which turned out to be the perfect fit for me as it
          combines software development with visuals.
        </Text>
        <Text>
          I&apos;m currently working as a front-end engineer at {''}
          <a href='https://trifork.com/' target='_blank' rel='noreferrer'>
            Trifork
          </a>
          , where I develop responsive user interfaces using modern technologies
          such as React, Next.js, TypeScript, GraphQL and SCSS.
        </Text>
      </div>
      <div>
        <h2>Languages & tools</h2>
        <ListContainer>
          <List data-header='languages'>
            <ListItem>JavaScript (ES6)</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>SCSS/CSS</ListItem>
            <ListItem>HTML</ListItem>
          </List>
          <List data-header='frameworks'>
            <ListItem>React</ListItem>
            <ListItem>Next.js</ListItem>
            <ListItem>Gatsby</ListItem>
          </List>
          <List data-header='other'>
            <ListItem>GraphQL</ListItem>
            <ListItem>Yarn/npm</ListItem>
            <ListItem>Tailwind CSS</ListItem>
          </List>
          <List data-header='tools'>
            <ListItem>VS Code</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>Postman</ListItem>
            <ListItem>Adobe XD</ListItem>
          </List>
        </ListContainer>
      </div>
    </Container>
  );
};

export default About;
