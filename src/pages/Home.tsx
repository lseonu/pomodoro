import './ButtonContainer.css';
import { ExclamationMark } from 'tabler-icons-react'
import { ShoppingCart } from 'tabler-icons-react'
import { Search } from 'tabler-icons-react'
import { Menu2 } from 'tabler-icons-react'
import { Link, Outlet } from "react-router-dom"
import React, { useState } from 'react';
import AddIngredients from './AddIngredient'

import { css } from "@emotion/react"
export const Home: React.FC = () => {
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [fridgeIngredients, setFridgeIngredients] = useState([]);

	const openPopup = () => {
		setIsPopupVisible(true);
	};

	const closePopup = () => {
		setIsPopupVisible(false);
	};
	const [searchString, setSearchString] = useState('');
  
	const handleSearchChange = (e) => {
	  setSearchString(e.target.value);
	}
  
	const handleSearch = () => {
	  // Use the `searchString` state for your search logic
	  console.log('Search string:', searchString);
	}

	const addToFridge = (newIngredient) => {
		setFridgeIngredients([...fridgeIngredients, newIngredient]);
	};


	return (
		<div className="container">
			<div css={css`
				background-color: #c36b85;
				padding: 20px;
			`}>
				<header css={css`
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
				`}>
					<div>
						<button css={css`
							background-color: #f9f4e6;
							padding: 4px;
							display: flex;
							flex-direction: column;
							align-items: center;
						`}>
							<Menu2
								size={20}
								strokeWidth={2}
								color={'#e6b3b3'}
							/>
						</button>
					</div>
					<div css={css`
						display: flex;
						flex-direction: row;
						align-items: center;
					`}>
						<input type="search" placeholder="Add More Ingredients" 
						value={searchString}
						onChange={handleSearchChange}
						css={css`
						padding: 4px 18px;
						font-size: 12px;
						border-radius: 4px;
						outline: none;
						border: none;
					`} />
						<button css={css`
						padding: 5px;
						background-color: #c36b85;
						display: flex;
						flex-direction: column;
						align-items: center;
					`} onClick={openPopup}>
								<Search
									size={20}
									strokeWidth={2}
									color={'#e6b3b3'}
								/>
							</button>
							{isPopupVisible && <AddIngredients closePopup={closePopup} searchedItem={searchString} addToFridge={addToFridge}/>}
					</div>

					<img css={css`
						display: flex;
						width: 30px;
						height: 30px;
						border-radius: 20px;
					`}
						src="https://placehold.co/100x100" />
				</header>
			</div>

			<nav>
				<div css={css`
				display: flex;
				flex-direction: column;
				align-items: end;
				`}>
					<button css={css`
						background-color: #f9f4e6;
						color:#a7516c;
						margin-right:2px;
						margin-bottom: 8px;
					`}>Change View Option =</button>
				</div>
			</nav>

			<section css={css`
				background-color: #c36b85;
				margin-left: 70px;
				margin-right: 70px;
				border-radius: 25px;
				outline: none;
				border: none;
			`} className="alerts">
				<div className='button-container'>
					<div css={css`
						align-self: center;
						margin-left: 10px;
					`}
					>
						<ExclamationMark
							size={30}
							strokeWidth={3}
							color={'#f9f4e6'}
						/>
					</div>

					<div css={css`
							display:flex;
							flex-direction:column;
							align-items: center;
							margin-top: 5px;
							font-size: 13px;
					`}>
						<button className='button'>Expires Soon
						</button>

						<div css={css`
							color:#f9f4e6;
							font-size: smaller;
							margin-top: 0px;
							margin-bottom: 15px;
						`} className="expires-soon"> Shrimp, Milk, ...</div>
					</div>

					<div css={css`
						align-self: stretch;
						padding: 13px 0;
					`}></div>

					<div css={css`
						align-self: stretch;
						padding: 12px 0;
					`}>
						<div css={css`
						width: 1px;
						height: 100%;
						background:#f9f4e6; 
					`}>
						</div>
					</div>
					<div css={css`
						align-self: center;
						margin-left: 10px;
					`}
					>
						<ShoppingCart
							size={28}
							strokeWidth={2}
							color={'#f9f4e6'}
						/>
					</div>
					<div css={css`
							display:flex;
							flex-direction:column;
							align-items: center;
							margin-top: 5px;
							font-size: 13px;
					`}>
						<button className='button'>Restock Soon </button>
						<div css={css`
							color:#f9f4e6;
							margin-bottom: 15px;
							font-size: smaller;
						`} className="restock-soon"> Egg, Flour, ...</div>
					</div>
					<div css={css`
						align-self: stretch;
						padding: 12px 0;
					`}></div>
				</div>
			</section>

			<div css={css`
				margin: 25px;
			`}>
				<section className="storage">
				<StorageSection title="Refrigerator" items={fridgeIngredients} />
					<button css={css`
					background-color: #f9f4e6;
					color: #a7516c;
			`} className="add-more-button">+ Add More</button>
					<div css={css`
						align-self: stretch;
						padding: 10px 0;
					`}></div>


					<StorageSection title="Freezer" items={[
						{ ingredient: "Ice Cream	", quantity: "200ml		", expiration: "2024/01/12" },
						// ... add other items
					]} />

					<button css={css`
					background-color: #f9f4e6;
					color: #a7516c;
			`} className="add-more-button">+ Add More</button>
					<div css={css`
						align-self: stretch;
						padding: 10px 0;
					`}></div>

					<StorageSection title="Pantry" items={[
						{ ingredient: "Flour	", quantity: "10g		", expiration: "2024/11/01" },
						// ... add other items
					]} />
					<button css={css`
					background-color: #f9f4e6;
					color: #a7516c;
			`} className="add-more-button">+ Add More</button>

				</section>
			</div>
		</div>
	);
}

interface StorageSectionProps {
	title: string;
	items: Array<{
		ingredient: string;
		quantity: string;
		expiration: string;
	}>;
}

function StorageSection({ title, items }: StorageSectionProps) {
	return (
	  <div className="storage-section">
		<div css={titleContainerStyle}>
		  <div css={titleStyle}>{title}</div>
		  <div css={separatorStyle}></div>
		</div>
  
		<ul css={listStyle}>
		  {items.map((item, index) => (
			<li key={index} css={listItemStyle}>
			  <div css={itemNameStyle}>{item.ingredient}</div>
			  <div css={itemQuantityStyle}>{item.quantity}</div>
			  <div css={itemExpirationStyle}>{item.expiration}</div>
			</li>
		  ))}
		</ul>
	  </div>
	);
  }
  
  const titleContainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'start',
	marginBottom: '10px',
  };
  
  const titleStyle = {
	fontFamily: 'Poppins, system-ui',
	fontSize: '18px',
	fontWeight: 500,
  };
  
  const separatorStyle = {
	height: '1pt',
	width: '100%',
	background: '#a7516c',
  };
  
  const listStyle = {
	listStyleType: 'none',
	padding: 0,
  };
  
  const listItemStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: '8px',
  };
  
  const itemNameStyle = {
	flex: 1,
	marginRight: '16px',
  };
  
  const itemQuantityStyle = {
	flex: 1,
	marginRight: '16px',
  };
  
  const itemExpirationStyle = {
	flex: 1,
  };
  
  export default StorageSection;
  
