import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../index';
import Footer from '../../Footer/index';

describe('App', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual(<Footer />);
  });
});
