import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from '../components/atoms/Heading/Heading';
import Text from '../components/atoms/Text/Text';
import Button from '../components/atoms/Button/Button';
import PlantHalfPage from '../components/molecules/PlantHalfPage';
import Header from '../components/organisms/Header';
import HeaderIcons from '../components/molecules/HeaderIcons';
import FlowerPots from '../components/molecules/FlowerPots';
import { PlantContext } from '../context';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    overflow: hidden;
  }

  ${({ error }) =>
    error &&
    css`
      height: 50vh;
      flex-direction: column;
      justify-content: space-around;
    `}
`;
const StyledDeteailsWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 6rem 4rem 0rem 2rem;
  @media only screen and (min-width: 800px) {
    width: 50%;
    padding: 4rem 4rem 10rem 4rem;
  }
`;

const StyledIconsWrapper = styled.div`
  margin: 1rem 0 3rem 1rem;
  width: 100%;
`;
const StyledTextWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0 0 0;
  @media only screen and (min-width: 800px) {
    margin: 2rem 0 0 2rem;
  }
`;

const StyledTypeText = styled.span`
  color: ${({ theme }) => theme.fontColorHeader};
  font-weight: ${({ theme }) => theme.bold};
  margin: 0.5rem;

  ${({ price }) =>
    price &&
    css`
      color: ${({ theme }) => theme.fontColorHeading};
      font-size: 2rem;
    `};
`;

const StyledInfoWrapper = styled.article`
  margin-top: 2rem;
`;

const StyledPaymentWrapper = styled.div`
  margin: 1rem 0rem 0 0;
  width: 100%;
  display: flex;
  align-items: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
  width: 12rem;
  height: 4rem;
`;

const StyledHeading = styled(Heading)`
  font-size: 3.5rem;

  @media only screen and (min-width: 500px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 5rem;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;

  ${({ error }) =>
    error &&
    css`
      margin-bottom: 8rem;
    `}
`;

class SinglePlant extends React.Component {
  static contextType = PlantContext;

  constructor(props) {
    super(props);

    const {
      match: {
        params: { slug },
      },
    } = this.props;

    this.state = {
      slug,
      pageWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ pageWidth: window.innerWidth });
  };

  render() {
    const { slug } = this.state;
    const { getPlant } = this.context;
    const plant = getPlant(slug);
    if (!plant) {
      return (
        <>
          <Header />
          <StyledWrapper error>
            <Heading main>No such plant could be found</Heading>
            <StyledLink error to="/">
              <Button secondary>Go back</Button>
            </StyledLink>
          </StyledWrapper>
        </>
      );
    }
    const { title, price, info, type } = plant;
    const { pageWidth } = this.state;
    return (
      <StyledWrapper>
        {pageWidth >= 800 ? (
          <PlantHalfPage />
        ) : (
          <>
            <Header />
          </>
        )}
        <StyledDeteailsWrapper>
          {pageWidth >= 800 ? (
            <StyledIconsWrapper>
              <HeaderIcons />
            </StyledIconsWrapper>
          ) : null}

          <StyledTextWrapper>
            <StyledHeading main>{title}</StyledHeading>
            <StyledInfoWrapper>
              <Text main>
                type:
                <StyledTypeText>{type}</StyledTypeText>
              </Text>
              <Text main>{info}</Text>
              <FlowerPots />
              <StyledPaymentWrapper>
                <StyledTypeText price>${price}</StyledTypeText>
                <StyledButton secondary>Add to cart</StyledButton>
              </StyledPaymentWrapper>
            </StyledInfoWrapper>
          </StyledTextWrapper>
        </StyledDeteailsWrapper>
      </StyledWrapper>
    );
  }
}

SinglePlant.propTypes = {
  match: PropTypes.any.isRequired,
};
export default SinglePlant;