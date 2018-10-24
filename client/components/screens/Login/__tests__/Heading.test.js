import React from 'react';
import MyComponent from '../Heading';

describe('components', () => {
  describe('Heading', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
