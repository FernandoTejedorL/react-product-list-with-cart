import {
	StyledButtonsContainer,
	StyledHeader,
	StyledTop
} from './header.styles';

const Header = ({ children }) => {
	return (
		<StyledTop>
			<StyledHeader>Desserts</StyledHeader>
			<StyledButtonsContainer>{children}</StyledButtonsContainer>
		</StyledTop>
	);
};

export default Header;
