import { combineReducers } from "redux";
import mainReducer from "./Reducers";
import propertiesReducer from "./propertiesReducer";

const rootReducer = combineReducers({
    increamentReducer:mainReducer,
    allProperties: propertiesReducer,
})
export default rootReducer