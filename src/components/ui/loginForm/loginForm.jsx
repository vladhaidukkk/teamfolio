import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../store/auth';
import Form, { TextField, PasswordField, SubmitButton } from '../../common/form';
import Link from '../../common/link';
import FormBox from '../../common/formBox';

const LoginForm = () => {
  const { handleSubmit, control } = useForm();
  const { location } = useHistory();
  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    console.log(data);
    const redirect = location.state?.from.pathname ? location.state.from.pathname : '/';
    dispatch(logIn(data, redirect));
  };

  return (
    <Container>
      <FormBox>
        <Form title="Login" onSubmit={handleSubmit(handleFormSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField label="Email" value={value} error={error} onChange={onChange} />
            )}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "It's not email",
              },
            }}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <PasswordField value={value} error={error} onChange={onChange} />
            )}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should has min 8 symbols',
              },
              maxLength: {
                value: 20,
                message: 'Password should has max 20 symbols',
              },
              pattern: {
                value: /[0-9]/g,
                message: 'Password should contain at least 1 digit',
              },
            }}
          />
          <SubmitButton>Log in</SubmitButton>
          <Typography sx={{ mt: 2 }}>
            I don&prime;t have an account:&nbsp;
            <Link path="/registration">Sign up</Link>
          </Typography>
        </Form>
      </FormBox>
    </Container>
  );
};

export default LoginForm;
