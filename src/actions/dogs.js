import api from 'api';
import {
  GET_BREEDS_REQUEST,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_ERROR,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
} from './types';

export const getBreedsRequest = () => ({
  type: GET_BREEDS_REQUEST,
});

export const getBreedsSuccess = (breeds) => ({
  type: GET_BREEDS_SUCCESS,
  breeds,
});

export const getBreedsError = (error) => ({
  type: GET_BREEDS_ERROR,
  error,
});

export const getBreeds = () => async (dispatch) => {
  dispatch(getBreedsRequest());
  try {
    const response = await api.get('/breeds/list');
    dispatch(getBreedsSuccess(response.data.message));
  } catch (e) {
    dispatch(getBreedsError(e.message));
  }
};

export const getImagesRequest = () => ({
  type: GET_IMAGES_REQUEST,
});

export const getImagesSuccess = (dogs) => ({
  type: GET_IMAGES_SUCCESS,
  dogs,
});

export const getImagesError = (error) => ({
  type: GET_IMAGES_ERROR,
  error,
});

export const getImages = () => async (dispatch, getState) => {
  dispatch(getImagesRequest());
  try {
    const breedsList = getState().breeds;
    const dogsImages = await Promise.all(
      breedsList.map(async (breed) => {
        const response = await api.get(`/breed/${breed}/images`);
        return response.data.message;
      }),
    );
    const dogsList = dogsImages
      .map((images, index) => {
        return {
          breed: breedsList[index],
          images,
          dogsCount: images.length,
        };
      })
      .sort((a, b) => b.images.length - a.images.length);
    dispatch(getImagesSuccess(dogsList));
  } catch (e) {
    dispatch(getImagesError(e.message));
  }
};
