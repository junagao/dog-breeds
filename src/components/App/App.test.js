import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  const mockBreeds = ['chihuahua', 'collie', 'husky'];
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
    const { container } = render(
      <App
        getBreeds={jest.fn()}
        getImages={jest.fn()}
        breeds={mockBreeds}
        dogs={mockDogs}
        loading={false}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('render an instance of Loading component if loading is true', () => {
    const { getByTestId } = render(
      <App
        getBreeds={jest.fn()}
        getImages={jest.fn()}
        breeds={mockBreeds}
        dogs={mockDogs}
        loading
      />,
    );
    expect(getByTestId('spinner')).toBeInTheDocument();
  });

  test('render an instance of Chart if loading is false', () => {
    const { getByTestId } = render(
      <App
        getBreeds={jest.fn()}
        getImages={jest.fn()}
        breeds={mockBreeds}
        dogs={mockDogs}
        loading={false}
      />,
    );
    expect(getByTestId('pie-chart')).toBeInTheDocument();
  });
});
