import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {

  state = {
    repos: [],
    isLoading: false,
    error: null,
    query: ''
  }

  componentDidMount() {
   this.setState({ isLoading: true });
   this.fetchData();
  }

  async fetchData() {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=vue`);
      this.setState({ repos: response.data.items, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  updateSearch(event){
    this.setState({query: event.target.value})
  }

  render() {

    const Results = (props) => {
      let filteredRepos = props.repos.filter(
        (repo) => {
          return repo.name.indexOf(this.state.query)
        }
      );
      const options = filteredRepos.map(r => (
        <li key={r.id}>
          {r.name}
        </li>
      ))
      return <ul>{options}</ul>
    }

    return (
      <div>
      <form>
      <input
         placeholder="Search for..."
         value={this.state.query}
         onChange={this.updateSearch.bind(this)}
       />
        <Results repos={this.state.repos} />
      </form>

      </div>
    );
  }

}

export default App;
