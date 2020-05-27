import { GET_DAYS, DELETE_DAY, DAY_LOADING } from '../actions/types';

const initialState = {
  days: [],
  day: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DAY_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_DAYS:
      return {
        ...state,
        days: action.payload
        // loading: false
      };
    case DELETE_DAY:
      return {
        ...state,
        days: state.days.filter(day => day._id !== action.payload)
      }
    default:
      return state;
  }
}