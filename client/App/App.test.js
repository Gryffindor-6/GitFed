import React from 'react';
import MyComponent from '../App';

describe('components', () => {
  describe('App', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
