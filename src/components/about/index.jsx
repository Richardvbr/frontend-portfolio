import { Container, Text, Heading, Item } from './style';

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
          development, which turned out to be the perfect fit for me.
        </Text>
        <Text>
          I&apos;m currently working as a front-end engineer at {''}
          <a href="https://trifork.com/" target="_blank" rel="noreferrer">
            Trifork
          </a>
          , where I develop responsive user interfaces using modern technologies
          such as React, Next.js, TypeScript, GraphQL and SCSS.
        </Text>
      </div>
      <div>
        <h2>Languages & tools</h2>
        <Heading>Languages</Heading>
        <Item>JavaScript, TypeScript, SCSS/CSS, HTML5</Item>
        <Heading>Frameworks/libraries</Heading>
        <Item>React, Next.js, Gatsby</Item>
        <Heading>Other</Heading>
        <Item>
          GraphQL, DatoCMS, Yarn/npm, styled-components, Supabase, Scrum
        </Item>
        <Heading>Tools</Heading>
        <Item>VS Code, Git, Azure DevOps, Postman, Adobe XD</Item>
      </div>
    </Container>
  );
};

export default About;
