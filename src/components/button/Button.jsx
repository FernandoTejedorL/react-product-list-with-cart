import { StyledButton } from './button.styles';

const Button = ({ title, setNewOrder, $state, $active }) => {
	return (
		<StyledButton $state={$state} $active={$active} onClick={setNewOrder}>
			{title}
		</StyledButton>
	);
};

export default Button;
