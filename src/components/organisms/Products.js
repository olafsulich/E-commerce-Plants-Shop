import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from '../molecules/Product';
import Text from '../atoms/Text/Text';

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
const StyledNoMatchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Products = ({ plants }) => {
  if (plants.length === 0) {
    return (
      <StyledNoMatchWrapper>
        <Text main>No plants matched your search</Text>
      </StyledNoMatchWrapper>
    );
  }
  return (
    <StyledWrapper>
      {plants.map(plant => (
        <Product
          key={plant.plantId}
          title={plant.plantTitle}
          src={plant.plantImage.title}
          slug={plant.plantSlug}
        />
      ))}
    </StyledWrapper>
  );
};
Products.propTypes = {
  plants: PropTypes.array.isRequired,
};

export default Products;
