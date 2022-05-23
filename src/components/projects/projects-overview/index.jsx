import Project from '../project';
import { projects } from '../../../data/projects.js';

import { Container, FlexContainer } from './style';

const ProjectsOverview = () => {
  return (
    <Container>
      <h2>Projects</h2>
      <FlexContainer>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </FlexContainer>
    </Container>
  );
};

export default ProjectsOverview;
