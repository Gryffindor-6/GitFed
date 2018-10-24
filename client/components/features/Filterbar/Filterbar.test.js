import React from 'react';
import MyComponent from '../Filterbar';

describe('components', () => {
  describe('Filterbar', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
