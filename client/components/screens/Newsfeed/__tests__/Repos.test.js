import React from 'react';
import MyComponent from '../Repos';

import mockRepos from '../../../../state/mocks/repos.json';

describe('components', () => {
  describe('Repos', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent repos={mockRepos} />);
    });
  });
});
