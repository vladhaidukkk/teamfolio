import { Avatar, Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { UniversalBreadcrumbs } from '../../components/common';
import { storageService } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountData, updateUser } from '../../store/users';
import { getAccountId } from '../../store/auth';
import FormBox from '../../components/common/formBox';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Form, { DateField, FileField, SubmitButton, TextField } from '../../components/common/form';
import { Controller, useForm } from 'react-hook-form';
import { LocalizationProvider } from '@mui/lab';

const Account = () => {
  const dispatch = useDispatch();
  const accountId = useSelector(getAccountId());
  const accountData = useSelector(getAccountData());
  const [file, setFile] = useState(null);
  const { control, handleSubmit } = useForm();

  const handleAvatarChange = async ({ target }) => {
    const selectedFile = target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleFormSubmit = async (data) => {
    if (file) {
      const avatarUrl = await storageService.uploadAvatar(file);
      dispatch(updateUser(accountId, { avatarUrl, ...data }));
    } else {
      dispatch(updateUser(accountId, { ...data }));
    }
  };

  return (
    <Container>
      <UniversalBreadcrumbs
        input={[
          { name: 'Main', path: '/' },
          { name: 'Account', path: '' },
        ]}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormBox>
          <Form title="Edit Account" onSubmit={handleSubmit(handleFormSubmit)}>
            <Box
              sx={{
                mt: '5ch',
                pb: 1,
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Avatar
                alt={accountData.firstName + ' ' + accountData.lastName}
                src={accountData.avatarUrl}
                sx={{ width: 100, height: 100, mr: 2 }}
              />
              <FileField id="avatar-img" onChange={handleAvatarChange} />
            </Box>
            <Controller
              name="email"
              control={control}
              defaultValue={accountData.email}
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
              defaultValue={accountData.firstName}
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
              defaultValue={accountData.lastName}
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
              defaultValue={new Date(accountData.dateOfBirth)}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <DateField label="Date of birth" value={value} error={error} onChange={onChange} />
              )}
              rules={{
                required: 'Date of birth is required',
              }}
            />
            <SubmitButton>Save changes</SubmitButton>
          </Form>
        </FormBox>
      </LocalizationProvider>
    </Container>
  );
};

export default Account;
