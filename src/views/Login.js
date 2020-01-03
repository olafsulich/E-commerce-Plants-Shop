import React from 'react';
import styled, { css } from 'styled-components';
import { signInWithGoogle } from '../firebase/Firebase';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';

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

  ${({ signin }) =>
    signin &&
    css`
      @media only screen and (min-width: 700px) {
        margin-bottom: 5rem;
      }
    `}
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

// const Login = () => (
//   <StyledWrapper>
//     <StyledForm signin>
//       <StyledHeading>Sign in</StyledHeading>
//       <StyledInput type="email" placeholder="Email" />
//       <StyledInput type="password" placeholder="Password" />
//       <StyledButton secondary>Sign in</StyledButton>
//     </StyledForm>
//     <StyledForm>
//       <StyledHeading>Sign up</StyledHeading>
//       <StyledInput type="email" placeholder="Email" />
//       <StyledInput type="password" placeholder="Password" />
//       <StyledInput type="password" placeholder="Confirm password" />
//       <StyledButton secondary>Sign up</StyledButton>
//     </StyledForm>
//   </StyledWrapper>
// );

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <StyledWrapper onSubmit={this.handleSubmit}>
        <StyledForm signin>
          <StyledHeading>Sign in</StyledHeading>
          <StyledInput
            name="email"
            value={email}
            type="email"
            required
            placeholder="Email"
            onChange={this.handleChange}
          />
          <StyledInput
            name="password"
            value={password}
            required
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <StyledButtonsWrapper>
            <StyledButton type="submit" secondary>
              Sign in
            </StyledButton>
            <StyledButton onClick={signInWithGoogle} secondary google>
              Google
            </StyledButton>
          </StyledButtonsWrapper>
        </StyledForm>
        <StyledForm>
          <StyledHeading>Sign up</StyledHeading>
          <StyledInput
            name="email"
            value={email}
            type="email"
            required
            placeholder="Email"
            onChange={this.handleChange}
          />
          <StyledInput
            name="password"
            value={password}
            required
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <StyledInput
            name="password"
            value={password}
            required
            type="password"
            placeholder="Confirm password"
            onChange={this.handleChange}
          />
          <StyledButton type="submit" secondary>
            Sign up
          </StyledButton>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default Login;
