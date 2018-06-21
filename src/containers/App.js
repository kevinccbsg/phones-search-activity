import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      phones: [],
    };
  }

  render() {
    return (
      <div>
        <header>
          <h2>Phone searcher</h2>
        </header>
        <PhoneListContainer />
      </div>
    );
  }
}

export default App;
