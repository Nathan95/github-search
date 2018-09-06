import React, {Component} from 'react';

class App extends Component {
  render(){
    return(
      <div>
        <form>
          <input
             placeholder="Search for..."
             value={this.props.query}
             onChange={this.updateSearch.bind(this)}
           />
            <Results repos={this.props.repos} />
        </form>
      </div>
    );
  }
}

export default SearchField;
