import React, { Component } from 'react';
import Head from './Head/Head.js';
import Bar from './Bar/Bar.js';
import Body from './Body/Body.js';

import './App.css';

class App extends Component {

  state = {
    tags: [
      {id: '0', tag: 'Blog', status: 'summary'},
      {id: '1', tag: 'Projects', status: 'summary'},
      {id: '2', tag: 'Code Sheets', status: 'summary'}
    ]
  }

  // Logo click handler
  logoClickHandler = () => {
    console.log("Logo clicked");
    const tags = this.state.tags.map(
      e => { return ({id: e.id, tag: e.tag, status: 'summary'});}
    );

    // Assign the list to state
    this.setState({ tags: tags})
  }

  // Button handler
  barClickHandler = (index) => {
    console.log('Bar was clicked ' + index);

    // Hide all
    const tags = this.state.tags.map(
      e => { return ({id: e.id, tag: e.tag, status: 'hide'});}
    );

    // Find index
    const eIndex = index;
    console.log(eIndex);

    // Create a copy
    const tag = { ...this.state.tags[eIndex] }

    // Update the copy
    tag.status = 'full';

    // Replace the element in the updated list
    tags[eIndex] = tag;

    // Assign the list to state
    this.setState({ tags: tags})

  }

  render() {
    return (
      <div className="App">
        <Head click={this.logoClickHandler} />
        <Bar tags={this.state.tags}
        click={(index) => this.barClickHandler(index)}
        />
        <Body tags={this.state.tags} />
      </div>
    );
  }
}

export default App;
