import { GET_PHONES } from './../actions';


export const initialState = {
  loading: true,
  phones: [],
  error: false,
};

const reducer = (state = { ...initialState }, action) => {
  switch(action.type) {
    case `${GET_PHONES}_PENDING`: {
      return { ...state, ...initialState };
    }
    case `${GET_PHONES}_FULFILLED`: {
      return { ...state, loading: false, phones: action.payload.data.data, error: false };
    }
    case `${GET_PHONES}_REJECTED`: {
      return { ...state, phones: [], error: true, loading: false };
    }
    default:
      return { ...state };
  }
};

export default reducer;
