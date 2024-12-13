import styled from 'styled-components';

const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: start;
	}
`;
export { StyledMain };
