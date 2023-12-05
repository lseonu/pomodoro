import "./ButtonContainer.css";
import { css } from "@emotion/react";
import { Search } from "tabler-icons-react";
import { ArrowBackUp } from "tabler-icons-react";
import BackButton from "./BackButton"; // Import the BackButton component

interface RecipeItemProps {
  title: string;
  ingredients: string[];
}

const RecipeItem: React.FC<RecipeItemProps> = ({
  title,
  ingredients,
  recipeUrl,
}) => {
  const viewFullRecipe = () => {
    window.open(recipeUrl, "_blank"); // Opens the URL in a new tab
  };

  return (
    <div
      css={css`
        font-family: inherit;
      `}
      className="recipe-item"
    >
      <div
        css={css`
          margin-top: 5px;
          margin-bottom: 10px;
          margin-left: 40px;
          font-size: 17px;
          font-weight: 500;
        `}
        className="recipe-title"
      >
        {title}
      </div>
      <div className="ingredients">
        {ingredients.map((ingredient, index) => (
          <div
            css={css`
              font-size: 15px;
              font-weight: 450;
              margin-left: 40px;
            `}
            key={index}
            className="ingredient-item"
          >
            <input
              css={css`
                accent-color: #a7516c; /* Change the color of the checkbox */
                margin-right: 10px; /* Spacing between checkbox and label */
              `}
              type="checkbox"
              id={`ingredient-${index}`}
            />
            <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
          </div>
        ))}
      </div>
      <div
        css={css`
          align-self: stretch;
          padding: 3px 0;
        `}
      ></div>
      <button
        onClick={viewFullRecipe}
        css={css`
          margin-left: 30px;
          background-color: #f9f4e6;
          color: #a7516c;
          font-size: 14px;
        `}
        className="view-full-button"
      >
        + View Full Recipe
      </button>
      <div
        css={css`
          align-self: stretch;
          padding: 8px 0;
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
            align-self: auto;
            margin-left: 25px;
            margin-right: 25px;
            height: 1pt;
            width: auto;
            background: #a7516c;
          `}
        ></div>
      </div>
    </div>
  );
};

export const Recipe: React.FC = () => {
  const recipes = [
    {
      title: "Shrimp Broccoli Fried Rice",
      ingredients: ["Shrimp", "Rice", "Oil", "Broccoli"],
      url: "https://www.foodnetwork.com/recipes/food-network-kitchen/spicy-shrimp-fried-rice-with-broccoli-5301618",
    },
    {
      title: "Apple Pie",
      ingredients: ["Apple", "Flour", "Butter"],
      url: "https://www.foodnetwork.com/recipes/food-network-kitchen/apple-pie-recipe-2011423",
    },
    {
      title: "Peach Margarita",
      ingredients: ["Peach", "Sugar"],
      url: "https://www.foodnetwork.com/recipes/bobby-flay/white-peach-margarita-recipe-1940727",
    },
  ];

  return (
    <div className="recipe-recommendations">
      <header
        css={css`
          margin-top: 30px;
          font-family: "Poppins";
          display: flex;
          flex-direction: column;
          align-items: start;
        `}
      >
        <BackButton />
        <div
          css={css`
            margin-left: 30px;
            font-family: "Poppins" sustem-ui;
            font-size: 20px;
            font-weight: 500;
          `}
          className="title"
        >
          Recipe Recommendations
        </div>
        <div
          css={css`
            margin-left: 30px;
            margin-bottom: 0px;
            font-family: "Poppins" sustem-ui;
            font-size: 13px;
          `}
          className="subtitle"
        >
          Based on Ingredients in Your Fridge
        </div>
      </header>
      <div
        css={css`
          align-self: stretch;
          padding: 12px 0;
        `}
      >
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
      </div>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeItem
            key={index}
            title={recipe.title}
            ingredients={recipe.ingredients}
            recipeUrl={recipe.url}
          />
        ))}
      </div>
      {/* <nav
        css={css`
          display: flex;
          flex-direction: column;
          margin-left: 30px;
          align-items: start;
        `}
      >
        <div
          css={css`
            font-family: inherit;
            font-size: 17px;
            font-weight: 500;
            display: flex;
            margin: 10px;
            flex-direction: row;
            justify-content: start;
          `}
        >
          Search More
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            margin-bottom: 25px;
            justify-content: start;
          `}
        >
          <input
            type="search"
            placeholder="Search More Recipes"
            css={css`
              padding: 4px 18px;
              font-size: 12px;
              font-family: "Poppins", system-ui;
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
            `}
          >
            <Search size={20} strokeWidth={2} color={"#e6b3b3"} />
          </button>
        </div>
      </nav> */}
    </div>
  );
};
