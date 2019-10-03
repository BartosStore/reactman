import React from 'react';
import GithubRepository from '../src/githubRepository';
import renderer from 'react-test-renderer';

describe('simple', () => {
  it('renders correctly', () => {
    const component = renderer
    .create(<GithubRepository name={'name'} description={'description'} language={'language'} key={'github-repo-0'} />)
    .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('simple', () => {
  it('should be sane', () => {
    expect(false).not.toBe(true);
  });
});
