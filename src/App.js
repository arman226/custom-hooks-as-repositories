import React from "react";
import { Provider } from "react-redux";
import store from "ducks/store";
import TodoPages from "pages/TodoPages";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoPages />
      </div>
    </Provider>
  );
};

export default App;
