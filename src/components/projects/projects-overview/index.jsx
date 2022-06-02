import Project from '../project';
import { projects } from '../../../data/projects.js';

import * as S from './style';

const ProjectsOverview = () => {
  return (
    <S.Container>
      <h2>Projects</h2>
      <S.FlexContainer>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </S.FlexContainer>
    </S.Container>
  );
};

export default ProjectsOverview;
