const Button = ({ title, setNewOrder }) => {
	return <button onClick={setNewOrder}>{title}</button>;
};

export default Button;
