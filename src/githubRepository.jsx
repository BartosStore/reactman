import { Component } from 'react';
import PropTypes from 'prop-types';

export default class GithubRepository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      language: props.language,
    };
  }

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <div>Description: {this.state.description}</div>
        <div>Language: {this.state.language}</div>
      </div>
    );
  }
}

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
};

GithubRepository.propTypes = propTypes;
GithubRepository.defaultProps = propTypes;
