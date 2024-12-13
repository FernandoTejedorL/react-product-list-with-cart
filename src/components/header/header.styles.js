import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledTop = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-bottom: 26px;
`;

const StyledHeader = styled.h1`
	font-size: ${FONT_SIZE.xl};
	font-weight: ${FONT_WEIGHT.bold};
	line-height: ${LINE_HEIGHT.high};
	color: ${COLORS.rose900};
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 18.45px;
`;
export { StyledHeader, StyledTop, StyledButtonsContainer };
