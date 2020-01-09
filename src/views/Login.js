import React from 'react';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import Heroplant from '../components/atoms/Plant/Plant';
import { fire } from '../firebase/Firebase';
import Text from '../components/atoms/Text/Text';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const StyledPlantWrapper = styled.div`
  background: hsl(153, 91%, 48%, 40%);
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem 3rem 13rem 3rem;
`;

const StyledLogoWrapper = styled.header`
  margin: 0 0 0rem 1rem;
  width: 100%;
`;

const StyledFormWrapper = styled.div`
  padding-top: 13rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const StyledForm = styled.form`
  width: 50%;
  padding: 3rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  padding: 1.2rem 0.5rem;
  margin: 1rem 0;
  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.fontColorText};
    font-size: 1rem;
  }
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
`;
const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  font-size: 4rem;
  margin-bottom: 2rem;
`;
const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
`;
const StyledButton = styled(Button)`
  width: 10rem;
  margin: 2rem 2rem 0 0;
`;

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
`;

const StyledTextWrapper = styled.div`
  margin-top: 2rem;
  width: 25rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    pageWidth: window.innerWidth,
    newAccount: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ pageWidth: window.innerWidth });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNewAccount = e => {
    e.preventDefault();
    this.setState(prevState => ({
      newAccount: !prevState.newAccount,
    }));
  };

  handleSignin = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password);
  };

  handleSignup = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password);
  };

  render() {
    const { pageWidth, newAccount } = this.state;
    return (
      <StyledWrapper onSubmit={this.handleSubmit}>
        {pageWidth >= 800 ? (
          <StyledPlantWrapper>
            <StyledLogoWrapper>
              <Text logo as="h1">
                Plants & Home
              </Text>
            </StyledLogoWrapper>
            <Heroplant />
          </StyledPlantWrapper>
        ) : (
          ''
        )}

        <StyledFormWrapper>
          <StyledForm signin>
            <StyledHeadingWrapper>
              <StyledHeading>{newAccount ? 'Sign up' : 'Sign in'}</StyledHeading>
            </StyledHeadingWrapper>
            <StyledInput
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <StyledButtonsWrapper>
              <StyledButton
                type="submit"
                onClick={newAccount ? this.handleSignup : this.handleSignin}
                secondary
              >
                {newAccount ? 'Sign up' : 'Sign in'}
              </StyledButton>
            </StyledButtonsWrapper>
            <StyledTextWrapper>
              <Text>{newAccount ? 'Have account?' : "Haven't got account?"}</Text>
              <Button onClick={this.handleNewAccount} active>
                {newAccount ? 'Sign in' : 'Sign up'}
              </Button>
            </StyledTextWrapper>
          </StyledForm>
          <StyledFooter>
            <Text as="span">
              Made with{' '}
              <span role="img" aria-label="Heart icon">
                💚
              </span>{' '}
              by Olaf Sulich
            </Text>
          </StyledFooter>
        </StyledFormWrapper>
      </StyledWrapper>
    );
  }
}

export default Login;
