const initialState = {
  properties: [],
};

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROPERTIES":
      return { ...state, properties: action.payload };

    default:
      return state;
  }
};

export default propertiesReducer;
