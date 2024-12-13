import { useState } from 'react';
import Button from './components/button/Button';
import { DISHES } from './components/constants/deserts-info';
import DishesContainer from './components/dishesContainer/DishesContainer';
import Dish from './components/dish/Dish';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';
import Cart from './components/cart/Cart';
import CartItem from './components/cartItem/CartItem';

const App = () => {
	const [order, setOrder] = useState('default');
	const [cart, setCart] = useState([]);
	console.log(cart);
	const toHide = id => {
		return cart.some(item => item.id === id);
	};

	return (
		<>
			<GlobalStyles />

			<Header text={order}>
				<Button
					$state='default'
					$active={order}
					setNewOrder={() => setOrder('default')}
					title={'Default'}
				/>
				<Button
					$state='name'
					$active={order}
					setNewOrder={() => setOrder('name')}
					title={'Name'}
				/>
				<Button
					$state='price'
					$active={order}
					setNewOrder={() => setOrder('price')}
					title={'Price'}
				/>
			</Header>
			<Main>
				<DishesContainer>
					{newOrder(DISHES, order).map(dish => (
						<Dish
							actionAdd={() => actionAdd(cart, dish, setCart)}
							toHide={toHide(dish.id)}
							key={dish.id}
							{...dish}
						/>
					))}
				</DishesContainer>
				<Cart>
					{cart.map(item => (
						<CartItem key={item.id} {...item} />
					))}
				</Cart>
			</Main>
		</>
	);
};

const actionAdd = (cart, dish, setCart) => {
	setCart([...cart, dish]);
};

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

export default App;
