import { css } from "@emotion/react";
import React from "react";

export const HomeScreen: React.FC = () => {
  return (
    <div
      css={css`
        font-size: 14px;
        font-weight: bold;
      `}
    >
      Home Page
    </div>
  );
};

export default HomeScreen;
