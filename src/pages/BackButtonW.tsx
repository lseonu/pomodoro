import { css } from "@emotion/react";
import { ArrowBackUp } from "tabler-icons-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const BackButtonW: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  // Function to go back in the browser's history
  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={goBack}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
      `}
    >
      {<ArrowBackUp size={25} strokeWidth={2} color={"#f8f1df"} />}
      <div
        css={css`
          align-self: stretch;
          padding: 5px 0;
        `}
      ></div>
    </button>
  );
};

export default BackButtonW;
