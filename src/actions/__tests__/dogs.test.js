import {
  GET_BREEDS_REQUEST,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_ERROR,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
} from 'actions/types';
import {
  getBreedsRequest,
  getBreedsSuccess,
  getBreedsError,
  getImagesRequest,
  getImagesSuccess,
  getImagesError,
} from 'actions/dogs';

describe('dogs actions', () => {
  describe('getBreedsRequest', () => {
    it('has the correct type', () => {
      const action = getBreedsRequest();
      expect(action.type).toEqual(GET_BREEDS_REQUEST);
    });
  });

  describe('getBreedsSuccess', () => {
    it('has the correct type', () => {
      const action = getBreedsSuccess();
      expect(action.type).toEqual(GET_BREEDS_SUCCESS);
    });

    it('had the correct payload', () => {
      const mockBreeds = ['chihuahua', 'collie', 'husky'];
      const action = getBreedsSuccess(mockBreeds);
      expect(action.breeds).toEqual(mockBreeds);
    });
  });

  describe('getBreedsError', () => {
    it('has the correct type', () => {
      const action = getBreedsError();
      expect(action.type).toEqual(GET_BREEDS_ERROR);
    });

    it('had the correct payload', () => {
      const action = getBreedsError('Unexpected ERROR');
      expect(action.error).toEqual('Unexpected ERROR');
    });
  });

  describe('getImagesRequest', () => {
    it('has the correct type', () => {
      const action = getImagesRequest();
      expect(action.type).toEqual(GET_IMAGES_REQUEST);
    });
  });

  describe('getImagesSuccess', () => {
    it('has the correct type', () => {
      const action = getImagesSuccess();
      expect(action.type).toEqual(GET_IMAGES_SUCCESS);
    });

    it('had the correct payload', () => {
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
      const action = getImagesSuccess(mockDogs);
      expect(action.dogs).toEqual(mockDogs);
    });
  });

  describe('getImagesError', () => {
    it('has the correct type', () => {
      const action = getImagesError();
      expect(action.type).toEqual(GET_IMAGES_ERROR);
    });

    it('had the correct payload', () => {
      const action = getImagesError('Unexpected ERROR');
      expect(action.error).toEqual('Unexpected ERROR');
    });
  });
});
