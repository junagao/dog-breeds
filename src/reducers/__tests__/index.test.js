import {
  GET_BREEDS_REQUEST,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_ERROR,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
} from 'actions/types';
import reducer from '../index';

describe('reducer', () => {
  const initialState = {
    breeds: [],
    dogs: [],
    loading: false,
    error: '',
  };

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

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_BREEDS_REQUEST', () => {
    const action = {
      type: GET_BREEDS_REQUEST,
    };

    const expectedState = {
      ...initialState,
      loading: true,
      error: '',
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_BREEDS_SUCCESS', () => {
    const action = {
      type: GET_BREEDS_SUCCESS,
      breeds: mockBreeds,
    };

    const expectedState = {
      ...initialState,
      breeds: mockBreeds,
      loading: false,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_BREEDS_ERROR', () => {
    const action = {
      type: GET_BREEDS_ERROR,
      error: 'Error Fetching Breeds!',
    };

    const expectedState = {
      ...initialState,
      loading: false,
      error: 'Error Fetching Breeds!',
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_IMAGES_REQUEST', () => {
    const action = {
      type: GET_IMAGES_REQUEST,
    };

    const expectedState = {
      ...initialState,
      loading: true,
      error: '',
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_IMAGES_SUCCESS', () => {
    const action = {
      type: GET_IMAGES_SUCCESS,
      dogs: mockDogs,
    };

    const expectedState = {
      ...initialState,
      dogs: mockDogs,
      loading: false,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_IMAGES_ERROR', () => {
    const action = {
      type: GET_IMAGES_ERROR,
      error: 'Error Fetching Dog Images!',
    };

    const expectedState = {
      ...initialState,
      loading: false,
      error: 'Error Fetching Dog Images!',
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
