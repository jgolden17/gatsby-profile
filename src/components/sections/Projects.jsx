import React from 'react';
import {
  Heading,
  Container,
  Section,
} from 'react-bulma-components/dist';
import Project from '../Project';
import Tabs from '../Tabs';
import useProjectsQuery from '../../hooks/useProjects';

const Projects = () => {
  const projects = useProjectsQuery();

  return (
    <Section>
      <Container style={{ maxWidth: '800px' }}>
        <Heading renderAs="h2">Projects</Heading>
        <Tabs>
          {
            (activeTab) => {
              const projectsByLanuage = activeTab === 'All'
                ? projects
                : projects.filter(
                  (project) => project.language === activeTab
                );

              return projectsByLanuage.map((project) => (
                <Project
                  key={project.id}
                  title={project.title}
                  packageName={project.packageName}
                  description={project.description}
                  url={project.url}
                  language={project.language}
                  role={project.role}
                />
              ));
            }
          }
        </Tabs>
      </Container>
    </Section>
  );
};

export default Projects;
