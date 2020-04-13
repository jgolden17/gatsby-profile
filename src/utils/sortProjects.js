const sortProjects = (projects) => projects.sort((a, b) => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }

  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }

  return 0;
});

export default sortProjects;
