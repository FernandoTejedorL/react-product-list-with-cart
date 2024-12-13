import {
	StyledCarbonNeutral,
	StyledCartButton,
	StyledCartContainer,
	StyledCartHeader,
	StyledOrderTotal,
	StyledTotalPrice
} from './cart.styles';

const Cart = ({ children }) => {
	return (
		<StyledCartContainer>
			<StyledCartHeader>Your Cart (7)</StyledCartHeader>
			<div>{children}</div>
			<StyledOrderTotal>
				<span>Order Total</span>
				<StyledTotalPrice>$46.50</StyledTotalPrice>
			</StyledOrderTotal>
			<StyledCarbonNeutral>
				<img src='./assets/images/icon-carbon-neutral.svg' alt='' />
				<span>
					This is a <b>carbon-neutral</b> delivery
				</span>
			</StyledCarbonNeutral>
			<StyledCartButton>Confirm Order</StyledCartButton>
		</StyledCartContainer>
	);
};

export default Cart;
