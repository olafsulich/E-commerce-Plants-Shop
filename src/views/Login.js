import React from 'react';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import fire from '../firebase/Firebase';

const StyledWrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 3rem;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1500px) {
    margin: 3rem 12rem;
  }
`;

const StyledForm = styled.form`
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
  margin: 3rem 2rem 0 0;
`;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password);
  };

  signup = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password);
  };

  render() {
    return (
      <StyledWrapper onSubmit={this.handleSubmit}>
        <StyledForm signin>
          <StyledHeading>Sign in</StyledHeading>
          <StyledInput
            name="email"
            type="email"
            required
            placeholder="Email"
            onChange={this.handleChange}
          />
          <StyledInput
            name="password"
            required
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <StyledButtonsWrapper>
            <StyledButton type="submit" onClick={this.login} secondary>
              Sign in
            </StyledButton>
          </StyledButtonsWrapper>
        </StyledForm>
        <StyledForm>
          <StyledHeading>Sign up</StyledHeading>
          <StyledInput
            name="email"
            type="email"
            required
            placeholder="Email"
            onChange={this.handleChange}
          />
          <StyledInput
            name="password"
            required
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <StyledButton onClick={this.signup} type="submit" secondary>
            Sign up
          </StyledButton>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default Login;
