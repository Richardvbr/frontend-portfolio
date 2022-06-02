import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

import * as S from './style';

const Project = ({ project }) => {
  return (
    <S.StyledProject>
      <S.Image src={project.img} alt={project.imgAlt} />
      <S.ContentWrapper>
        <a href={project.url} target='_blank' rel='noreferrer'>
          <h3>{project.title}</h3>
        </a>
        <S.Languages>
          {project.languages?.map((language, i) => (
            <p key={i}>{language}</p>
          ))}
        </S.Languages>
        <S.List>
          {project.description?.map((description, i) => (
            <S.ListItem key={i}>{description}</S.ListItem>
          ))}
        </S.List>
        <S.Icons>
          {project.github && (
            <a href={project.github} target='_blank' rel='noreferrer'>
              <BsGithub size={25} />
            </a>
          )}

          {project.url && (
            <a href={project.url} target='_blank' rel='noreferrer'>
              <BsBoxArrowUpRight size={25} />
            </a>
          )}
        </S.Icons>
      </S.ContentWrapper>
    </S.StyledProject>
  );
};

export default Project;
