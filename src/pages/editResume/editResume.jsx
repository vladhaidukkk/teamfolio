import { Container } from '@mui/material';
import React from 'react';
import { UniversalBreadcrumbs } from '../../components/common';
import FormBox from '../../components/common/formBox';
import Form, {
  MultiSelectField,
  SliderField,
  SubmitButton,
  TextareaField,
  TextField,
} from '../../components/common/form';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountData, updateUser } from '../../store/users';
import { isGuest } from '../../utils/helpers';
import {
  LanguagesConstants,
  RolesConstants,
  SkillsConstants,
  UserStatusConstants,
} from '../../utils/constants';
import { Facebook, GitHub, LinkedIn, Telegram, Twitter } from '@mui/icons-material';
import { getAccountId } from '../../store/auth';

const EditResume = () => {
  const accountData = useSelector(getAccountData());
  const accountId = useSelector(getAccountId());
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    let status = accountData.status;
    if (isGuest(accountData)) {
      status = UserStatusConstants.Candidate;
    }
    dispatch(updateUser(accountId, { ...data, status }, '/resume'));
  };

  return (
    <>
      <Container>
        <UniversalBreadcrumbs
          input={[
            { name: 'Main', path: '/' },
            { name: 'Edit resume', path: '' },
          ]}
        />
        <FormBox>
          <Form
            title={isGuest(accountData) ? 'Create Resume' : 'Edit Resume'}
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Controller
              name="shortIntroduction"
              control={control}
              defaultValue={isGuest(accountData) ? '' : accountData.shortIntroduction}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextareaField
                  label="Short introduction"
                  value={value}
                  error={error}
                  onChange={onChange}
                  rows={3}
                />
              )}
              rules={{
                required: 'Short introduction is required',
              }}
            />
            <Controller
              name="description"
              control={control}
              defaultValue={isGuest(accountData) ? '' : accountData.description}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextareaField
                  label="Description"
                  value={value}
                  error={error}
                  onChange={onChange}
                  rows={4}
                />
              )}
              rules={{
                required: 'Description is required',
              }}
            />
            <Controller
              name="roles"
              control={control}
              defaultValue={isGuest(accountData) ? [] : accountData.roles}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <MultiSelectField
                  label="Roles"
                  value={value}
                  onChange={onChange}
                  error={error}
                  options={RolesConstants.Entities}
                />
              )}
              rules={{
                required: 'You have to select min 1 role',
              }}
            />
            <Controller
              name="skills"
              control={control}
              defaultValue={isGuest(accountData) ? [] : accountData.skills}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <MultiSelectField
                  label="Skills"
                  value={value}
                  onChange={onChange}
                  error={error}
                  options={SkillsConstants.Entities}
                />
              )}
              rules={{
                required: 'You have to select min 1 skill',
              }}
            />
            <Controller
              name="experience"
              control={control}
              defaultValue={isGuest(accountData) ? '' : accountData.experience}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextareaField
                  label="Experience"
                  value={value}
                  error={error}
                  onChange={onChange}
                  rows={4}
                />
              )}
              rules={{
                required: 'Experience is required',
              }}
            />
            <Controller
              name="languages"
              control={control}
              defaultValue={isGuest(accountData) ? [] : accountData.languages}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <MultiSelectField
                  label="Languages"
                  value={value}
                  onChange={onChange}
                  error={error}
                  options={LanguagesConstants.Entities}
                />
              )}
              rules={{
                required: 'You have to select min 1 language',
              }}
            />
            <Controller
              name="hardSkillsLevel"
              control={control}
              defaultValue={isGuest(accountData) ? 0 : accountData.hardSkillsLevel}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <SliderField onChange={onChange} value={value} label="Level of Hard Skills" />
              )}
            />
            <Controller
              name="softSkillsLevel"
              control={control}
              defaultValue={isGuest(accountData) ? 0 : accountData.softSkillsLevel}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <SliderField onChange={onChange} value={value} label="Level of Soft Skills" />
              )}
            />
            <Controller
              name="sportSkillsLevel"
              control={control}
              defaultValue={isGuest(accountData) ? 0 : accountData.sportSkillsLevel}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <SliderField onChange={onChange} value={value} label="Level of Sport Skills" />
              )}
            />
            <Controller
              name="githubUrl"
              control={control}
              defaultValue={isGuest(accountData) ? '' : accountData.githubUrl}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="GitHub Link"
                  value={value}
                  error={error}
                  onChange={onChange}
                  icon={<GitHub />}
                />
              )}
              rules={{
                pattern: { value: /https?:\/\/\S+$/, message: 'GutHub link is incorrect' },
              }}
            />
            <Controller
              name="linkedinUrl"
              control={control}
              defaultValue={isGuest(accountData) ? '' : accountData.linkedinUrl}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="LinkedIn Link"
                  value={value}
                  error={error}
                  onChange={onChange}
                  icon={<LinkedIn />}
                />
              )}
              rules={{
                pattern: { value: /https?:\/\/\S+$/, message: 'LinkedIn link is incorrect' },
              }}
            />
            <Controller
              name="twitterUrl"
              control={control}
              defaultValue={isGuest(accountData) ? '' : accountData.twitterUrl}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="Twitter Link"
                  value={value}
                  error={error}
                  onChange={onChange}
                  icon={<Twitter />}
                />
              )}
              rules={{
                pattern: { value: /https?:\/\/\S+$/, message: 'Twitter link is incorrect' },
              }}
            />
            <Controller
              name="facebookUrl"
              control={control}
              defaultValue={isGuest(accountData) ? '' : accountData.facebookUrl}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="Facebook Link"
                  value={value}
                  error={error}
                  onChange={onChange}
                  icon={<Facebook />}
                />
              )}
              rules={{
                pattern: { value: /https?:\/\/\S+$/, message: 'Telegram link is incorrect' },
              }}
            />
            <Controller
              name="telegramUrl"
              control={control}
              defaultValue={isGuest(accountData) ? '' : accountData.telegramUrl}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="Telegram Link"
                  value={value}
                  error={error}
                  onChange={onChange}
                  icon={<Telegram />}
                />
              )}
              rules={{
                pattern: { value: /https?:\/\/\S+$/, message: 'Telegram link is incorrect' },
              }}
            />
            <SubmitButton>{isGuest(accountData) ? 'Create resume' : 'Save changes'}</SubmitButton>
          </Form>
        </FormBox>
      </Container>
    </>
  );
};

export default EditResume;
