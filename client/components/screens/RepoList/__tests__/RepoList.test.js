import React from 'react';
import MyComponent from '../../RepoList';

describe('components', () => {
  describe('RepoList', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
