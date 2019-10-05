import { Component } from 'react';
import GithubRepository from './githubRepository';
import './App.css';

export default class App extends Component {
  state = {
    app: 'Reactman',
    page: 'Profile',
    developer: 'Miroslav Bartoš',
    job: 'Software Developer',
    githubLogin: '',
    githubAccount: 'https://github.com/BartosStore/',
    githubUrl: 'https://api.github.com/users/BartosStore',
    githubReposUrl: '',
    githubRepos: [{
      name: '',
      description: '',
      language: '',
    }],
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
            });
          });
      });
  }

  render() {
    const githubRepoComponents = [];
    this.state.githubRepos.forEach((repo, index) => {
      if (repo.name !== '') {
        /* eslint-disable */
        githubRepoComponents.push(<GithubRepository name={repo.name} description={repo.description} language={repo.language} key={'github-repo-'+index} />);
        /* eslint-enable */
      }
    });
    return (
      <div className="App">
        <div className="cover">
          <h1>Welcome to {this.state.page} page</h1>
          <h4>...of {this.state.app} application</h4>
          <div>Developer: {this.state.developer}</div>
          <div>Craftsmanship: {this.state.job}</div>
          <h2>{this.state.githubLogin}</h2>
          <div><a href={this.state.githubAccount}>GitHub account</a></div>
          <h2>Public Github repositories [{this.state.githubRepos.length}]</h2>
          {githubRepoComponents}
        </div>
        <div className="footer">{this.state.footer}</div>
      </div>
    );
  }
}
