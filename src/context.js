import React from 'react';
import PropTypes from 'prop-types';
import productsData from './data';

const PlantContext = React.createContext();

class PlantProvider extends React.Component {
  state = {
    plants: [],
    filtredPlants: [],
  };

  componentDidMount() {
    const plants = this.dataList(productsData);
    this.setState({
      plants,
    });
  }

  getPlant = slug => {
    const { plants } = this.state;
    const templatePlants = [...plants];
    const plantSlug = templatePlants.find(plant => plant.slug === slug);
    return plantSlug;
  };

  dataList = productsDataItems => {
    const template = productsDataItems.map(item => {
      const singlePlant = { ...item };
      return singlePlant;
    });
    return template;
  };

  render() {
    const { children } = this.props;
    return (
      <PlantContext.Provider value={{ ...this.state, getPlant: this.getPlant }}>
        {children}
      </PlantContext.Provider>
    );
  }
}

PlantProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
const PlantConsumer = PlantContext.Consumer;

export { PlantProvider, PlantConsumer, PlantContext };
