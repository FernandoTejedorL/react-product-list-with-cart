import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledItemOrdered = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding: 16px 0 16px 0;
	border-bottom: 1px solid ${COLORS.rose100};
`;

const StyledImgAndText = styled.div`
	display: flex;
	gap: 16px;
`;

const StyledThumb = styled.img`
	height: 48px;
	width: 48px;
	border-radius: 4px;
`;

const StyledTexts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const StyledOrderName = styled.span`
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.rose900};
`;

const StyledOrderedAmountAndPrices = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 8px;
`;

const StyledOrderedAmount = styled.span`
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.red};
`;

const StyledOrderedUnitaryPrice = styled.span`
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.rose500};
`;

const StyledTotalPerItem = styled.span`
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.rose900};
`;

export {
	StyledItemOrdered,
	StyledImgAndText,
	StyledThumb,
	StyledTexts,
	StyledOrderName,
	StyledOrderedAmountAndPrices,
	StyledOrderedAmount,
	StyledOrderedUnitaryPrice,
	StyledTotalPerItem
};
