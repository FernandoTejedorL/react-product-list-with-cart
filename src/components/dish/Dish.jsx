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

const Dish = ({
	image,
	category,
	name,
	price,
	actionAdd,
	quantity,
	actionIncrease,
	actionDecrease,
	id,
	cart
}) => {
	const isInCart = cart.some(item => item.id === id);

	return (
		<StyledDish>
			<picture>
				<source media='(min-width: 1023px )' srcSet={image.desktop} />
				<source media='(min-width: 767px )' srcSet={image.tablet} />
				<source media='(min-width: 359px )' srcSet={image.mobile} />
				<StyledImage $isInCart={isInCart} src='{image.mobile}' alt='' />
			</picture>
			{!isInCart && (
				<StyledAddToCart onClick={actionAdd}>
					<img src='./assets/images/icon-add-to-cart.svg' alt='' />
					<span>Add to Cart</span>
				</StyledAddToCart>
			)}
			{isInCart && (
				<StyledHiddenAddToCart>
					<StyledDecreaseIncreaseButton onClick={actionDecrease}>
						<img src='./assets/images/icon-decrement-quantity.svg' alt='' />
					</StyledDecreaseIncreaseButton>
					<span>{quantity}</span>
					<StyledDecreaseIncreaseButton onClick={actionIncrease}>
						<img src='./assets/images/icon-increment-quantity.svg' alt='' />
					</StyledDecreaseIncreaseButton>
				</StyledHiddenAddToCart>
			)}
			<StyledNameAndPrice>
				<StyledCategory>{category}</StyledCategory>
				<StyledName>{name}</StyledName>
				<StyledPrice>${price.toFixed(2)}</StyledPrice>
			</StyledNameAndPrice>
		</StyledDish>
	);
};

export default Dish;
