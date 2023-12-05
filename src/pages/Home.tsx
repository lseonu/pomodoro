import "./ButtonContainer.css";
import { ExclamationMark, FileX } from "tabler-icons-react";
import { ShoppingCart } from "tabler-icons-react";
import { Search } from "tabler-icons-react";
import { Menu2 } from "tabler-icons-react";
import React, { useState, useEffect } from "react";
import AddIngredients from "./AddIngredient";
import AddFreezer from "./AddFreezer";
import AddPantry from "./AddPantry";
import { Link, Outlet } from "react-router-dom";

import { css } from "@emotion/react";

// Utility functions for local storage
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const loadFromLocalStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export const Home: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Initialize state with data from local storage or default to empty array
  const [fridgeIngredients, setFridgeIngredients] = useState(() =>
    loadFromLocalStorage("fridgeIngredients", [])
  );
  const [freezerIngredients, setFreezerIngredients] = useState(() =>
    loadFromLocalStorage("freezerIngredients", [])
  );
  const [pantryIngredients, setPantryIngredients] = useState(() =>
    loadFromLocalStorage("pantryIngredients", [])
  );
  const removeFromFridge = (ingredientToRemove) => {
    setFridgeIngredients(
      fridgeIngredients.filter((item) => item.ingredient !== ingredientToRemove)
    );
  };
  const removeFromFreezer = (ingredientToRemove) => {
    setFreezerIngredients(
      freezerIngredients.filter(
        (item) => item.ingredient !== ingredientToRemove
      )
    );
  };
  const removeFromPantry = (ingredientToRemove) => {
    setPantryIngredients(
      pantryIngredients.filter((item) => item.ingredient !== ingredientToRemove)
    );
  };

  const [showFridgeSearch, setShowFridgeSearch] = useState(false);
  const [showFreezerSearch, setShowFreezerSearch] = useState(false);
  const [showPantrySearch, setShowPantrySearch] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  const [searchString1, setSearchString1] = useState("");
  const [searchString2, setSearchString2] = useState("");
  const [searchString3, setSearchString3] = useState("");

  const handleSearchChange1 = (e) => {
    setSearchString1(e.target.value);
  };

  const handleSearchChange2 = (e) => {
    setSearchString2(e.target.value);
  };

  const handleSearchChange3 = (e) => {
    setSearchString3(e.target.value);
  };

  const handleSearch1 = () => {
    // Use the `searchString` state for your search logic
    console.log("Search string:", searchString1);
  };

  const handleSearch2 = () => {
    // Use the `searchString` state for your search logic
    console.log("Search string:", searchString2);
  };

  const handleSearch3 = () => {
    // Use the `searchString` state for your search logic
    console.log("Search string:", searchString3);
  };

  const handleAddToFridge = (newIngredient1) => {
    setFridgeIngredients([...fridgeIngredients, newIngredient1]);
    setShowFridgeSearch(false); // Hide the search bar after adding
  };

  const handleAddToFreezer = (newIngredient2) => {
    setFreezerIngredients([...freezerIngredients, newIngredient2]);
    setShowFreezerSearch(false); // Hide the search bar after adding
  };

  const handleAddToPantry = (newIngredient3) => {
    setPantryIngredients([...pantryIngredients, newIngredient3]);
    setShowPantrySearch(false); // Hide the search bar after adding
  };

  const toggleFridgeSearch = () => setShowFridgeSearch(!showFridgeSearch);
  const toggleFreezerSearch = () => setShowFreezerSearch(!showFreezerSearch);
  const togglePantrySearch = () => setShowPantrySearch(!showPantrySearch);

  // Save state changes to local storage
  useEffect(() => {
    saveToLocalStorage("fridgeIngredients", fridgeIngredients);
    saveToLocalStorage("freezerIngredients", freezerIngredients);
    saveToLocalStorage("pantryIngredients", pantryIngredients);
  }, [fridgeIngredients, freezerIngredients, pantryIngredients]);

  return (
    <div
      css={css`
        margin: 0;
        padding: 0;
        width: 100%;
      `}
      className="container"
    >
      <div
        css={css`
          background-color: #c36b85;
          padding: 20px;
        `}
      >
        <header
          css={css`
            background-color: #c36b85;
            padding: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
          `}
        >
          {/* <div>
            <button
              css={css`
                background-color: #f9f4e6;
                padding: 4px;
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <Menu2 size={20} strokeWidth={2} color={"#e6b3b3"} />
            </button>
          </div> */}

          <img
            css={css`
              display: flex;
              margin-left: 10px;
              width: 150px;
              height: 30px;
              margin: none;
              border-radius: 0px;
            `}
            src="https://i.ibb.co/0rphyVH/Fridge-Tracker-100-x-40-px-1000-x-200-px-1.png"
            alt="Fridge-Tracker-100-x-40-px-1000-x-200-px-1"
            border="0"
          />

          <img
            css={css`
              display: flex;
              width: 30px;
              height: 30px;
              border-radius: 20px;
            `}
            src="https://images.ctfassets.net/1wryd5vd9xez/6imn4PsoUBr6I9Hs8jWxk4/b28965e1afec63588266cf42ba5178ae/https___cdn-images-1.medium.com_max_2000_1_7hkI-ZKsglnbjxCRV1bMZA.png"
          />
        </header>
      </div>

      <div
        css={css`
          padding-top: 35px;
          overflow-y: auto; // Allow scrolling for the main content
        `}
      >
        <nav>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: end;
            `}
          >
            <button
              css={css`
                background-color: #f9f4e6;
                color: #a7516c;
                margin-top: 0px;
                margin-right: 2px;
                margin-bottom: 8px;
              `}
            >
              Change View Option =
            </button>
          </div>
        </nav>

        <section
          css={css`
            background-color: #c36b85;
            margin-left: 30px;
            margin-right: 30px;
            border-radius: 20px;
            outline: none;
            border: none;
          `}
          className="alerts"
        >
          <div className="button-container">
            <div
              css={css`
                align-self: center;
                margin-left: 10px;
              `}
            >
              <ExclamationMark size={25} strokeWidth={3} color={"#f9f4e6"} />
            </div>

            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 5px;
                font-size: 13px;
              `}
            >
              <button className="button">Expires Soon</button>

              <div
                css={css`
                  color: #f9f4e6;
                  font-size: smaller;
                  margin-top: 0px;
                  margin-bottom: 15px;
                `}
                className="expires-soon"
              >
                {" "}
                Shrimp, Milk
              </div>
            </div>

            <div
              css={css`
                align-self: stretch;
                padding: 13px 0;
              `}
            ></div>

            <div
              css={css`
                align-self: stretch;
                padding: 12px 0;
              `}
            >
              <div
                css={css`
                  width: 1px;
                  height: 100%;
                  background: #f9f4e6;
                `}
              ></div>
            </div>
            <div
              css={css`
                align-self: center;
                margin-left: 10px;
              `}
            >
              <ShoppingCart size={25} strokeWidth={2} color={"#f9f4e6"} />
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 5px;
                font-size: 13px;
              `}
            >
              <button className="button">Restock Soon </button>
              <div
                css={css`
                  color: #f9f4e6;
                  margin-bottom: 10px;
                  font-size: smaller;
                `}
                className="restock-soon"
              >
                {" "}
                Egg, Flour
              </div>
            </div>
            <div
              css={css`
                align-self: stretch;
                padding: 0px 0;
              `}
            ></div>
          </div>
        </section>

        <div
          css={css`
            margin: 25px;
          `}
        >
          <section className="storage">
            <StorageSection
              title="Refrigerator"
              headers={[
                {
                  itemname: "Item Name",
                  date: "Expiration Date",
                  remove: "Remove",
                },
              ]}
              items={fridgeIngredients}
              onRemoveItem={removeFromFridge}
            />

            <button
              onClick={toggleFridgeSearch}
              css={css`
                background-color: #f9f4e6;
                color: #a7516c;
                margin-bottom: 20px;
                margin-left: 370px;
              `}
              className="add-more-button"
            >
              + Add More
            </button>
            {showFridgeSearch && (
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  margin-bottom: 20px;
                `}
              >
                {
                  <div
                    css={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      margin-bottom: 10px;
                    `}
                  >
                    <input
                      type="search"
                      placeholder="Add More Ingredients"
                      value={searchString1}
                      onChange={handleSearchChange1}
                      css={css`
                        padding: 4px 80%;
                        background-color: f9f4e6;
                        font-size: 12px;
                        border-radius: 4px;
                        outline: none;
                        border: none;
                      `}
                    />
                    <button
                      css={css`
                        padding: 5px;
                        background-color: #c36b85;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-left: 10px;
                      `}
                      onClick={openPopup}
                    >
                      <Search size={20} strokeWidth={2} color={"#e6b3b3"} />
                    </button>
                    {isPopupVisible && (
                      <AddIngredients
                        closePopup={closePopup}
                        searchedItem={searchString1}
                        addToFridge={handleAddToFridge}
                      />
                    )}
                  </div>
                }
              </div>
            )}

            <StorageSection
              title="Freezer"
              headers={[
                {
                  itemname: "Item Name",
                  date: "Expiration Date",
                  remove: "Remove",
                },
              ]}
              items={freezerIngredients}
              onRemoveItem={removeFromFreezer}
            />

            <button
              onClick={toggleFreezerSearch}
              css={css`
                background-color: #f9f4e6;
                color: #a7516c;
                margin-bottom: 20px;
                margin-left: 370px;
              `}
              className="add-more-button"
            >
              + Add More
            </button>
            {showFreezerSearch && (
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  margin-bottom: 20px;
                `}
              >
                {
                  <div
                    css={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      margin-bottom: 10px;
                    `}
                  >
                    <input
                      type="search"
                      placeholder="Add More Ingredients"
                      value={searchString2}
                      onChange={handleSearchChange2}
                      css={css`
                        padding: 4px 80%;
                        background-color: f9f4e6;
                        font-size: 12px;
                        border-radius: 4px;
                        outline: none;
                        border: none;
                      `}
                    />
                    <button
                      css={css`
                        padding: 5px;
                        background-color: #c36b85;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-left: 10px;
                      `}
                      onClick={openPopup}
                    >
                      <Search size={20} strokeWidth={2} color={"#e6b3b3"} />
                    </button>
                    {isPopupVisible && (
                      <AddFreezer
                        closePopup={closePopup}
                        searchedItem={searchString2}
                        addToFreezer={handleAddToFreezer}
                      />
                    )}
                  </div>
                }
              </div>
            )}

            <StorageSection
              title="Pantry"
              headers={[
                {
                  itemname: "Item Name",
                  date: "Expiration Date",
                  remove: "Remove",
                },
              ]}
              items={pantryIngredients}
              onRemoveItem={removeFromPantry}
            />

            <button
              onClick={togglePantrySearch}
              css={css`
                background-color: #f9f4e6;
                color: #a7516c;
                margin-bottom: 20px;
                margin-left: 370px;
              `}
              className="add-more-button"
            >
              + Add More
            </button>
            {showPantrySearch && (
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                `}
              >
                {
                  <div
                    css={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                    `}
                  >
                    <input
                      type="search"
                      placeholder="Add More Ingredients"
                      value={searchString3}
                      onChange={handleSearchChange3}
                      css={css`
                        padding: 4px 80%;
                        background-color: f9f4e6;
                        font-size: 12px;
                        border-radius: 4px;
                        outline: none;
                        border: none;
                      `}
                    />
                    <button
                      css={css`
                        padding: 5px;
                        background-color: #c36b85;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-left: 10px;
                      `}
                      onClick={openPopup}
                    >
                      <Search size={20} strokeWidth={2} color={"#e6b3b3"} />
                    </button>
                    {isPopupVisible && (
                      <AddPantry
                        closePopup={closePopup}
                        searchedItem={searchString3}
                        addToPantry={handleAddToPantry}
                      />
                    )}
                  </div>
                }
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

interface StorageSectionProps {
  title: string;
  headers: Array<{
    itemname: string;
    date: string;
    remove: string;
  }>;
  items: Array<{
    ingredient: string;
    expiration: string;
  }>;
  onRemoveItem: (ingredient: string) => void;
}

function StorageSection({
  title,
  headers,
  items,
  onRemoveItem,
}: StorageSectionProps) {
  return (
    <div className="storage-section">
      <div css={titleContainerStyle}>
        <div css={titleStyle}>{title}</div>
        <div css={separatorStyle}></div>
      </div>

      <ul css={listStyle}>
        {headers.map((header, index) => (
          <li key={index} css={headerStyle}>
            <div css={itemNameStyle}>{header.itemname}</div>
            <div css={itemExpirationStyle}>{header.date}</div>
            <div css={itemRemoveStyle}>{header.remove}</div>
          </li>
        ))}
      </ul>

      <ul css={listStyle}>
        {items.map((item, index) => (
          <li key={index} css={listItemStyle}>
            <div css={itemNameStyle}>{item.ingredient}</div>
            <div css={itemExpirationStyle}>{item.expiration}</div>
            <button
              onClick={() => onRemoveItem(item.ingredient)}
              css={css`
                margin-right: 1px;
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
}

const titleContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  marginBottom: "5px",
};

const titleStyle = {
  fontFamily: "Poppins, system-ui",
  fontSize: "18px",
  fontWeight: 500,
};

const separatorStyle = {
  height: "1pt",
  width: "100%",
  marginBottom: "0px",
  background: "#a7516c",
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
};

const listItemStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "5px",
};

const headerStyle = {
  fontSize: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "0px",
  marginBottom: "0px",
};

const itemNameStyle = {
  flex: 1,
  marginRight: "100px",
};

const itemExpirationStyle = {
  flex: 1,
  marginLeft: "0px",
};

const itemRemoveStyle = {
  marginRight: "15px",
};

export default Home;
