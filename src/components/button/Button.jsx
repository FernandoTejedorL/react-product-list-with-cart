import { StyledButton } from './button.styles';

const Button = ({ title, setNewOrder }) => {
	return <StyledButton onClick={setNewOrder}>{title}</StyledButton>;
};

export default Button;
