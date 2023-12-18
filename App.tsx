import React from "react";
import {Provider} from "react-redux";

import HomeMain from "./src/modules/screens/home";
import configureStore from "./src/redux/store";
import initialStates from "./src/redux/store/initialStates";

function App(): JSX.Element {
  const {store} = configureStore(initialStates);

  return (
    <Provider store={store}>
      <HomeMain />
    </Provider>
  );
}

export default App;
