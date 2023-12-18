import {combineReducers} from "redux";

import homeReducers from "../../modules/screens/home/redux/home.reducers";
import loadingReducer from "./loading.reducer";

const rootReducer = combineReducers({
  weather: homeReducers,
  loading: loadingReducer,
});

export default rootReducer;
