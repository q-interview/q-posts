import React, { useMemo, useReducer } from "react";
import { initialState, reducer, Store } from "./store";
import Layout from "./Layout";
import { ThemeProvider } from "./components";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    <Store.Provider value={value}>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </Store.Provider>
  );
};

export default App;
