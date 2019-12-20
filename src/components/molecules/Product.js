import React from 'react';
import styled from 'styled-components';
import Plant1 from '../../assets/images/jazmin-quaynor-8ioenvmof-I-unsplash.jpg';
import Plant2 from '../../assets/images/pawel-czerwinski-7EuUsw99KhE-unsplash.jpg';
import Plant3 from '../../assets/images/sarah-dorweiler-2s9aHF4eCjI-unsplash (1).jpg';
import Plant4 from '../../assets/images/sarah-dorweiler-9Z1KRIfpBTM-unsplash (1).jpg';
import Plant5 from '../../assets/images/sarah-dorweiler-m2J105CzEAU-unsplash.jpg';

const StyledWrapper = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  grid-column-gap: 2rem;
  max-width: 100%;
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
  width: 25rem;
  height: 14rem;
  overflow: hidden;
  position: relative;
  will-change: opacity;
  transition: opacity 0.3s ease-in-out;

  &:after {
    content: '';
    transition: transform 1.4s ease-in-out;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background: #fff;
    will-change: transform;
    animation: slideIn 1.4s forwards;
  }
  @keyframes slideIn {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  will-change: transform;
  transform: scale(1.3);
  transition: transform 1.4s ease-in-out;
  animation: zoomOut 1.4s forwards;
  @keyframes zoomOut {
    0% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const products = [
  {
    title: 'plant1',
    src: Plant1,
  },
  {
    title: 'plant2',
    src: Plant2,
  },
  {
    title: 'plant3',
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
const Product = () => (
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

export default Product;
