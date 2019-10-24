import { handleActions, createActions } from 'redux-actions';
import { createSelector } from 'reselect';
// API
import api from 'lib/api';

const initialState = {
  estates: null,
  loading: false,
  error: false,
};

const actions = createActions(
  'FETCH_ESTATES_REQUEST',
  'FETCH_ESTATES_SUCCESS',
  'FETCH_ESTATES_FAILURE',
);

const reducer = handleActions(
  {
    [actions.fetchEstatesRequest.toString()]: state => ({
      ...state,
      loading: true,
    }),
    [actions.fetchEstatesSuccess.toString()]: (state, action) => {
      const { items, pagination } = action.payload;
      const oldResults =
        state.estates && pagination.offset !== 0 ? state.estates.items : [];
      return {
        ...state,
        estates: {
          ...action.payload,
          items: [...oldResults, ...items],
        },
        loading: false,
      };
    },
    [actions.fetchEstatesFailure.toString()]: state => ({
      ...state,
      loading: false,
      error: true,
    }),
  },
  initialState,
);

const effects = {
  fetchEstates: page => async dispatch => {
    try {
      await dispatch(actions.fetchEstatesRequest());
      const data = await api.getEstates(page);
      await dispatch(actions.fetchEstatesSuccess(data));
    } catch (error) {
      dispatch(actions.fetchEstatesFailure(error.message));
      return new Promise(resolve => resolve(error.message));
    }
  },
};

const getState = state => state.estates;
const cs = cb =>
  createSelector(
    [getState],
    cb,
  );

const selectors = {
  getEstates: cs(s => s.estates),
  getErrors: cs(s => s.error),
  getLoading: cs(s => s.loading),
};

export { initialState as state, reducer, actions, selectors, effects };
