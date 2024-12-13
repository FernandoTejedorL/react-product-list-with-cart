import { useState } from 'react';
import Button from './components/button/Button';
import { DISHES } from './components/constants/deserts-info';
import DishesContainer from './components/dishesContainer/DishesContainer';
import Dish from './components/dish/Dish';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';
import Cart from './components/cart/Cart';

const App = () => {
	const [order, setOrder] = useState('default');
	const newOrder = (DISHES, order) => {
		let newDishes = [...DISHES];
		if (order === 'default') {
			return newDishes;
		} else if (order === 'name') {
			return newDishes.sort((a, b) => a.name.localeCompare(b.name));
		} else if (order === 'price') {
			return newDishes.sort((a, b) => a.price - b.price);
		}
	};

	return (
		<>
			<GlobalStyles />

			<Header text={order}>
				<Button setNewOrder={() => defaultOrder(setOrder)} title={'Default'} />
				<Button setNewOrder={() => nameOrder(setOrder)} title={'Name'} />
				<Button setNewOrder={() => priceOrder(setOrder)} title={'Price'} />
			</Header>
			<Main>
				<DishesContainer>
					{newOrder(DISHES, order).map(dish => (
						<Dish key={dish.id} {...dish} />
					))}
				</DishesContainer>
				<Cart></Cart>
			</Main>
		</>
	);
};

const nameOrder = setOrder => {
	setOrder('name');
};

const priceOrder = setOrder => {
	setOrder('price');
};

const defaultOrder = setOrder => {
	setOrder('default');
};

export default App;
