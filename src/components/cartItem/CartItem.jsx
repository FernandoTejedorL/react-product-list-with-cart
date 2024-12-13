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

const CartItem = () => {
	return (
		<StyledCartItem>
			<StyledNameAndAmounts>
				<StyledItemName></StyledItemName>
				<StyledAmountAndPrices>
					<StyledAmount></StyledAmount>
					<StyledUnitaryPrice></StyledUnitaryPrice>
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
