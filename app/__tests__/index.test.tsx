import { render } from '@testing-library/react';
import React from 'react';
import Index from '../index';

describe('Index Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Index />);
    expect(getByText('Home screen')).toBeTruthy();
  });

  it('has correct background color', () => {
    const { getByTestId } = render(<Index />);
    const container = getByTestId('container');
    expect(container.props.style).toMatchObject({
      backgroundColor: '#25292e',
    });
  });
}); 