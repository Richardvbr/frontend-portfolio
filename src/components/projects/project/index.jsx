import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import { Heading } from 'src/components/experience/style';
import {
  StyledProject,
  Image,
  ContentWrapper,
  Languages,
  List,
  ListItem,
  Icons,
} from './style';

const Project = ({ project }) => {
  return (
    <StyledProject>
      <Image src={project.img} alt={project.imgAlt} />
      <ContentWrapper>
        <a href={project.url} target='_blank' rel='noreferrer'>
          <Heading>{project.title}</Heading>
        </a>
        <Languages>
          {project.languages?.map((languages, i) => (
            <p key={i}>{languages}</p>
          ))}
        </Languages>
        <List>
          {project.description?.map((description, i) => (
            <ListItem key={i}>{description}</ListItem>
          ))}
        </List>
        <Icons>
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
        </Icons>
      </ContentWrapper>
    </StyledProject>
  );
};

export default Project;
