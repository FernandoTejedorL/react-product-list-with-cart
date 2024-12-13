import styled from 'styled-components';

const StyledDishesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-inline: 0 11px;
	margin-bottom: 32px;
	width: 327px;

	@media screen and (width>=768px) {
		flex-direction: row;
		flex-wrap: wrap;
		width: 688px;
	}

	@media screen and (width>=1024px) {
		width: 800px;
	}
`;

export { StyledDishesContainer };
