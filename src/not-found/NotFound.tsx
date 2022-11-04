import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import NotFoundImg from "../assets/NotFoundImg.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate("/");

  return (
    <SectionWrapper>
      <img
        src={NotFoundImg}
        alt="Lost Windows XP dog"
        className="rounded-full h-32 w-32"
      />
      <h1>You are looking lost?</h1>
      <button
        onClick={handleButtonClick}
        className="bg-green-400 dark:bg-green-900 p-4 rounded-2xl"
      >
        Go home buddy
      </button>
    </SectionWrapper>
  );
};

export default NotFound;
