import React from 'react';
import { render } from '@testing-library/react';
import Chart from './Chart';

describe('Chart', () => {
  test('matches snapshot', () => {
    const { container } = render(
      <Chart
        dogs={[
          {
            breed: 'husky',
            images: [
              'https://images.dog.ceo/breeds/husky/20180901_150234.jpg',
              'https://images.dog.ceo/breeds/husky/20180904_185604.jpg',
              'https://images.dog.ceo/breeds/husky/20180924_193829.jpg',
            ],
            dogCount: 19,
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
