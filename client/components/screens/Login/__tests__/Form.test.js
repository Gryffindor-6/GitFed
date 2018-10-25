import React from 'react';
import MyComponent from '../Form';

describe('components', () => {
  describe('Form', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent handleSubmit={jest.fn()}>Child</MyComponent>);
    });
  });
});
