import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from '../components/atoms/Heading/Heading';
import Text from '../components/atoms/Text/Text';
import Button from '../components/atoms/Button/Button';
import PlantHalfPage from '../components/molecules/PlantHalfPage';
import Header from '../components/organisms/Header';
import FlowerPots from '../components/molecules/FlowerPots';
import Modal from '../components/molecules/Modal';
import { CartContext } from '../context/CartContext';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    overflow: hidden;
    height: 100vh;
  }

  ${({ notfound }) =>
    notfound &&
    css`
      height: 50vh;
      flex-direction: column;
      justify-content: space-around;
      @media only screen and (min-width: 1000px) {
        flex-direction: column;
      }
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
  @media only screen and (min-width: 1000px) {
    width: 50%;
    padding: 4rem 4rem 10rem 4rem;
  }
`;

const StyledTextWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0 0 0;
  @media only screen and (min-width: 1000px) {
    margin: 2rem 0 0 2rem;
  }
`;

const StyledTypeText = styled.span`
  color: ${({ theme }) => theme.fontColorHeading};
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
  margin: 1rem 0rem 7rem 0;
  width: 100%;
  display: flex;
  align-items: flex;
  justify-content: flex-end;

  @media only screen and (min-width: 1000px) {
    margin: 1rem 0 0 0;
  }
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
`;

class SinglePlant extends React.Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);

    const {
      match: {
        params: { slug },
      },
    } = this.props;

    this.state = {
      slug,
      isModal: false,
    };
  }

  openModal = () => {
    this.setState({
      isModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModal: false,
    });
  };

  render() {
    const { slug } = this.state;
    const { getPlant, addItem } = this.context;
    const plant = getPlant(slug);
    if (!plant) {
      return (
        <>
          <Header />
          <StyledWrapper notfound>
            <Heading main>No such plant could be found</Heading>
            <StyledLink to="/">
              <Button aria-label="go back" secondary>
                Go back
              </Button>
            </StyledLink>
          </StyledWrapper>
        </>
      );
    }
    const { plantTitle, plantPrice, plantDescription, plantType } = plant;
    const { isModal } = this.state;
    return (
      <StyledWrapper>
        <PlantHalfPage isSinglePlant isBackArrow />
        <StyledDeteailsWrapper>
          <StyledTextWrapper>
            <StyledHeading main>{plantTitle}</StyledHeading>
            <StyledInfoWrapper>
              <Text main>
                type:
                <StyledTypeText>{plantType}</StyledTypeText>
              </Text>
              <Text main>{plantDescription}</Text>
              <FlowerPots />
              <StyledPaymentWrapper>
                <StyledTypeText price>${plantPrice}</StyledTypeText>
                <StyledButton
                  aria-label="Add to cart"
                  secondary
                  onClick={() => {
                    addItem(plant);
                    this.openModal();
                  }}
                >
                  Add to cart
                </StyledButton>
              </StyledPaymentWrapper>
            </StyledInfoWrapper>
          </StyledTextWrapper>
        </StyledDeteailsWrapper>
        <Modal isVisible={isModal} handleModalChange={this.closeModal} />
      </StyledWrapper>
    );
  }
}

SinglePlant.propTypes = {
  match: PropTypes.any.isRequired,
};
export default SinglePlant;
