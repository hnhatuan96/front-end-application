---
to: src/components/<%= name %>/index.test.jsx
---
import React from 'react';
import ReactDOM from 'react-dom';

import <%= name %> from '.';

describe('<<%= name %> />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<<%= name %> />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
