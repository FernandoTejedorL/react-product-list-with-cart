import {
	StyledCarbonNeutral,
	StyledCartButton,
	StyledCartContainer,
	StyledCartHeader,
	StyledImageToHide,
	StyledOrderTotal,
	StyledTextToHide,
	StyledTotalPrice
} from './cart.styles';

const Cart = ({ children, totalCount, totalPrice, hideElements }) => {
	const letsHideElements = hideElements(); // aqui tengo que meter la función porque no es como el resto de componentes que se renderizan con cada acción

	return (
		<StyledCartContainer>
			<StyledCartHeader>Your Cart ({totalCount})</StyledCartHeader>
			<div>{children}</div>
			{letsHideElements && (
				<StyledOrderTotal>
					<span>Order Total</span>
					<StyledTotalPrice>${totalPrice.toFixed(2)}</StyledTotalPrice>
				</StyledOrderTotal>
			)}
			{letsHideElements && (
				<StyledCarbonNeutral>
					<img src='./assets/images/icon-carbon-neutral.svg' alt='' />
					<span>
						This is a <b>carbon-neutral</b> delivery
					</span>
				</StyledCarbonNeutral>
			)}
			{letsHideElements && <StyledCartButton>Confirm Order</StyledCartButton>}
			{!letsHideElements && (
				<StyledImageToHide
					src='/assets/images/illustration-empty-cart.svg'
					alt=''
				/>
			)}
			{!letsHideElements && (
				<StyledTextToHide>Your added items will appear here</StyledTextToHide>
			)}
		</StyledCartContainer>
	);
};

export default Cart;
