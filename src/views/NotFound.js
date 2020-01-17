import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/organisms/Header';
import NotfoundSVG from '../assets/svg/404.svg';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
const StyledWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledSVGWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 35rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 3rem;
`;

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <StyledWrapper>
          <StyledHeading>404 not found</StyledHeading>
          <StyledLink to="/">
            <Button secondary>Go back</Button>
          </StyledLink>
          <StyledSVGWrapper>
            <img src={NotfoundSVG} alt="404 icon" />
          </StyledSVGWrapper>
        </StyledWrapper>
      </main>
    </>
  );
};

export default NotFound;
