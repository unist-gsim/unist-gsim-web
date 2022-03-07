import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import Root from "./components/Root";

function App() {
  return (
    <BrowserRouter>
      <Root>
        <AppRouter />
      </Root>
    </BrowserRouter>
  );
}

export default App;
