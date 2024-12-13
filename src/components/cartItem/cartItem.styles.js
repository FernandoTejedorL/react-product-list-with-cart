import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledCartItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 0 16px 0;
	border-bottom: 1px solid ${COLORS.rose100};
`;

const StyledNameAndAmounts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 8px;
`;

const StyledItemName = styled.span`
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.rose900};
`;

const StyledAmountAndPrices = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 8px;
`;

const StyledAmount = styled.span`
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.red};
`;

const StyledUnitaryPrice = styled.span`
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.rose500};
`;

const StyledPricePerItem = styled.span`
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.rose500};
`;

const StyledDeleteItem = styled.button`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	border: 1px solid ${COLORS.rose400};
	background-color: ${COLORS.white};

	@media (hover: hover) {
		&:hover {
			border: 1px solid ${COLORS.rose900};
		}
	}
`;

export {
	StyledCartItem,
	StyledNameAndAmounts,
	StyledItemName,
	StyledAmountAndPrices,
	StyledAmount,
	StyledUnitaryPrice,
	StyledPricePerItem,
	StyledDeleteItem
};
