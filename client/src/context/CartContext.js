import React, { createContext, useState, useEffect } from 'react';
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
  loading: false,
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [plants, setPlants] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [filtredPlants, setFiltredPlants] = useState([]);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');
  const [searchName, setSearchName] = useState('');
  const [hex1, setHex1] = useState('#B5B5B5');
  const [hex2, setHex2] = useState('#485550');
  const [hex3, setHex3] = useState('#4B6358');
  const [loading, setLoading] = useState(true);
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
  const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));

  const getPlant = slug => {
    const templatePlants = [...plants];
    const plantSlug = templatePlants.find(plant => plant.plantSlug === slug);
    return plantSlug;
  };

  const handleChangeSearch = e => {
    e.preventDefault();
    const value = e.target.value;
    setSearchName(value);
  };

  useEffect(() => {
    handleFilteringPlantsByName();
  }, [searchName]);

  const handleFilteringPlantsByName = () => {
    let tempPlants = [...plants];
    if (searchName !== '') {
      tempPlants = plants.filter(plant => {
        const regex = new RegExp(searchName, 'gi');
        return plant.plantTitle.match(regex);
      });
      setFiltredPlants(tempPlants);
      return tempPlants;
    }
    setFiltredPlants(tempPlants);
    return tempPlants;
  };

  const handleChangeType = e => {
    e.preventDefault();
    const value = e.target.value;
    setType(value);
  };

  useEffect(() => {
    handleFilteringPlantsByType();
  }, [type]);

  const handleFilteringPlantsByType = () => {
    let tempPlants = [...plants];
    if (type !== 'all') {
      tempPlants = tempPlants.filter(plant => plant.plantType === type);
    }
    setFiltredPlants(tempPlants);
    return tempPlants;
  };

  const handleChangePrice = e => {
    e.preventDefault();
    const value = e.target.value;
    setPrice(value);
  };

  useEffect(() => {
    handleFilteringPlantsByPrice();
  }, [price]);

  const handleFilteringPlantsByPrice = () => {
    let tempPlants = [...plants];
    tempPlants = tempPlants.filter(plant => plant.plantPrice <= price);
    setFiltredPlants(tempPlants);
    return tempPlants;
  };

  const dataList = productsDataItems => {
    const template = productsDataItems.map(item => {
      const singlePlant = { ...item };
      return singlePlant;
    });
    return template;
  };

  useEffect(() => {
    const getPlantsData = async () => {
      const response = await DatoCMSData.items.all().then(dataPlant => {
        setPlants(dataList(dataPlant));
        setMaxPrice(Math.max(...dataPlant.map(plant => plant.plantPrice)));
        setMinPrice(Math.min(...dataPlant.map(plant => plant.plantPrice)));
        setFiltredPlants(dataPlant);
        setPrice(Math.max(...dataPlant.map(plant => plant.plantPrice)));
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
        setLoading(false);
      });
      return response;
    };
    getPlantsData();
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        handleChangeSearch,
        handleChangeType,
        handleChangePrice,
        changeColor,
        clearColor,
        getPlant,
        cartItemsCount,
        cartTotal,
        plants,
        filtredPlants,
        price,
        maxPrice,
        minPrice,
        type,
        searchName,
        hex1,
        hex2,
        hex3,
        loading,
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
