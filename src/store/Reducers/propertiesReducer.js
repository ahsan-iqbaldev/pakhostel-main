const initialState = {
  properties: [],
  singleProperty: null,
  isLoading: false,
};

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROPERTIES":
      return { ...state, properties: action.payload };
      case "SET_SINGLE_PROPERTIES":
        return { ...state, singleProperty: action.payload };
        case "SET_IS_LOADING":
        return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default propertiesReducer;
