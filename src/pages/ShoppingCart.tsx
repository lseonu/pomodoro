import React, { useState } from "react";
import { css } from "@emotion/react";
import { ArrowBackUp } from "tabler-icons-react";
import BackButton from "./BackButton"; // Import the BackButton component

export const ShoppingCart: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [shoppingList, setShoppingList] = useState(["Egg", "Milk"]);
  const [newItem, setNewItem] = useState("");

  const handleAddMore = () => {
    setShowPopup(true);
  };

  const handleAddToList = () => {
    if (newItem) {
      setShoppingList((prevList) => [...prevList, newItem]);
      setNewItem(""); // Reset the input
      setShowPopup(false); // Close the popup
    }
  };

  const removeItem = (itemToRemove) => {
    setShoppingList((prevList) =>
      prevList.filter((item) => item !== itemToRemove)
    );
  };

  return (
    <div className="shopping-list-container">
      <header
        css={css`
          margin-top: 20px;
        `}
      >
        <BackButton />
      </header>

      <div
        css={css`
          display: flex;
          flex-direction: row;
          margin-left: 30px;
        `}
        className="list-title"
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-self: center;
            margin-bottom: 10px;
          `}
        >
          <img
            css={css`
              display: flex;

              width: 60px;
              height: 60px;
              border-radius: 30px;
            `}
            src="https://images.ctfassets.net/1wryd5vd9xez/6imn4PsoUBr6I9Hs8jWxk4/b28965e1afec63588266cf42ba5178ae/https___cdn-images-1.medium.com_max_2000_1_7hkI-ZKsglnbjxCRV1bMZA.png"
          />
        </div>

        <div
          css={css`
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            align-items: start;
            margin-top: 5px;
            margin-bottom: 10px;
          `}
        >
          <div
            css={css`
              margin-top: 10px;
              margin-bottom: 0px;
              font-size: 18px;
              font-weight: 500;
            `}
          >
            Shopping List
          </div>
          <p
            css={css`
              margin-top: 0px;
              align-self: start;
              font-size: small;
            `}
          >
            Karoline's Shopping List
          </p>
        </div>
      </div>

      <div
        css={css`
          align-self: auto;
          margin-left: 25px;
          margin-right: 25px;
          height: 2px;
          width: auto;
          background: #a7516c;
        `}
      ></div>

      <div
        css={css`
          margin-left: 25px;
          font-family: "Poppins";
          margin-top: 20px;
          font-size: 15px;
        `}
      >
        <section className="shoppinglist">
          <ListSection items={shoppingList} onRemoveItem={removeItem} />
        </section>
      </div>

      <button
        css={css`
          margin-left: 10px;
          font-size: 15px;
          color: #a7516c;
          margin-bottom: 10px;
        `}
        onClick={handleAddMore}
      >
        + Add More
      </button>

      {showPopup && (
        <div
          css={css`
            margin-left: 30px;
            margin-right: 30px;
            display: flex;
            flex-direction: column;
          `}
        >
          <input
            css={css``}
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter new item"
          />
          <button
            css={css`
              padding: 5px;
              margin: 10px;
              font-size: 12px;
              background-color: #a7516c;
              color: #f9f4e6;
            `}
            onClick={handleAddToList}
          >
            Add to Shopping List
          </button>
        </div>
      )}
    </div>
  );
};

interface ListSectionProps {
  title: string;
  items: string[];
}

const ListSection = ({ title, items, onRemoveItem }) => {
  return (
    <div className="list-section">
      <div
        css={css`
          font-family: inherit;
          font-size: 17px;
          font-weight: 500;
        `}
      >
        {title}
      </div>
      <ul
        css={css`
          list-style-type: none;
          padding: 0;
        `}
      >
        {items.map((item) => (
          <li
            key={item}
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0px;
            `}
          >
            <div>
              <input
                css={css`
                  accent-color: #a7516c; /* Change the color of the checkbox */
                  margin-right: 10px; /* Spacing between checkbox and label */
                `}
                type="checkbox"
                id={item}
                name={item}
              />
              <label
                htmlFor={item}
                css={css`
                  font-size: 15px;
                  margin-left: 12px;
                `}
              >
                {item}
              </label>
            </div>
            <button
              onClick={() => onRemoveItem(item)}
              css={css`
                margin-right: 30px;
                background: none;
                border: none;
                color: #a7516c;
                cursor: pointer;
              `}
            >
              &#10006; {/* Unicode for 'X' symbol */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
