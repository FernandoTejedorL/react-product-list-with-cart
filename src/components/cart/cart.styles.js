import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledCartContainer = styled.div`
	position: relative;
	display: flex;
	min-height: 299px;
	width: 327px;
	flex-direction: column;
	background-color: ${COLORS.white};
	border-radius: 8px;
	padding: 24px;

	@media screen and (width>=768px) {
		width: 688px;
	}

	@media screen and (width>=1024px) {
		width: 384px;
	}
`;

const StyledCartHeader = styled.h3`
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.l};
	color: ${COLORS.red};
`;

const StyledOrderTotal = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px 0 24px 0;
`;

const StyledTotalPrice = styled.span`
	font-size: ${FONT_SIZE.l};
	font-weight: ${FONT_WEIGHT.bold};
	color: ${COLORS.rose900};
`;

const StyledCarbonNeutral = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	padding: 16px 15px;
	background-color: ${COLORS.rose50};
	font-weight: ${FONT_WEIGHT.regular};
	font-size: ${FONT_SIZE.s};
	border-radius: 8px;
`;

const StyledCartButton = styled.button`
	height: 53px;
	color: ${COLORS.white};
	background-color: ${COLORS.red};
	border-radius: 20px;
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.semibold};
	text-align: center;
	padding: 16px;
	margin-top: 24px;
	border: none;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.rose500};
		}
	}
`;

export {
	StyledCartContainer,
	StyledCartHeader,
	StyledOrderTotal,
	StyledTotalPrice,
	StyledCarbonNeutral,
	StyledCartButton
};
