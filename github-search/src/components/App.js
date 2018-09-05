import React, { Component } from 'react';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      repos: [],
      isLoading: false,
      error: null,
      search: ''
    }
  }

  componentDidMount() {
   this.setState({ isLoading: true });

   fetch(`https://api.github.com/search/repositories?q=react`)
     .then(response => response.json())
     .then(data => this.setState({ repos: data, isLoading: false }))
     .catch(error => this.setState({ error, isLoading: false }));

 }

  fetchData(){

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
          {
             this.state.repos.items.map((repo, index) => {
               return (
                  <div key={index}>{repo}</div>
              );
            })
          }
        </div>
    );
  }

}

export default App;
