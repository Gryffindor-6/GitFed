import React from 'react';
import MyComponent from '../Repo';

import mockRepos from '../../../../state/mocks/repos.json';

describe('components', () => {
  const repo = mockRepos[0];
  describe('Repos', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent {...repo} />);
    });
  });
});
