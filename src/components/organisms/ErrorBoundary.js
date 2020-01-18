import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Notfound from '../../assets/svg/NotFound.png';
import Heading from '../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  margin: 5rem 0 0 0;
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

const StyledHeading = styled(Heading)`
  margin-bottom: 3rem;
`;

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = error => {
    return { hasError: true };
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <>
        <main>
          <StyledWrapper>
            <StyledHeading>Caution! This Page is Cordoned Off</StyledHeading>
            <StyledSVGWrapper>
              <img src={Notfound} alt="404 icon" />
            </StyledSVGWrapper>
          </StyledWrapper>
        </main>
      </>
    ) : (
      children
    );
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ErrorBoundary;
