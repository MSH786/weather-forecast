import {createActions} from "reduxsauce";

const {Types, Creators} = createActions({
  setIsFetchingForecastToTrue: null,
});

export const loadingTypes = Types;
export const loadingCreators = Creators;
