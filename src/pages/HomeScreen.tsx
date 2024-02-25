import { css } from "@emotion/react";
import React from "react";

export const HomeScreen: React.FC = () => {
  return (
    <div
      css={css`
        font-size: 100px;
        font-weight: bold;
      `}
    >
      Home page
    </div>
  );
};

export default HomeScreen;
