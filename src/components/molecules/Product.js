import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTitleWrapper = styled.section`
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
  font-weight: font-weight: ${({ theme }) => theme.bold};;
  font-size: 1.15rem;
  background: #fff;
  padding: 0.65rem 1.6rem 0.65rem 1.1rem;
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
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

const StyledPirce = styled.span`
  font-weight: ${({ theme }) => theme.regular};
  font-size: 0.8rem;
`;

const Product = ({ title, src, slug, price }) => {
  return (
    <StyledTitleWrapper key={title}>
      <StyledLink to={`/plants/${slug}`}>
        <StyledTitle>
          {title}
          <StyledPirce> /${price}</StyledPirce>
        </StyledTitle>
        <StyledImageWrapper className="image_reveal">
          <StyledImage src={src} alt={`${title} plant`} />
        </StyledImageWrapper>
      </StyledLink>
    </StyledTitleWrapper>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Product;
