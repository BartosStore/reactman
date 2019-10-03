import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    name: 'Reactman',
    developer: 'Miroslav Bartoš',
    job: 'Software Developer',
    githubLogin: '',
    githubUrl: 'https://api.github.com/users/BartosStore',
    githubReposUrl: '',
    githubRepos: [{
      name: '',
    }],
    output: '',
    footer: 'This is page footer.',
  };

  componentDidMount() {
    fetch(this.state.githubUrl)
      .then(result => result.json()).then((data) => {
        this.setState({
          githubLogin: data.login,
          githubUrl: data.url,
          githubReposUrl: data.repos_url,
        });
        fetch(this.state.githubReposUrl)
          .then(result => result.json()).then((repos) => {
            this.setState({
              githubRepos: repos,
              output: repos[0].name,
            });
          });
      });
  }

  render() {
    const githubRepoComponent = <div>First repository: {this.state.githubRepos[0].name}</div>;
    return (
      <div className="App">
        <div className="bar">
          <div className="logo">MBartos</div>
          <div className="navigation">Home Articles Contact</div>
        </div>
        <div className="cover">
          <h1>Welcome to {this.state.name} application</h1>
          <div>{this.state.developer}</div>
          <div>{this.state.job}</div>
          <div>This is React library playground.</div>
          <div>{this.state.githubLogin}</div>
          <div>{this.state.githubUrl}</div>
          <div>{this.state.githubReposUrl}</div>
          <div>{this.state.githubRepos.length}</div>
          {githubRepoComponent}
          <div>{this.state.output}</div>
        </div>
        <div className="footer">{this.state.footer}</div>
      </div>
    );
  }
}
