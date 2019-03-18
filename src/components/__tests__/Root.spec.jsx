import React from 'react';
import renderer from 'react-test-renderer';

import Root from '../Root';

describe('Root', () => {
  it('Root renders correctly', () => {
    const renderedRoot = renderer.create(<Root />).toJSON();
    expect(renderedRoot).toMatchSnapshot();
  });
});
