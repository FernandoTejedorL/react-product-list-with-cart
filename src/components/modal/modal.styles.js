import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from '../../styles/fonts';

const StyledModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
	position: relative;
	display: flex;
	min-height: 299px;
	width: 327px;
	flex-direction: column;
	background-color: ${COLORS.white};
	border-radius: 8px;
	padding: 24px;
	gap: 24px;

	@media screen and (width>=768px) {
		width: 688px;
	}
`;

const StyledVerification = styled.img`
	height: 48px;
	width: 48px;
	border-radius: 50%;
`;

const StyledVerificationTitle = styled.span`
	font-size: ${FONT_SIZE.xl};
	line-height: ${LINE_HEIGHT.high};
	font-weight: ${FONT_WEIGHT.bold};
	color: ${COLORS.rose900};
`;

const StyledHope = styled.span`
	font-size: ${FONT_SIZE.m};
	color: ${COLORS.rose500};
`;

const StyledModalTotal = styled.div`
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledTotalText = styled.span`
	font-size: ${FONT_SIZE.s};
	color: ${COLORS.rose900};
`;

const StyledTotalAmount = styled.span`
	font-size: ${FONT_SIZE.l};
	font-weight: ${FONT_WEIGHT.bold};
	color: ${COLORS.rose900};
`;

const StyledOrderButton = styled.button`
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

const StyledOrderedItems = styled.div`
	background-color: ${COLORS.rose50};
	border-radius: 8px;
	padding-inline: 24px;
`;

export {
	StyledModalBackground,
	StyledModal,
	StyledVerification,
	StyledVerificationTitle,
	StyledHope,
	StyledModalTotal,
	StyledTotalText,
	StyledTotalAmount,
	StyledOrderButton,
	StyledOrderedItems
};
