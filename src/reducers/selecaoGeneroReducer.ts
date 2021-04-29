import { useReducer } from 'react';

interface State {
  selectedGenreId: number;
  error?: string;
  isLoading?: boolean;
}
type Action = { type: 'request'; payload: number } | { type: 'success' } | { type: 'failure' };

const initialState: State = {
  selectedGenreId: 1,
  error: '',
  isLoading: false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'request': {
      return {
        ...state,
        selectedGenreId: action.payload,
        error: '',
        isLoading: true,
      };
    }
    case 'success': {
      return {
        ...state,
        isLoading: false,
      };
    }
    case 'failure': {
      return {
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        selectedGenreId: 0,
      };
    }
    default:
      return state;
  }
}

export const getReducer = () => {
  return useReducer(reducer, initialState);
};
