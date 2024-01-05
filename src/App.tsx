import React from "react";

import "./css/style.css";
import HeaderWrapper from "./components/header/HeaderWrapper";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

const App: React.FC = () => {
  return (
    <>
      <HeaderWrapper />
      <Main />
      <Footer />
    </>
  );
};

export default App;
