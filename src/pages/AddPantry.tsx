import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import "./popup.css";
import { ArrowBackUp } from "tabler-icons-react";

function AddPantry({ closePopup, searchedItem, addToPantry }) {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const recipesDatabase = [
    { name: "Peach Cobbler", ingredients: ["Peach", "Flour", "Sugar"] },
    { name: "Apple Pie", ingredients: ["Apple", "Flour", "Butter"] },
    { name: "Peach Margarita", ingredients: ["Peach", "Sugar"] },
    { name: "Peach Pound Cake", ingredients: ["Peach", "Flour", "Sugar"] },
    {
      name: "Garlic Shrimp Mushroom Stir-Fry",
      ingredients: ["Garlic", "Mushroom", "Shrimp", "Oil"],
    },
    {
      name: "Shrimp Broccoli Fried Rice",
      ingredients: ["Shrimp", "Rice", "Oil", "Broccoli"],
    },
    {
      name: "Broccoli Shrimp Pasta",
      ingredients: ["Shrimp", "Pasta", "Oil", "Broccoli"],
    },
    { name: "Apple Turnover", ingredients: ["Apple", "Flour", "Sugar"] },
    { name: "Sauteed Mushroom", ingredients: ["Milk", "Mushroom", "Garlic"] },

    // ... more recipes ...
  ];

  useEffect(() => {
    // Filter recipes when searchedItem changes
    if (searchedItem) {
      const lowerCaseSearchedItem = searchedItem.toLowerCase();
      const recipesWithIngredient = recipesDatabase.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(lowerCaseSearchedItem)
        )
      );
      setFilteredRecipes(recipesWithIngredient);
    } else {
      setFilteredRecipes([]);
    }
  }, [searchedItem]);

  const handleAddToPantry = () => {
    const newIngredient = {
      ingredient: searchedItem,
      expiration: "2024/09/07", // Set the appropriate expiration date
    };
    addToPantry(newIngredient);
    closePopup();
  };

  return (
    <div
      css={css`
        font-size: small;
      `}
      className="popup-container"
    >
      <div
        css={css`
          font-size: small;
        `}
        className="popup-content"
      >
        <header
          css={css`
            background-color: #a7516c;
            display: flex;
            flex-direction: row;
            margin-bottom: 0px;
            justify-content: space-evenly;
          `}
        >
          <button
            css={css`
              background-color: #a7516c;
            `}
            onClick={closePopup}
          >
            {<ArrowBackUp size={20} strokeWidth={2} color={"#f8f1df"} />}
          </button>
          <div
            css={css`
              font-family: "Poppins" system-ui;
              font-weight: 500;
              color: #f8f1df;
              text-align: center;
              margin-bottom: 0px;
            `}
          >
            Add Ingredients
          </div>
          <div
            css={css`
              align-self: stretch;
              padding: 20px;
            `}
          ></div>
        </header>

        <div className="Apple-section">
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
            `}
          >
            <div
              css={css`
                align-self: stretch;
                padding: 10px;
              `}
            ></div>
            <img
              css={css`
                margin-top: 0px;
                align-self: center;
                width: 250px;
                height: 250px;
                border-radius: 8px;
              `}
              src="https://target.scene7.com/is/image/Target/GUEST_266b2ff0-f175-4f4d-94bf-e7056b4da7cc?wid=665&hei=665&qlt=80&fmt=webp"
              alt="Apple"
            />
          </div>

          <div
            css={css`
              margin-top: 15px;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
            `}
            className="apple-details"
          >
            <div
              css={css`
                font-size: 25px;
                font-weight: 500;
              `}
            >
              {searchedItem}
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 0px;
              `}
            >
              <span>Expiration Date</span> <span>2024/03/24</span>
            </div>
          </div>
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            margin-left: 50px;
            margin-right: 50px;
            font-size: 9px;
            font-weight: 500;
          `}
          className="recipe-recommendations"
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 10px;
              margin-bottom: 30px;
              font-size: 12px;
              font-weight: 800;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: left;
              `}
            >
              Recipe
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: left;
              `}
            >
              Recommedations
            </div>
          </div>
          <div
            css={css`
              margin-left: auto;
            `}
          >
            {filteredRecipes.length > 0 ? (
              <ul>
                {filteredRecipes.map((recipe, index) => (
                  <li key={index}>{recipe.name}</li>
                ))}
              </ul>
            ) : (
              <div>No recipes found for {searchedItem}</div>
            )}
          </div>
        </div>

        <div css={css``} className="actions">
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              background-color: #e6b3b3;
              border-left: 15px;
              border-right: 15px;
              padding-top: 15px;
              padding-bottom: 15px;
            `}
          >
            <div></div>
            <button
              onClick={handleAddToPantry}
              css={css`
                font-family: "Poppins" system-ui;
                padding: None;
                color: #e6b3b3;
                background-color: #c36b85;
                border: none;
                cursor: pointer;
              `}
            >
              Add to Fridge
            </button>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPantry;
