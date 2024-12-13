import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledButton = styled.button`
	height: 34px;
	width: 76.87px;
	border-radius: 20px;
	background-color: ${COLORS.white};
	border: 1px solid ${COLORS.rose400};
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.semibold};

	@media screen and (width>=768px) {
		width: 79px;
	}

	@media screen and (width>=1024px) {
		width: 100px;
	}

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.rose400};
		}
	}
`;
export { StyledButton };
