import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { fire } from '../firebase/Firebase';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import PlantHalfPage from '../components/molecules/PlantHalfPage';
import Text from '../components/atoms/Text/Text';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    overflow: hidden !important;
    height: 100vh;
  }
`;

const StyledFormWrapper = styled.div`
  min-height: 80vh;
  margin-top: 8rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media only screen and (min-width: 1000px) {
    margin-bottom: 0rem;
    min-height: auto;
  }
`;

const StyledForm = styled.form`
  width: 50%;
  padding: 3rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: left;
`;

const StyledInput = styled(Input)`
  position: relative;
  padding: 1.2rem 0.5rem;
  /* margin: 0.5rem 0 1rem 0; */
  :last-of-type {
    margin: 1.5rem 0 1rem 0;
  }

  ::placeholder {
    color: transparent;
  }

  :not(:placeholder-shown) + label,
  :focus + label {
    transform: translate(0, -50%);
    cursor: pointer;
  }

  :focus + ::placeholder {
    color: inherit;
  }

  :focus {
    outline: 0;
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
  margin-top: 2rem;
`;

const StyledTextWrapper = styled.div`
  margin-top: 2rem;
  width: 25rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAuthor = styled.a`
  text-decoration: none;
  margin: 0 0 0 0.2rem;
  color: inherit;
`;

const StyledInputLabelWrapper = styled.div`
  display: flex;
  flex-flow: column-reverse;
  position: relative;

  input + label {
    line-height: 1;
    height: 4rem;
    transition: transform 0.25s, opacity 0.25s ease-in-out;
    transform-origin: 0 0;
    transform: translate(10px, 20%);
    position: absolute;
  }
`;

const StyledLabel = styled.label`
  letter-spacing: 1px;
  color: ${({ theme }) => theme.fontColorText};
  font-size: 1rem;
  position: absolute;
  user-select: none;
`;

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [newAccount, setNewAccount] = useState(false);

  const updateDimensions = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleNewAccount = e => {
    e.preventDefault();
    setNewAccount(prevNewAccount => !prevNewAccount);
  };

  const handleSignin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      /* eslint-disable */
      .catch(error => alert(`Your email or password is incorrect, please check your data`));
  };

  const handleSignup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => alert(`Email is already in use, sign in or use other email`));
  };

  return (
    <StyledWrapper>
      <PlantHalfPage isLoginPage={true} />
      <StyledFormWrapper>
        <StyledForm signin onSubmit={handleSubmit(newAccount ? handleSignup : handleSignin)}>
          <StyledHeadingWrapper>
            <StyledHeading>{newAccount ? 'Sign up' : 'Sign in'}</StyledHeading>
          </StyledHeadingWrapper>
          <StyledInputLabelWrapper>
            <StyledInput
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleEmailChange}
              aria-label="email"
              aria-required="true"
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            <StyledLabel htmlFor="email">Email</StyledLabel>
          </StyledInputLabelWrapper>

          {errors.email && errors.email.type === 'required' && (
            <Text errorMessage>Email is required</Text>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <Text errorMessage>Email is invalid please add @</Text>
          )}

          <StyledInputLabelWrapper>
            <StyledInput
              name="password"
              placeholder="myPassword1"
              type="password"
              onChange={handlePasswordChange}
              aria-label="password"
              aria-required="true"
              ref={register({
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
            />
            <StyledLabel forHtml="password">Password</StyledLabel>
          </StyledInputLabelWrapper>

          {errors.password && errors.password.type === 'required' && (
            <Text errorMessage>Password is required</Text>
          )}
          {errors.password && errors.password.type === 'pattern' && (
            <Text errorMessage>
              Password should contain min. 8 characters, one uppercase letter, one lowercase letter
              and number
            </Text>
          )}

          <StyledButtonsWrapper>
            <StyledButton type="submit" secondary>
              {newAccount ? 'Sign up' : 'Sign in'}
            </StyledButton>
          </StyledButtonsWrapper>
          <StyledTextWrapper>
            <Text>{newAccount ? 'Have account?' : "Haven't got account?"}</Text>
            <Button aria-label="sign in/sign up" onClick={handleNewAccount} active>
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
            by
            <StyledAuthor href="https://example.net/author" rel="author">
              Olaf Sulich
            </StyledAuthor>{' '}
          </Text>
        </StyledFooter>
      </StyledFormWrapper>
    </StyledWrapper>
  );
};

export default Login;
