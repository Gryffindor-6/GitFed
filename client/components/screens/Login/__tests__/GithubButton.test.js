import React from 'react';
import MyComponent from '../GithubButton';

describe('components', () => {
  describe('GithubButton', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent handleClick={jest.fn()} />);
    });
  });
});
