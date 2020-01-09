import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Heading from '../components/atoms/Heading/Heading';
import Text from '../components/atoms/Text/Text';
import Button from '../components/atoms/Button/Button';
import { PlantContext } from '../context';

const StyledWrapper = styled.div`
  margin: 8rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    ${({ error }) =>
      error &&
      css`
        @media only screen and (min-width: 1000px) {
          flex-direction: column;
        }
      `};
  }
  @media only screen and (min-width: 1400px) {
    margin: 10rem 10rem 0 10rem;
  }
  @media only screen and (min-width: 1800px) {
    margin: 3rem 10rem 0 10rem;
  }
`;

const StyledPresentationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    width: 50%;
  }
`;

const StyledImagaWrapper = styled.figure`
  min-width: 80%;
  max-width: 760px;
  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 1000px) {
    width: 120rem;
  }
`;

const StyledTextWrapper = styled.section`
  width: 100%;
  margin: 2rem 0 0 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 1000px) {
    margin: 2rem 0 0 2rem;
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 2rem;
  text-decoration: none;
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
  @media only screen and (min-width: 1000px) {
    max-width: 85%;
  }
`;

const StyledPaymentWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
  width: 10rem;
  @media only screen and (min-width: 1000px) {
    width: 12rem;
    height: 4rem;
  }
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
    };
  }

  render() {
    const { slug } = this.state;
    const { getPlant } = this.context;
    const plant = getPlant(slug);
    if (!plant) {
      return (
        <StyledWrapper error>
          <Heading main>No such plant could be found</Heading>
          <StyledLink to="/">
            <Button secondary>Go back</Button>
          </StyledLink>
        </StyledWrapper>
      );
    }
    const { title, price, src, info, type } = plant;
    return (
      <StyledWrapper>
        <StyledPresentationWrapper>
          <StyledImagaWrapper>
            <img src={src} alt={`${title} plant`} />
          </StyledImagaWrapper>
        </StyledPresentationWrapper>
        <StyledTextWrapper>
          <StyledHeading main>{title}</StyledHeading>
          <StyledInfoWrapper>
            <Text main>
              type:
              <StyledTypeText>{type}</StyledTypeText>
            </Text>
            <Text main>{info}</Text>
            <StyledPaymentWrapper>
              <StyledTypeText price>${price}</StyledTypeText>
              <StyledButton secondary>Add to cart</StyledButton>
            </StyledPaymentWrapper>
          </StyledInfoWrapper>
        </StyledTextWrapper>
      </StyledWrapper>
    );
  }
}
SinglePlant.propTypes = {
  match: PropTypes.any.isRequired,
};
export default SinglePlant;
