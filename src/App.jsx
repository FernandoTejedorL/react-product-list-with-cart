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
	const quantityToDish = id => {
		const dish = cart.find(item => item.id === id);
		return dish ? dish.quantity : 0;
	};

	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
	console.log(totalQuantity);

	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	console.log(totalPrice);

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
							actionIncrease={() => incrementQuantity(cart, dish, setCart)}
							actionDecrease={() => decrementQuantity(cart, dish, setCart)}
							toHide={toHide(dish.id)}
							quantity={quantityToDish(dish.id)}
							key={dish.id}
							{...dish}
						/>
					))}
				</DishesContainer>
				<Cart totalCount={totalQuantity} totalPrice={totalPrice}>
					{cart.map(item => (
						<CartItem
							actionDelete={() => deleteFromCart(setCart, cart, item)}
							key={item.id}
							{...item}
						/>
					))}
				</Cart>
			</Main>
		</>
	);
};

const actionAdd = (cart, dish, setCart) => {
	setCart([...cart, { ...dish, quantity: 1 }]);
};

const incrementQuantity = (cart, dish, setCart) => {
	setCart(
		cart.map(item =>
			item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
		)
	);
};

const decrementQuantity = (cart, dish, setCart) => {
	setCart(
		cart
			.map(item => {
				if (item.id === dish.id && item.quantity >= 1) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			})
			.filter(item => item.quantity > 0)
	);
};

const deleteFromCart = (setCart, cart, dish) => {
	setCart(cart.filter(item => item.id !== dish.id));
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
