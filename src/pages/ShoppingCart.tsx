import { css } from "@emotion/react"
import { ArrowBackUp } from 'tabler-icons-react'
import BackButton from "./BackButton" // Import the BackButton component


export const ShoppingCart: React.FC = () => {
	return (
		<div className="shopping-list-container">
			<header css={css`
				margin-top: 20px;
			`}>
				<BackButton />
			</header>

			<div css={css`
				display: flex;
				flex-direction: row;
				margin-left: 30px;
				`} className="list-title">
				<div css={css`
						display: flex;
						flex-direction: column;
						align-self: center;
						margin-bottom: 10px;
					`}>
					<img css={css`
						display: flex;

						width: 60px;
						height: 60px;
						border-radius: 30px;
					`}
						src="https://placehold.co/100x100" />
				</div>

				<div css={css`
						margin-left: 50px;
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-top: 0px;
						margin-bottom: 0px;
					`}>

					<div css={css`
						margin-top: 10px;
						margin-bottom: 0px;
						font-size: 18px;
						font-weight: 500;
					`}>Shopping List</div>
					<p css={css`
						margin-top:0px;
						align-self: start;
						font-size: smaller;
					`}>@'s Shopping List</p>
				</div>
			</div>
			<div css={css`
				margin-left: 25px;
				font-family: 'Poppins';
				font-size: 15px;
			`}>
				<section className="shoppinglist">
					<ListSection title="Refrigerator" items={['Shrimp', 'Egg', 'Milk']} />
					<ListSection title="Freezer" items={['Frozen Blueberry', 'Scallop', 'Chocolate Ice Cream']} />
					<ListSection title="Pantry" items={[]} />
				</section>
			</div>
			<div css={css`
						align-self: stretch;
						padding: 12px 0;
					`}></div>
		</div>

	)
}

interface ListSectionProps {
	title: string;
	items: string[];
}


function ListSection({ title, items }: ListSectionProps) {
	return (
		<div className="list-section">
			<div css={css`
						align-self: stretch;
						padding: 10px 0;
					`}>
				<div css={css`
						height: 1px;
						width: 100%;
						background:#a7516c; 
					`}>
				</div>
			</div>
			<div css={css`
				font-family: inherit;
				font-size: 17px;
				font-weight: 500;
			`}>{title}</div>
			<ul css={css`
				list-style-type:none;
			`}
			>
				{items.map(item => (
					<li css={css`
						margin-left: 0px;
					`}
						key={item}>
						<input css={css`
						margin-left: 0px;
					`} type="checkbox" id={item} name={item} />
						<label css={css`
							font-size: 15px;
							margin-left: 12px;
						`} htmlFor={item}>{item}</label>
					</li>
				))}
			</ul>
			<button css={css`
				color: #a7516c;
			`} className="add-more-button">+ Add More</button>
		</div>
	);
}