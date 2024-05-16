import React from "react";

import "./css/style.css";
import HeaderWrapper from "./components/header/HeaderWrapper";
import Main from "./components/main/Main";

const App: React.FC = () => {
  return (
    <>
      <HeaderWrapper />
      <Main />
    </>
  );
};

export default App;
