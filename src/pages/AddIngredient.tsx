import React, { useState } from 'react';
import { css } from "@emotion/react"
import './popup.css';

function AddIngredients({closePopup, searchedItem, addToFridge}) {
  const [quantity, setQuantity] = useState(2);
  
  const handleAddToFridge = () => {
    // Assuming you have some data representing the new ingredient
    const newIngredient = {
      ingredient: searchedItem,
      quantity: `${quantity}00g`, // Adjust the format as needed
      expiration: "2023/11/19", // Set the expiration date as needed
    };
    addToFridge(newIngredient);

    // Close the popup
    closePopup();
  };


  return (
    <div className="popup-container">
      <div className="popup-content">
        <header css={css`
          background-color: #a7516c;
          padding: 20px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        `}>
          <div css={css`
            font-family: 'Poppins' system-ui;
            font-size: 18px;
            font-weight: 500;
            color: #f8f1df;
            text-align: center;
          `}>Add Ingredients</div>
        </header>

        <div className="peach-section">
          <div css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          `}>
            <div css={css`
              align-self: stretch;
              padding: 25px;
            `}></div>
            <img css={css`
              margin-top: 20px;
              align-self: center;
              width: 250px;
              height: 250px;
              border-radius: 8px;
            `}
              src="https://placehold.co/100x100"
              alt="Peach"
            />
            <div css={css`
              align-self: stretch;
              padding: 25px;
            `}></div>
          </div>

          <div css={css`
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          `} className="peach-details">
            <div css={css`
              font-size: 25px;
              font-weight: 500;
            `}>{searchedItem}</div>
            <div css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}>
              <span>Quantity Left</span> <span>{quantity}</span>
            </div>
            <div css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}>
              <span>Expiration Date</span> <span>2023/11/01</span>
            </div>
          </div>
        </div>

        <div css={css`
          display: flex;
          flex-direction: column;
          font-size: 12px;
          font-weight: 400;
          margin-left: 0px;
          margin-right: 0px;
          margin-top: 20px;
        `} className="recipe-recommendations">
          <div css={css`
            font-size: 20px;
            font-weight: 400;
            margin-left: 0px; 
            color: #a7516c;
          `}
          >Recipe Recommendations</div>
          <ul css={css`
            display: flex;
            flex-direction: column;
            justify-self: self;
            margin-left: -30px;
            flex-wrap: wrap;
            list-style: none;
          `}>
            {recipeRecommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          
          </ul>
          <div css={css`
              margin-left: 100px;
            `}>
              </div>
        </div>

        <div className="actions">
          <div css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          `}>
            <div css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              margin: 10px;
            `}>
              <button css={css`
                display: flex;
                flex-direction: column;
                align-self: start;
                padding: auto;
                color: #e6b3b3;
                font-size: 15px;
                background-color: #c36b85;
                border: none;
                border-radius: 4px;
                cursor: pointer;
              `}
              onClick={() => setQuantity(quantity - 1)}>
                -
              </button>

              <div css={css`
                margin: 15px;
                font-family: 'Poppins', system-ui;
                font-size: 15px;
                display: flex;
                flex-direction: column;
                align-content: center;
                text-align: center;
              `}>
                {quantity}
              </div>

              <button css={css`
                display: flex;
                flex-direction: column;
                align-self: start;
                padding: auto;
                color: #e6b3b3;
                font-size: 15px;
                background-color: #c36b85;
                border: none;
                border-radius: 4px;
                cursor: pointer;
              `}
              onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button onClick={handleAddToFridge}css={css`
              font-family: 'Poppins' system-ui;
              padding: None;
              color: #e6b3b3;
              font-size: 5px;
              background-color: #c36b85;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            `}>Add to Fridge</button>
            
            <button css={css`
              font-family: 'Poppins' system-ui;
              padding: None;
              color: #e6b3b3;
              font-size: 5px;
              background-color: #c36b85;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            `}>Add to Shopping List</button>
          </div>
        </div>
        <button
          css={css`
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: #a7516c;
          `}
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AddIngredients;

const recipeRecommendations = [
  'Peach Cobbler',
  'Baked Peaches',
  'Fresh Peach Cake',
  'Sangria',
  'Peach Fritters',
  'Peach Marmalade',
];
