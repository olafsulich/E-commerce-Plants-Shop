import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import productsData from '../data';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from '../utils/CartUtils';

export const CartContext = createContext({
  plants: [],
  filtredPlants: [],
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  getPlant: () => {},
  handleChange: () => {},
  filterPlants: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  type: '',
  searchName: '',
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [plants, setPlants] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [filtredPlants, setFiltredPlants] = useState([]);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');
  const [searchName, setSearchNem] = useState('');
  // const initialState = {
  //   type: '',
  //   searchName: '',
  //   plantSlug: '',
  // };
  // const [stateMenager, setStateMenager] = useState();

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
  const dataList = productsDataItems => {
    const template = productsDataItems.map(item => {
      const singlePlant = { ...item };
      return singlePlant;
    });
    return template;
  };
  const getPlant = slug => {
    const templatePlants = [...plants];
    const plantSlug = templatePlants.find(plant => plant.slug === slug);
    return plantSlug;
  };

  //   const handleChange = e => {
  //     e.preventDefault();
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     setStateMenager(prevState => ({ ...prevState, [name]: value }), filterPlants);
  //   };

  const filterPlants = () => {
    let tempPlants = [...plants];
    setPrice(parseInt(price, 10));

    if (searchName !== '') {
      tempPlants = tempPlants.filter(plant => {
        const regex = new RegExp(searchName, 'gi');
        return plant.title.match(regex);
      });
    }
    if (type !== 'all') {
      tempPlants = tempPlants.filter(plant => plant.type === type);
    }
    tempPlants = tempPlants.filter(plant => plant.price <= price);

    setFiltredPlants(tempPlants);
  };
  useEffect(() => {
    setPlants(dataList(productsData));
    setMaxPrice(Math.max(...plants.map(plant => plant.price)));
    setFiltredPlants(plants);
    setPrice(maxPrice);
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal,
        plants,
        filtredPlants,
        price,
        maxPrice,
        getPlant,
        type,
        searchName,
        // handleChange,
        filterPlants,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CartProvider;
