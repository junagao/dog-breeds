import {
  GET_BREEDS_REQUEST,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_ERROR,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
} from 'actions/types';

const initialState = {
  breeds: [],
  dogs: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BREEDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_BREEDS_SUCCESS:
      return {
        ...state,
        breeds: action.breeds,
        loading: false,
      };
    case GET_BREEDS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        dogs: action.dogs,
        loading: false,
      };
    case GET_IMAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
