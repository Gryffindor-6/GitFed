import React from 'react';
import MyComponent from '../Signup';

describe('components', () => {
  describe('Signup', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
