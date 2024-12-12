import { useState } from 'react';
import Button from './components/button/Button';
import { DISHES } from './components/constants/deserts-info';
import DishesContainer from './components/dishesContainer/DishesContainer';
import EachDish from './components/eachDish/EachDish';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [order, setOrder] = useState('default');

	return (
		<>
			<GlobalStyles />

			<Header>
				<Button
					setNewOrder={event => defaultOrder(event, order, setOrder)}
					title={'Default'}
				/>
				<Button
					setNewOrder={event => nameOrder(event, order, setOrder)}
					title={'Name'}
				/>
				<Button
					setNewOrder={event => priceOrder(event, order, setOrder)}
					title={'Price'}
				/>
			</Header>
			<Main>
				<DishesContainer>
					{DISHES.map(dish => (
						<EachDish key={dish.dishId} {...dish} />
					))}
				</DishesContainer>
			</Main>
		</>
	);
};

const nameOrder = (order, event, setOrder) => {
	setOrder('name');
	console.log(order, event);
};

const priceOrder = (order, event, setOrder) => {
	setOrder('price');
	console.log(order, event);
};

const defaultOrder = (order, event, setOrder) => {
	setOrder('default');
	console.log(order, event);
};

export default App;
