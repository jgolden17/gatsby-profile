import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function useProjects(filter = '') {
  const [activeFilter, setFilter] = useState(filter);

  const projectsQuery = useStaticQuery(graphql`
    query {
      allProjectsYaml {
        nodes {
          description
          id
          language
          packageName
          role
          title
          url
          image {
            absolutePath
          }
        }
      }
    }
  `);

  const { allProjectsYaml: { nodes } } = projectsQuery;

  let projects = nodes;

  if (activeFilter) {
    const [key, value] = activeFilter.split(':');
    projects = nodes.filter((node) => node[key] === value);
  }

  return {
    projects,
    activeFilter,
    setFilter,
  };
}

export default useProjects;
