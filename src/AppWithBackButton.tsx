import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackUp } from "tabler-icons-react";

interface AppWithBackButtonProps {
  children: React.ReactNode;
}

const AppWithBackButton: React.FC<AppWithBackButtonProps> = ({ children }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowBackUp size={25} strokeWidth={2} color={"#a7516c"} />
      </button>
      {children}
    </div>
  );
};

export default AppWithBackButton;
