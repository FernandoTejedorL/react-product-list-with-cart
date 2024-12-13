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

const CartItem = ({ name, price }) => {
	return (
		<StyledCartItem>
			<StyledNameAndAmounts>
				<StyledItemName>{name}</StyledItemName>
				<StyledAmountAndPrices>
					<StyledAmount></StyledAmount>
					<StyledUnitaryPrice>@${price.toFixed(2)}</StyledUnitaryPrice>
					<StyledPricePerItem></StyledPricePerItem>
				</StyledAmountAndPrices>
			</StyledNameAndAmounts>
			<StyledDeleteItem>
				<img src='./assets/images/icon-remove-item.svg' alt='' />
			</StyledDeleteItem>
		</StyledCartItem>
	);
};

export default CartItem;
