import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledDish = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-content: flex-start;
	height: 319px;

	@media screen and (width>=1024px) {
		height: 347px;
	}
`;

const StyledImage = styled.img`
	width: 327px;
	height: 212px;
	border-radius: 10px;
	border: ${props => (props.toHide ? `2px solid ${COLORS.red}` : 'none')};
	@media screen and (width>=768px) {
		width: 212px;
	}

	@media screen and (width>=1024px) {
		width: 250px;
		height: 240px;
	}
`;

const StyledAddToCart = styled.button`
	position: absolute;
	top: 190px;
	left: 83.5px;
	display: flex;
	justify-content: space-between;
	width: 160px;
	height: 44px;
	border: 1px solid ${COLORS.rose400};
	padding: 12px 28px;
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.semibold};
	padding: 12.5px 28px;
	border-radius: 20px;
	background-color: ${COLORS.white};
	color: ${COLORS.rose900};

	@media screen and (width>=768px) {
		left: 26.67px;
	}

	@media screen and (width>=1024px) {
		top: 218px;
		left: 45.33px;
	}

	@media (hover: hover) {
		&:hover {
			color: ${COLORS.red};
		}
	}
`;

const StyledHiddenAddToCart = styled.div`
	position: absolute;
	top: 190px;
	left: 83.5px;
	display: flex;
	justify-content: space-between;
	width: 160px;
	height: 44px;
	border: 1px solid ${COLORS.rose400};
	padding: 12px 12px;
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.white};
	padding: 12.5px 12px;
	border-radius: 20px;
	background-color: ${COLORS.red};

	@media screen and (width>=768px) {
		left: 26.67px;
	}

	@media screen and (width>=1024px) {
		top: 218px;
		left: 45.33px;
	}
`;

const StyledDecreaseIncreaseButton = styled.button`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	border: 1px solid ${COLORS.white};
	background-color: ${COLORS.red};

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.white};
		}
		&:hover img {
			filter: invert(32%) sepia(92%) saturate(6286%) hue-rotate(17deg)
				brightness(94%) contrast(88%);
		}
	}
`;

const StyledNameAndPrice = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const StyledCategory = styled.span`
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.rose500};
`;
const StyledName = styled.span`
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.rose900};
`;
const StyledPrice = styled.span`
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.red};
`;

export {
	StyledDish,
	StyledImage,
	StyledAddToCart,
	StyledHiddenAddToCart,
	StyledDecreaseIncreaseButton,
	StyledNameAndPrice,
	StyledCategory,
	StyledName,
	StyledPrice
};
