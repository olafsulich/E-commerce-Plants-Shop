import React from 'react';
import styled from 'styled-components';
import { PlantContext } from '../../context';
import Product from '../molecules/Product';

const StyledWrapper = styled.section`
  margin: 0 3rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 2rem;
  max-width: 100%;
  @media only screen and (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1000px) {
    grid-column-gap: 3rem;
    max-width: 70vw;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1600px) {
    grid-column-gap: 3rem;
    max-width: 60vw;
    margin: 0 auto;
  }
`;

class Products extends React.Component {
  static contextType = PlantContext;

  render() {
    let { plants } = this.context;
    plants = plants.map(plant => {
      return <Product key={plant.id} title={plant.title} src={plant.src} slug={plant.slug} />;
    });

    return <StyledWrapper>{plants}</StyledWrapper>;
  }
}

export default Products;
