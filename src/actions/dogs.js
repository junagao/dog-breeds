import api from 'api';
import {
  GET_BREEDS_REQUEST,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_ERROR,
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
