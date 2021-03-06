import axios from 'axios';

import {
  GET_DAYS,
  ADD_DAY,
  DELETE_DAY,
  DAY_LOADING,
  GET_ERRORS,
  CLEAR_ERRORS
} from './types';

//get days - full list of vacation days taken
export const getDays = () => dispatch => {
  dispatch(setDayLoading());
  axios
    .get('/api/day')
    .then(res =>
      dispatch({
        type: GET_DAYS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DAYS,
        payload: null
      })
    );
}

//add day to list of vacation days
export const addDay = (dayInput) => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/day', dayInput)
    .then(res =>
      dispatch({
        type: ADD_DAY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

//delete day
export const deleteDay = id => dispatch => {
  axios
    .delete(`/api/day/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_DAY,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

//set loading state
export const setDayLoading = () => {
  return {
    type: DAY_LOADING
  }
}

//clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};