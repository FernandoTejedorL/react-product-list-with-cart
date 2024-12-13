import {
	StyledAddToCart,
	StyledCategory,
	StyledDecreaseIncreaseButton,
	StyledDish,
	StyledHiddenAddToCart,
	StyledImage,
	StyledName,
	StyledNameAndPrice,
	StyledPrice
} from './dish.styles';

const Dish = ({ image, category, name, price }) => {
	return (
		<StyledDish>
			<picture>
				<source media='(min-width: 1023px )' srcSet={image.desktop} />
				<source media='(min-width: 767px )' srcSet={image.tablet} />
				<source media='(min-width: 359px )' srcSet={image.mobile} />
				<StyledImage src='{image.mobile}' alt='' />
			</picture>
			<StyledAddToCart>
				<img src='./assets/images/icon-add-to-cart.svg' alt='' />
				<span>Add to Cart</span>
			</StyledAddToCart>
			<StyledHiddenAddToCart>
				<StyledDecreaseIncreaseButton>
					<img src='./assets/images/icon-decrement-quantity.svg' alt='' />
				</StyledDecreaseIncreaseButton>
				<span>1</span>
				<StyledDecreaseIncreaseButton>
					<img src='./assets/images/icon-increment-quantity.svg' alt='' />
				</StyledDecreaseIncreaseButton>
			</StyledHiddenAddToCart>
			<StyledNameAndPrice>
				<StyledCategory>{category}</StyledCategory>
				<StyledName>{name}</StyledName>
				<StyledPrice>${price.toFixed(2)}</StyledPrice>
			</StyledNameAndPrice>
		</StyledDish>
	);
};

export default Dish;
