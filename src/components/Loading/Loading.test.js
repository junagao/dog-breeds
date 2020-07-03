import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  test('matches snapshot', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  test('should render the loading spinner correctly with one SpinnerDiv element', () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId('spinner')).toBeInTheDocument();
  });
});
