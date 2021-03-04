import React from 'react';
import Project from '../Project';
import useProjectsQuery from '../../hooks/useProjects';

const Projects = () => {
  const projects = useProjectsQuery();

  return (
    <section className="section has-background-white-bis">
      <div className="container is-max-desktop">
        <h2 className="title has-text-centered-mobile">
          Some of the code I&apos;ve been working on
        </h2>
        <div className="columns is-multiline is-desktop">
          {projects.map((project) => (
            <div className="column is-half-desktop">
              <Project
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                packageName={project.packageName}
                description={project.description}
                url={project.url}
                language={project.language}
                role={project.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
