import React from "react";

import Wavey from "./Wavey";
import Header from "./Header";

const HeaderWrapper: React.FC = () => {
  return (
    <header>
      <Wavey />
      <Header />
    </header>
  );
};

export default HeaderWrapper;
