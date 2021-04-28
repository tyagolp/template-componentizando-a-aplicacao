function init(initialCount) {
  return { count: initialCount };
}

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return init(action.payload);
//     default:
//       throw new Error();
//   }
// }

type State = {
  data?: HNResponse;
  isLoading: boolean;
  error?: string;
};

type HNResponse = {
  hits: {
    title: string;
    objectID: string;
    url: string;
  }[];
};
type Action = { type: 'request' } | { type: 'success'; results: HNResponse } | { type: 'failure'; error: string };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'request':
      return { isLoading: true };
    case 'success':
      return { isLoading: false, data: action.results };
    case 'failure':
      return { isLoading: false, error: action.error };
  }
}
