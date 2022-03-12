import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography } from '@mui/material';
import { signUp } from '../../../store/auth';
import FormBox from '../../common/formBox';
import Form, { DateField, PasswordField, SubmitButton, TextField } from '../../common/form';
import { Controller, useForm } from 'react-hook-form';
import Link from '../../common/link';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const RegistrationForm = () => {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    dispatch(signUp(data));
  };

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormBox>
          <Form title="Registration" onSubmit={handleSubmit(handleFormSubmit)}>
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
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField label="First name" value={value} error={error} onChange={onChange} />
              )}
              rules={{
                required: 'First name is required',
              }}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField label="Last name" value={value} error={error} onChange={onChange} />
              )}
              rules={{
                required: 'Last name is required',
              }}
            />
            <Controller
              name="dateOfBirth"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <DateField label="Date of birth" value={value} error={error} onChange={onChange} />
              )}
              rules={{
                required: 'Date of birth is required',
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
            <SubmitButton>Sing up</SubmitButton>
            <Typography sx={{ mt: 2 }}>
              I already have and account:&nbsp;
              <Link path="/login">Log in</Link>
            </Typography>
          </Form>
        </FormBox>
      </LocalizationProvider>
    </Container>
  );
};

export default RegistrationForm;
