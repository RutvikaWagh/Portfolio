import React from "react";

import Wave from "./wave";
import Header from "./Header";
const HeaderWrapper: React.FC = () => {
  return (
    <header>
      <Wave />
      <Header />
    </header>
  );
};

export default HeaderWrapper;
