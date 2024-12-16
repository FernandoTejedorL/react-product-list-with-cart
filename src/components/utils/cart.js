//aquí meteriamos las funciones que se usan en diferentes sitios

const deleteFromCart = (setCart, cart, dish) => {
	setCart(cart.filter(item => item.id !== dish.id));
};

export { deleteFromCart };
