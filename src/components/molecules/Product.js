import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const StyledWrapper = styled.section`
//   margin: 0 3rem;
//   display: grid;
//   grid-template-columns: 1fr;
//   justify-items: center;
//   align-items: center;
//   grid-column-gap: 2rem;
//   max-width: 100%;
//   @media only screen and (min-width: 550px) {
//     grid-template-columns: 1fr 1fr;
//   }
//   @media only screen and (min-width: 1000px) {
//     grid-column-gap: 3rem;
//     max-width: 70vw;
//     margin: 0 auto;
//   }
//   @media only screen and (min-width: 1600px) {
//     grid-column-gap: 3rem;
//     max-width: 60vw;
//     margin: 0 auto;
//   }
// `;

const StyledTitleWrapper = styled.div`
  position: relative;
  display: block;
  margin-bottom: 1.4em;
`;

const StyledTitle = styled.h3`
  position: absolute;
  z-index: 2;
  top: 70%;
  left: 0;
  color: #000;
  font-weight: bold;
  font-size: 1.15rem;
  background: #fff;
  padding: 0.6rem 2rem 0.6rem 0.2rem;
`;

const StyledImageWrapper = styled.figure`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Product = ({ title, src, slug }) => (
  <StyledLink to={`/${slug}`}>
    <StyledTitleWrapper key={title}>
      <StyledTitle>{title}</StyledTitle>
      <StyledImageWrapper>
        <StyledImage src={src} alt={`${title} plant`} />
      </StyledImageWrapper>
    </StyledTitleWrapper>
  </StyledLink>
);
Product.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export default Product;
