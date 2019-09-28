import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    name: 'reactman',
    developer: 'bartosdev',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
        <span>This is first static text.</span><br />
        <span>Author is: {this.state.developer}</span>
      </div>
    );
  }
}
