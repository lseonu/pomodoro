import React, { useState } from 'react';
import { css } from "@emotion/react"
import BackButtonW from "./BackButtonW" // Import the BackButton component


export const AddIngredients: React.FC = () => {
	const [quantity, setQuantity] = useState(2);  // Declare the useState hook here
	return (
		<div className="container">
			<header css={css`
				margin-top: 0px;
				padding-top: 20px;
				font-family: 'Poppins';
				color: #f8f1df;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				background-color: #a7516c;
				padding-bottom: 0px;
				margin-bottom: 10px;
			`}>
				<div css={css`
					margin-left: 10px;
				`}><BackButtonW /></div>

				<div css={css`
					margin-left: 0px;
					font-family: 'Poppins' sustem-ui;
					font-size: 18px;
					font-weight: 500;
				`}>
					Add Ingredients</div>
				<div css={css`
						align-self: stretch;
						padding: 25px;
					`}></div>
			</header>

			<div className="peach-section">
				<div css={css`
					display: flex;
					flex-direction: row;
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
						border-radius: 0px;
				`}
						src="https://placehold.co/100x100" />
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
					`}>Peach</div>
					<div css={css`
						display: flex;
						flex-direction: column;
						align-items: end;
					`}>
						<span>Quantity Left</span> <span>2</span>
					</div>
					<div css={css`
						display: flex;
						flex-direction: column;
						align-items: end;
					`}>
						<span>Expiration Date</span> <span>2023/11/01</span>
					</div>
				</div>
			</div>

			<div css={css`
				display: flex;
				flex-direction: column;
				align-items: start;
				font-size: 12px;
				font-weight: 400;
				margin-top: 20px;
			`} className="recipe-recommendations">
				<div css={css`
					font-size: 15px;
					font-weight: 400;
					margin-left: 50px;
				`}
				>Recipe Recommendations</div>
				<ul css={css`
					display: flex;
					flex-direction: row;
					justify-self: center;
					margin-left: 30px;
				`}>
					<div css={css`
						margin-left: 0px;
					`}>
						<li>Peach Cobbler</li>
						<li>Baked Peaches</li>
						<li>Fresh Peach Cake</li>
					</div>
					<div css={css`
						margin-left: 50px;
					`}>
						<li>Sangria</li>
						<li>Peach Fritters</li>
						<li>Peach Marmalade</li>
					</div>

				</ul>
			</div>

			<div className="actions">
				<div css={css`
						font-family: 'Poppins' system-ui;
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
						font-size:15px;
						background-color: #c36b85;`} onClick={() => setQuantity(quantity - 1)}>-</button>

						<div css={css`
							margin: 15px;
							font-family: 'Poppins', system-ui;
							font-size: 15px;
							display: flex;
							flex-direction: column;
							align-content: start;
						`}>
							{quantity}
							<div css={css`
						align-self: stretch;
						padding: 13px 0;
					`}></div>
						</div>


						<button css={css`
						display: flex;
						flex-direction: column;
						align-self: start;
						padding: auto;
						color: #e6b3b3;
						font-size:15px;
						background-color: #c36b85;`} onClick={() => setQuantity(quantity + 1)}>+</button>
					</div>
					<button>Add to Fridge</button>
					<button>Add to Shopping List</button>
				</div>

			</div>
		</div>
	);

}