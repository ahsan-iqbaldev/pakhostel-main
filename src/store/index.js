import { applyMiddleware, compose, createStore } from "redux";
// import  from "./reducers";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))
);

export default store;