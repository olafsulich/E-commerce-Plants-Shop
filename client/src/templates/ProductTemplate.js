import React from 'react';
import styled from 'styled-components';
import MainTemplate from './MainTemplate';
import Header from '../components/organisms/Header';
import ProductImage from '../assets/images/jazmin-quaynor-8ioenvmof-I-unsplash.jpg';
import Heading from '../components/atoms/Heading/Heading';
import Text from '../components/atoms/Text/Text';

const StyledWrapper = styled.div`
  max-height: 100vh;
  overflow: hidden;
  margin: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const StyledWrapperImage = styled.figure`
  display: grid;
  grid-template-columns: 1fr;
  width: 25rem;
  height: 30vh;
  margin: 0 0 3rem 0;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledWrapperDescription = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 25rem;
  min-height: 30vh;
`;

const ProductTemplate = () => (
  <MainTemplate>
    <>
      <Header />
      <main>
        <StyledWrapper>
          <StyledWrapperImage>
            <StyledImage src={ProductImage} />
          </StyledWrapperImage>
          <StyledWrapperDescription>
            <Heading main>Ohidea Tree</Heading>
            <Text main>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis enim, facilisis
              ut mollis id, bibendum congue elit. Fusce varius purus congue, tempor lectus id,
              dignissim enim. Curabitur mattis ipsum luctus imperdiet finibus. Etiam tellus lorem,
              accumsan nec diam non, cursus mollis lectus.{' '}
            </Text>
          </StyledWrapperDescription>
        </StyledWrapper>
      </main>
    </>
  </MainTemplate>
);
export default ProductTemplate;
