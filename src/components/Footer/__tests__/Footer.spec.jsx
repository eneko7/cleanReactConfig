import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Footer from '../index';

describe('Footer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
