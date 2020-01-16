import React, { createContext, useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import DatoCMSData from '../DatoCMS/DatoCMS';

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
  filterPlants: [],
  cartItemsCount: 0,
  cartTotal: 0,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  type: '',
  searchName: '',
  hex1: '#B5B5B5',
  hex2: '#485550',
  hex3: '#4B6358',
  changeColor: () => {},
  clearColor: () => {},
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
  const [searchName, setSearchName] = useState('');
  const [hex1, setHex1] = useState('#B5B5B5');
  const [hex2, setHex2] = useState('#485550');
  const [hex3, setHex3] = useState('#4B6358');

  const changeColor = e => {
    const color1 = e.target.getAttribute('data-hex1');
    const color2 = e.target.getAttribute('data-hex2');
    const color3 = e.target.getAttribute('data-hex3');
    setHex1(color1);
    setHex2(color2);
    setHex3(color3);
  };
  const clearColor = () => {
    setHex1('#B5B5B5');
    setHex2('#485550');
    setHex3('#4B6358');
  };

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
    const plantSlug = templatePlants.find(plant => plant.plantSlug === slug);
    return plantSlug;
  };

  const getPlantsData = async () => {
    const response = await DatoCMSData.items.all().then(data => {
      setPlants(dataList(data));
      return response;
    });
  };

  const handleChangeSearch = e => {
    e.preventDefault();
    const value = e.target.value;
    setSearchName(value);
  };

  const handleFilteringPlantsByName = () => {
    let tempPlants = [...plants];
    if (searchName !== '') {
      tempPlants = plants.filter(plant => {
        const regex = new RegExp(searchName, 'gi');
        return plant.plantTitle.match(regex);
      });
      return tempPlants;
    }
    setFiltredPlants(tempPlants);
    return tempPlants;
  };

  // const filterPlants = () => {
  //   let tempPlants = [...plants];
  //   setPrice(parseInt(price, 10));

  //   if (complexStateInitial.searchName !== '') {
  //     tempPlants = tempPlants.filter(plant => {
  //       const regex = new RegExp(searchName, 'gi');
  //       return plant.plantTitle.match(regex);
  //     });
  //   }
  //   if (complexStateInitial.type !== 'all') {
  //     tempPlants = tempPlants.filter(plant => plant.plantType === type);
  //   }
  //   tempPlants = tempPlants.filter(plant => plant.plantPrice <= price);

  //   setFiltredPlants(tempPlants);
  // };

  useEffect(() => {
    getPlantsData();
    setMaxPrice(Math.max(...plants.map(plant => plant.plantPrice)));
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
        hex1,
        hex2,
        hex3,
        changeColor,
        clearColor,
        handleChangeSearch,
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
