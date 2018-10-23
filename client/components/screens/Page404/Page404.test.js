import React from 'react';
import MyComponent from '../Page404';

describe('components', () => {
  describe('Page404', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
