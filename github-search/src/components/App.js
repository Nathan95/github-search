import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  
  state = {
    repos: [],
    isLoading: false,
    error: null,
    search: ''
  }

  componentDidMount() {
   this.setState({ isLoading: true });
   this.fetchData();
  }

  async fetchData() {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=react`);
      this.setState({ repos: response.data.items, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  onType(event) {
    this.setState({
        search: event.target.value
    })
    console.log(this.state.search)
  }

  render() {
    return (
      <div>
        {this.state.repos.map((repo, index) => <div key={index}><pre>{JSON.stringify(repo)}</pre></div>)}
      </div>
    );
  }

}

export default App;
