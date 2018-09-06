import React from 'react';

const Results = (props) => {
  let filteredRepos = props.repos.filter(
    (repo) => {
      return repo.name.indexOf(this.state.search)
    }
  );
  const options = filteredRepos.map(r => (
    <li key={r.id}>
      {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Results;
