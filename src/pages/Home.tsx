import './ButtonContainer.css';
import { ExclamationMark } from 'tabler-icons-react'
import { ShoppingCart } from 'tabler-icons-react'
import { Search } from 'tabler-icons-react'
import { Menu2 } from 'tabler-icons-react'
import { Link, Outlet } from "react-router-dom"

import { css } from "@emotion/react"
export const Home: React.FC = () => {
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
						<input type="search" placeholder="Add More Ingredients" css={css`
						padding: 4px 18px;
						font-size: 12px;
						border-radius: 4px;
						outline: none;
						border: none;
					`} />
						<Link to="/ingredient">
							<button css={css`
						padding: 5px;
						background-color: #c36b85;
						display: flex;
						flex-direction: column;
						align-items: center;
					`}>
								<Search
									size={20}
									strokeWidth={2}
									color={'#e6b3b3'}
								/>
							</button>
						</Link>
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
					<StorageSection title="Refrigerator" items={[
						{ ingredient: "Shrimp	", quantity: "500g		", expiration: "2023/11/01" },
						// ... add other items
					]} />
					<button css={css`
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
			<div css={css`
				display: flex;
				flex-direction: column;
				align-items:start;
				margin-bottom: 0px;
				font-family: 'Poppins', system-ui;
				font-size: 18px;
				font-weight: 500;
			`}>{title}
				<div css={css`
						align-self: stretch;
						padding: 11px 0;
					`}>
					<div css={css`
						height: 1pt;
						width: 100%;
						background:#a7516c; 
					`}>
					</div>
				</div></div>


			<ul>
				{items.map(item => (
					<li key={item.ingredient}>
						<span>{item.ingredient}</span>
						<span>{item.quantity}</span>
						<span>{item.expiration}</span>
					</li>
				))}

			</ul>

		</div>

	);
}
