const initialState = { inputs: [], modal: false };

export const rootReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'SET_BARS':
      return { ...store, inputs: action.payload };
    case 'MODAL':
      return { ...store, modal: action.payload };
    default:
      return store;
  }
};
