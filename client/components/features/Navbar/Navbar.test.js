import React from 'react';
import MyComponent from '../Navbar';

describe('components', () => {
  describe('Navbar', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
