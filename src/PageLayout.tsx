import React, { useState } from "react";
import { css } from "@emotion/react";
import { Link, Outlet } from "react-router-dom"; // Import Link and Outlet
import { ArrowBigRight } from "tabler-icons-react";

// TabBarItem component defined outside PageLayout
const TabBarItem: React.FC<{
  name: string;
  path: string;
  icon: React.ReactNode;
}> = ({ name, path, icon }) => {
  return (
    <Link to={path}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {icon}
        <div>{name}</div>
      </div>
    </Link>
  );
};

export const PageLayout: React.FC = () => {
  // State to hold the uploaded image URLs for both sections
  const [leftImageUrl, setLeftImageUrl] = useState<string | null>(null);
  const [rightImageUrl, setRightImageUrl] = useState<string | null>(null);

  // Handler for left image upload
  const handleLeftImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create URL for the uploaded image
      setLeftImageUrl(imageUrl); // Set the image URL to display
    }
  };

  // Handler for right image upload
  const handleRightImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create URL for the uploaded image
      setRightImageUrl(imageUrl); // Set the image URL to display
    }
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100vw;
        font-size: 10px;
      `}
    >
      {/* Header */}
      <header
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 16vh;
          font-size: 9px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 12px;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          background-color: #739ddc;
        `}
      >
        <h1>Header</h1>
      </header>

      {/* Main Content */}
      <main
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          height: calc(100vh - 16vh); /* Remaining height after header */
          margin-top: 16vh;
        `}
      >
        {/* Left Section */}
        <section
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            background-color: #f4f4f4;
            border-right: 1px solid #ddd;
            padding: 20px;
            flex-direction: column;
          `}
        >
          {/* Display the uploaded image */}
          {leftImageUrl && (
            <img
              src={leftImageUrl}
              alt="Uploaded Left"
              css={css`
                margin-bottom: 20px; /* Add space between image and button */
                max-width: 100%;
                height: auto;
              `}
            />
          )}

          <div>
            <input
              type="file"
              accept="image/png"
              onChange={handleLeftImageUpload}
              css={css`
                margin-top: 10px;
                padding: 5px;
              `}
            />
            <p>Upload PNG file (Left Section)</p>
          </div>
        </section>

        {/* Right Section */}
        <section
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            background-color: #fff;
            padding: 20px;
            flex-direction: column;
          `}
        >
          {/* Display the uploaded image */}
          {rightImageUrl && (
            <img
              src={rightImageUrl}
              alt="Uploaded Right"
              css={css`
                margin-bottom: 20px; /* Add space between image and button */
                max-width: 100%;
                height: auto;
              `}
            />
          )}

          <div>
            <input
              type="file"
              accept="image/png"
              onChange={handleRightImageUpload}
              css={css`
                margin-top: 10px;
                padding: 5px;
              `}
            />
            <p>Upload PNG file (Right Section)</p>
          </div>
        </section>
      </main>

      {/* Outlet to render child routes */}
      <Outlet />

      {/* Navigation Bar */}
      <nav
        css={css`
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100vw;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding: 12px;
          margin-left: 0px;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          background-color: lightgray;
        `}
      >
        <TabBarItem
          name="Continue"
          path="/"
          icon={<ArrowBigRight size={15} strokeWidth={2} />}
        />
      </nav>
    </div>
  );
};
