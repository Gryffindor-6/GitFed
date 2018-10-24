import React from 'react';
import MyComponent from '../../Newsfeed';

describe('components', () => {
  describe('Newsfeed', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
