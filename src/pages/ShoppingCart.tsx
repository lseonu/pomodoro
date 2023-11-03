import { css } from "@emotion/react"
import { ArrowBackUp } from 'tabler-icons-react'

export const ShoppingCart: React.FC = () => {
	return (
		<div className="shopping-list-container">
			<header css={css`
				margin-top: 30px;
			`}>
				<button className="back-button"> <ArrowBackUp
					size={20}
					strokeWidth={2}
					color={'#a7516c'}
				/></button>
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
					`}>
					<img css={css`
						display: flex;

						width: 80px;
						height: 80px;
						border-radius: 50px;
					`}
						src="https://placehold.co/100x100" />
				</div>

				<div css={css`
						margin-left: 50px;
					`}>
					<div css={css`
						align-self: stretch;
						padding: 13px 0;
					`}></div>
					<div css={css`
						align-items: center;
						margin-bottom: 0px;
						font-size: 20px;
						font-weight: 500;
					`}>Shopping List</div>
					<p css={css`
						align-self: center;
					`}>@'s Shopping List</p>
				</div>
			</div>
			<div css={css`
				margin: 25px;
				font-family: 'Poppins';
				font-size: 15px;
			`}>
				<section className="shoppinglist">
					<ListSection title="Refrigerator" items={['Shrimp', 'Egg', 'Milk']} />
					<ListSection title="Freezer" items={['Frozen Blueberry', 'Scallop', 'Chocolate Ice Cream']} />
					<ListSection title="Pantry" items={[]} />
				</section>
			</div>


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
						padding: 12px 0;
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