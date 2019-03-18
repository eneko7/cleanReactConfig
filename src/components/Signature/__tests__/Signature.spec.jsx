import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Signature from '../index';

describe('App', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature name="IHAR KARPUK" />);
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('span');
    expect(result.props.children).toEqual('IHAR KARPUK');
  });
});
