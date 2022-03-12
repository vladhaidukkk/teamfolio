import { Avatar, Box, Button, Container, Input, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { UniversalBreadcrumbs } from '../../components/common';
import { storageService } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountData, updateUser } from '../../store/users';
import { getAccountId } from '../../store/auth';

const Account = () => {
  const dispatch = useDispatch();
  const accountId = useSelector(getAccountId());
  const accountData = useSelector(getAccountData());
  const [file, setFile] = useState(null);

  const handleChange = async ({ target }) => {
    const selectedFile = target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleFormSubmit = async () => {
    if (file) {
      const avatarUrl = await storageService.uploadAvatar(file);
      dispatch(updateUser(accountId, { avatarUrl }));
    }
  };

  return (
    <>
      <Container>
        <UniversalBreadcrumbs
          input={[
            { name: 'Main', path: '/' },
            { name: 'Account', path: '' },
          ]}
        />
        <Box mt="5ch">
          <Stack width="50ch" spacing={2}>
            <Typography variant="h4">Account page</Typography>
            <Input type="file" onChange={handleChange} />
            <Button onClick={handleFormSubmit} variant="contained">
              send
            </Button>
          </Stack>
          <Box mt="5ch">
            <Avatar
              alt={accountData.firstName + ' ' + accountData.lastName}
              src={accountData.avatarUrl}
              sx={{ width: 140, height: 140 }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Account;
