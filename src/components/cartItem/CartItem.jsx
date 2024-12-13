import {
	StyledAmount,
	StyledAmountAndPrices,
	StyledCartItem,
	StyledDeleteItem,
	StyledItemName,
	StyledNameAndAmounts,
	StyledPricePerItem,
	StyledUnitaryPrice
} from './cartItem.styles';

const CartItem = ({ name, price, quantity, actionDelete }) => {
	return (
		<StyledCartItem>
			<StyledNameAndAmounts>
				<StyledItemName>{name}</StyledItemName>
				<StyledAmountAndPrices>
					<StyledAmount>{quantity}x</StyledAmount>
					<StyledUnitaryPrice>@${price.toFixed(2)}</StyledUnitaryPrice>
					<StyledPricePerItem>
						${(quantity * price).toFixed(2)}
					</StyledPricePerItem>
				</StyledAmountAndPrices>
			</StyledNameAndAmounts>
			<StyledDeleteItem onClick={actionDelete}>
				<img src='./assets/images/icon-remove-item.svg' alt='' />
			</StyledDeleteItem>
		</StyledCartItem>
	);
};

export default CartItem;
