import {
	StyledImgAndText,
	StyledItemOrdered,
	StyledOrderedAmount,
	StyledOrderedAmountAndPrices,
	StyledOrderedUnitaryPrice,
	StyledOrderName,
	StyledTexts,
	StyledThumb,
	StyledTotalPerItem
} from './modalItem.styles';

const ModalItem = ({ image, name, quantity, price }) => {
	return (
		<StyledItemOrdered>
			<StyledImgAndText>
				<StyledThumb src={image.thumb} alt='' />
				<StyledTexts>
					<StyledOrderName>{name}</StyledOrderName>
					<StyledOrderedAmountAndPrices>
						<StyledOrderedAmount>{quantity}x</StyledOrderedAmount>
						<StyledOrderedUnitaryPrice>
							@${price.toFixed(2)}
						</StyledOrderedUnitaryPrice>
					</StyledOrderedAmountAndPrices>
				</StyledTexts>
			</StyledImgAndText>
			<StyledTotalPerItem>${(quantity * price).toFixed(2)}</StyledTotalPerItem>
		</StyledItemOrdered>
	);
};

export default ModalItem;
