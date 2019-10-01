import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    name: 'Reactman',
    developer: 'Miroslav Bartoš',
    job: 'Software Developer',
    githubLogin: '',
    githubUrl: '',
    githubReposUrl: '',
    githubPublicRepos: '',
    footer: 'This is page footer.',
  };

  componentDidMount() {
    fetch('https://api.github.com/users/BartosStore')
      .then(result => result.json()).then((data) => {
        // console.log(data);
        this.setState({
          githubLogin: data.login,
          githubUrl: data.url,
          githubReposUrl: data.repos_url,
          githubPublicRepos: data.public_repos,
        });
      });
  }

  render() {
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
          <div>{this.state.githubLogin}</div>
          <div>{this.state.githubUrl}</div>
          <div>{this.state.githubReposUrl}</div>
          <div>Number of public repos: {this.state.githubPublicRepos}</div>
          <div>This is React library playground.</div>
        </div>
        <div className="footer">{this.state.footer}</div>
      </div>
    );
  }
}
