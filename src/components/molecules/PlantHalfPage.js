import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../atoms/Text/Text';
import Heroplant from '../atoms/Plant/Plant';
import HeaderIcons from './HeaderIcons';
import Button from '../atoms/Button/Button';

const StyledPlantWrapper = styled.div`
  background: hsl(153, 91%, 48%, 40%);
  background-color: ${({ theme }) => theme.halfPlantColor};
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 4rem 4rem 12rem 4rem;
  @media only screen and (min-width: 1000px) {
    width: 50%;
  }
`;

const StyledLogoWrapper = styled.section`
  margin: 0 0 10rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledLinkArrow = styled(Link)`
  text-decoration: none;
  margin-left: 6.5rem;
  @media only screen and (max-width: 500px) {
    margin-left: 0;
  }
`;

const PlantHalfPage = ({ isLoginPage, isSinglePlant, isBackArrow }) => {
  return (
    <StyledPlantWrapper>
      <StyledLogoWrapper>
        {isBackArrow ? <Button back onClick={() => window.history.back()}></Button> : null}
        {isBackArrow ? (
          <StyledLinkArrow to="/">
            <Text logo as="h1">
              Plants & Home
            </Text>
          </StyledLinkArrow>
        ) : (
          <StyledLink to="/">
            <Text logo as="h1">
              Plants & Home
            </Text>
          </StyledLink>
        )}

        {isLoginPage ? null : <HeaderIcons isSinglePlant={isSinglePlant} />}
      </StyledLogoWrapper>
      <Heroplant />
    </StyledPlantWrapper>
  );
};

PlantHalfPage.propTypes = {
  isLoginPage: PropTypes.bool,
  isSinglePlant: PropTypes.bool,
  isBackArrow: PropTypes.bool,
};
PlantHalfPage.defaultProps = {
  isLoginPage: null,
  isSinglePlant: null,
  isBackArrow: null,
};

export default PlantHalfPage;
