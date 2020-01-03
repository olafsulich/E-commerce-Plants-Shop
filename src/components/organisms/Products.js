import React from 'react';
import styled from 'styled-components';
import Plant1 from '../../assets/images/jazmin-quaynor-8ioenvmof-I-unsplash.jpg';
import Plant2 from '../../assets/images/pawel-czerwinski-7EuUsw99KhE-unsplash.jpg';
import Plant3 from '../../assets/images/sarah-dorweiler-2s9aHF4eCjI-unsplash (1).jpg';
import Plant4 from '../../assets/images/sarah-dorweiler-9Z1KRIfpBTM-unsplash (1).jpg';
import Plant5 from '../../assets/images/sarah-dorweiler-m2J105CzEAU-unsplash.jpg';

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
const products = [
  {
    title: 'Orhidea',
    src: Plant1,
  },
  {
    title: 'Saupal',
    src: Plant2,
  },
  {
    title: 'Momo Tree',
    src: Plant3,
  },
  {
    title: 'plant4',
    src: Plant4,
  },
  {
    title: 'plant5',
    src: Plant5,
  },
];
const Products = () => (
  <StyledWrapper>
    {products.map(({ title, src }) => (
      <StyledTitleWrapper key={title}>
        <StyledTitle>{title}</StyledTitle>
        <StyledImageWrapper>
          <StyledImage src={src} alt={title} />
        </StyledImageWrapper>
      </StyledTitleWrapper>
    ))}
  </StyledWrapper>
);

export default Products;
