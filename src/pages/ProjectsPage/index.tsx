import React from 'react';
import { Container } from '../../components/Container';
import { ProjectCard } from '../../components/ProjectCard';
import { projectsData } from '../../data/projectsData';

import { MainTemplate } from '../../template/MainTemplate';
import { SectionTitle } from '../../components/SectionTitle';

export const ProjectsPage: React.FC = () => {
  return (
    <MainTemplate>
      <Container>
        <SectionTitle>Meus Projetos</SectionTitle>

        {projectsData.length > 0 ? (
          projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>No Projects found.</p>
        )}
      </Container>
    </MainTemplate>
  );
};
