import React from 'react';
import Project from '../Project';
import Tab from '../ProjectTab';
import useProjects from '../../hooks/useProjects';

const Projects = () => {
  const { projects, activeFilter, setFilter } = useProjects();

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">
            Projects
          </h2>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <Tab
                isActive={activeFilter === ''}
                label="All"
                onClick={() => setFilter('')}
              />
              <Tab
                isActive={activeFilter === 'language:React'}
                label="React"
                onClick={() => setFilter('language:React')}
              />
              <Tab
                isActive={activeFilter === 'language:JavaScript'}
                label="JavaScript"
                onClick={() => setFilter('language:JavaScript')}
              />
              <Tab
                isActive={activeFilter === 'language:Python'}
                label="Python"
                onClick={() => setFilter('language:Python')}
              />
              <Tab
                isActive={activeFilter === 'role:author'}
                label="Authored"
                onClick={() => setFilter('role:author')}
              />
              <Tab
                isActive={activeFilter === 'role:contributor'}
                label="Contributor"
                onClick={() => setFilter('role:contributor')}
              />
            </ul>
          </div>
        </nav>
        {
          projects.map((project) => <Project {...project} />)
        }
      </div>
    </section>
  );
};

export default Projects;
