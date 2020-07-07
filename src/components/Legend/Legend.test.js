import React from 'react';
import { render } from '@testing-library/react';
import Legend from './Legend';

describe('Legend', () => {
  const mockDogs = [
    {
      breed: 'chihuahua',
      images: [
        'https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg',
        'https://images.dog.ceo/breeds/chihuahua/n02085620_10131.jpg',
        'https://images.dog.ceo/breeds/chihuahua/n02085620_10621.jpg',
        'https://images.dog.ceo/breeds/chihuahua/n02085620_1073.jpg',
        'https://images.dog.ceo/breeds/chihuahua/n02085620_10976.jpg',
        'https://images.dog.ceo/breeds/chihuahua/n02085620_11140.jpg',
      ],
      dogCount: 6,
    },
    {
      breed: 'collie',
      images: [
        'https://images.dog.ceo/breeds/collie-border/n02106166_1031.jpg',
        'https://images.dog.ceo/breeds/collie-border/n02106166_1032.jpg',
        'https://images.dog.ceo/breeds/collie-border/n02106166_1055.jpg',
        'https://images.dog.ceo/breeds/collie-border/n02106166_1056.jpg',
        'https://images.dog.ceo/breeds/collie-border/n02106166_1059.jpg',
        'https://images.dog.ceo/breeds/collie-border/n02106166_1128.jpg',
        'https://images.dog.ceo/breeds/collie-border/n02106166_1133.jpg',
      ],
      dogCount: 7,
    },
    {
      breed: 'husky',
      images: [
        'https://images.dog.ceo/breeds/husky/20180901_150234.jpg',
        'https://images.dog.ceo/breeds/husky/20180904_185604.jpg',
        'https://images.dog.ceo/breeds/husky/20180924_193829.jpg',
      ],
      dogCount: 3,
    },
  ];
  test('matches snapshot', () => {
    const { container } = render(<Legend data={mockDogs} />);
    expect(container).toMatchSnapshot();
  });
  test('displays a table with color, breed, Image Count and Percentage as headers', () => {
    const { getByTestId, getByText } = render(<Legend data={mockDogs} />);
    expect(getByTestId('legend-table')).toBeInTheDocument();
    expect(getByText('Color')).toBeInTheDocument();
    expect(getByText('Breed')).toBeInTheDocument();
    expect(getByText('Image Count')).toBeInTheDocument();
    expect(getByText('Percentage')).toBeInTheDocument();
  });
});
