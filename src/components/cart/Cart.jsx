import CartItem from '../cartItem/CartItem';
import { deleteFromCart } from '../utils/cart';
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

const Cart = ({ cart, setCart, totalCount, totalPrice }) => {
	const isEmptyCart = cart.length === 0;

	return (
		<StyledCartContainer>
			<StyledCartHeader>Your Cart ({totalCount})</StyledCartHeader>
			<div>
				{cart.map(item => (
					<CartItem
						actionDelete={() => deleteFromCart(setCart, cart, item)}
						key={item.id}
						{...item}
					/>
				))}
			</div>
			{!isEmptyCart && (
				<StyledOrderTotal>
					<span>Order Total</span>
					<StyledTotalPrice>${totalPrice.toFixed(2)}</StyledTotalPrice>
				</StyledOrderTotal>
			)}
			{!isEmptyCart && (
				<StyledCarbonNeutral>
					<img src='./assets/images/icon-carbon-neutral.svg' alt='' />
					<span>
						This is a <b>carbon-neutral</b> delivery
					</span>
				</StyledCarbonNeutral>
			)}
			{!isEmptyCart && <StyledCartButton>Confirm Order</StyledCartButton>}
			{isEmptyCart && (
				<StyledImageToHide
					src='/assets/images/illustration-empty-cart.svg'
					alt=''
				/>
			)}
			{isEmptyCart && (
				<StyledTextToHide>Your added items will appear here</StyledTextToHide>
			)}
		</StyledCartContainer>
	);
};

export default Cart;
