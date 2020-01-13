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
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const StyledFormWrapper = styled.div`
  margin-top: 6rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media only screen and (min-width: 800px) {
    margin-top: 12rem;
  }
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
  position: relative;
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
  margin-bottom: 3rem;
`;

const StyledTextWrapper = styled.div`
  margin-top: 2rem;
  width: 25rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
    fire.auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <StyledWrapper>
      {pageWidth >= 800 ? <PlantHalfPage /> : null}

      <StyledFormWrapper>
        <StyledForm signin onSubmit={handleSubmit(newAccount ? handleSignup : handleSignin)}>
          <StyledHeadingWrapper>
            <StyledHeading>{newAccount ? 'Sign up' : 'Sign in'}</StyledHeading>
          </StyledHeadingWrapper>
          <StyledInput
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <Text errorMessage>Email is required</Text>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <Text errorMessage>Email is invalid please add @</Text>
          )}

          <StyledInput
            name="password"
            placeholder="Password"
            type="password"
            onChange={handlePasswordChange}
            ref={register({
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            })}
          />
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
            <Button onClick={handleNewAccount} active>
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
};

export default Login;
