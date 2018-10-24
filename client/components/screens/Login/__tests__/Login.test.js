import React from 'react';
import MyComponent from '../../Login';

describe('components', () => {
  describe('Login', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
