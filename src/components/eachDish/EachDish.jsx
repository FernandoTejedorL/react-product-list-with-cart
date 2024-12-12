const EachDish = ({ image, category, name, price }) => {
	return (
		<div>
			<picture>
				<source media='(min-width: 1023px )' srcSet={image.desktop} />
				<source media='(min-width: 767px )' srcSet={image.tablet} />
				<source media='(min-width: 359px )' srcSet={image.mobile} />
				<img src='{image.mobile}' alt='' />
			</picture>
			<button>
				<img src='./assets/images/icon-add-to-cart.svg' alt='' />
				<span>Add to Cart</span>
			</button>
			<div>
				<button>
					<img src='./assets/images/icon-decrement-quantity.svg' alt='' />
				</button>
				<span>1</span>
				<button>
					<img src='./assets/images/icon-increment-quantity.svg' alt='' />
				</button>
			</div>
			<div>
				<span>{category}</span>
				<span>{name}</span>
				<span>${price}</span>
			</div>
		</div>
	);
};

export default EachDish;
